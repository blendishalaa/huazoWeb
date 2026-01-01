#!/bin/bash
# Quick deployment script for Huazo Web (Angular static build)
# Usage: ./deploy.sh

set -e

DROPLET_IP="${DROPLET_IP:-164.90.233.177}"
DROPLET_USER="${DROPLET_USER:-root}"
DROPLET_PATH="${DROPLET_PATH:-/var/www/huazo-web}"
SSH_KEY_PATH="${SSH_KEY_PATH:-$HOME/.ssh/huazo_deploy}"
BUILD_CMD="${BUILD_CMD:-npm run build}"
OUTPUT_DIR="${OUTPUT_DIR:-dist/huazo-web}"
SKIP_BUILD="${SKIP_BUILD:-false}"
HEALTHCHECK_URL="${HEALTHCHECK_URL:-https://huazo.app}"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOCAL_PATH="${LOCAL_PATH:-$SCRIPT_DIR}"

# Require SSH key for deployment
if [ ! -f "$SSH_KEY_PATH" ]; then
  echo "❌ SSH key not found at: $SSH_KEY_PATH"
  echo "   Set SSH_KEY_PATH or create a key first."
  exit 1
fi

SSH_OPTIONS="-i $SSH_KEY_PATH -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"

# Function to run SSH command
ssh_with_key() {
  ssh $SSH_OPTIONS "$DROPLET_USER@$DROPLET_IP" "$@"
}

# Function to run rsync
rsync_with_key() {
  rsync -avz --delete -e "ssh $SSH_OPTIONS" "$@"
}

echo "🚀 Starting web deployment to droplet..."
echo ""

# Step 1: Build
if [ "$SKIP_BUILD" != "true" ]; then
  echo "🔨 Step 1: Building project locally..."
  cd "$LOCAL_PATH"
  $BUILD_CMD
  echo "✅ Build complete!"
  echo ""
else
  echo "ℹ️  Step 1: Skipping build (SKIP_BUILD=true)"
  echo ""
fi

# Step 2: Verify build output
if [ ! -d "$LOCAL_PATH/$OUTPUT_DIR" ]; then
  echo "❌ Error: $OUTPUT_DIR not found. Build failed or output path is incorrect."
  exit 1
fi

# Step 3: Ensure remote path exists
echo "📁 Step 2: Ensuring runtime path exists on droplet..."
ssh_with_key "mkdir -p $DROPLET_PATH"
echo ""

# Step 4: Transfer dist folder only
echo "📦 Step 3: Transferring dist folder to droplet..."
rsync_with_key "$LOCAL_PATH/$OUTPUT_DIR/" "$DROPLET_USER@$DROPLET_IP:$DROPLET_PATH/"
echo "✅ dist folder transferred!"
echo ""

# Step 5: Optional health check
echo "🩺 Step 4: Health check..."
if command -v curl &> /dev/null; then
  if curl -fsS "$HEALTHCHECK_URL" >/dev/null; then
    echo "✅ Health check passed: $HEALTHCHECK_URL"
  else
    echo "⚠️  Health check failed: $HEALTHCHECK_URL"
  fi
else
  echo "⚠️  curl not found, skipping health check."
fi
echo ""

echo "✅ Deployment complete!"
echo ""
echo "🔐 SSH key path: $SSH_KEY_PATH"
