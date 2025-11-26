export interface Translations {
  // Header
  header: {
    home: string;
    pricing: string;
    about: string;
    contact: string;
    downloadApp: string;
  };
  
  // Pricing Page
  pricing: {
    title: string;
    subtitle: string;
    individualPlans: string;
    companyPlans: string;
    mostPopular: string;
    startFree: string;
    chooseStarter: string;
    chooseGrowth: string;
    choosePro: string;
    contactSales: string;
    visibilityBoosts: string;
    freePeriodRules: string;
    boostType: string;
    updatedPrice: string;
    duration: string;
    visibilityEffect: string;
    notes: string;
    userType: string;
    freeUploadRules: string;
    timeLimit: string;
    faqTitle: string;
    faq: {
      question1: string;
      answer1: string;
      question2: string;
      answer2: string;
      question3: string;
      answer3: string;
      question4: string;
      answer4: string;
    };
  };
  
  // Plans
  plans: {
    [key: string]: {
      name: string;
      description: string;
      features: string[];
      period: string;
    };
  };
  
  // Visibility Boosts
  boosts: {
    [key: string]: {
      boostType: string;
      duration: string;
      visibilityEffect: string;
      notes: string;
    };
  };
  
  // Free Period Rules
  freeRules: {
    [key: string]: {
      userType: string;
      freeUploadRules: string;
      timeLimit: string;
    };
  };
  
  // Chat Widget
  chat?: {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    instruction: string;
    placeholder: string;
    send: string;
    openChat: string;
  };
}

export const translations: { [key: string]: Translations } = {
  sq: {
    header: {
      home: 'Shtëpia',
      pricing: 'Çmimet',
      about: 'Rreth Nesh',
      contact: 'Kontakt',
      downloadApp: 'Shkarko aplikacionin'
    },
    pricing: {
      title: 'Planet e Abonimit Huazo',
      subtitle: 'Zgjidh planin që i përshtatet më mirë nevojave të tua. Ndrysho ose anulo kur të duash.',
      individualPlans: 'Planet Individuale',
      companyPlans: 'Planet për Kompani',
      mostPopular: 'Më i Popullarizuar',
      startFree: 'Fillo Falas',
      chooseStarter: 'Zgjidh Starter',
      chooseGrowth: 'Zgjidh Growth',
      choosePro: 'Zgjidh Pro',
      contactSales: 'Kontakto Shitjet',
      visibilityBoosts: 'Huazo Visibility Boosts (Çmimet e Rekomanduara të Përditësuara)',
      freePeriodRules: 'Rregullat e Periudhës Falas (për qartësi)',
      boostType: 'Lloji i Boost',
      updatedPrice: 'Çmimi i Përditësuar (€)',
      duration: 'Kohëzgjatja',
      visibilityEffect: 'Efekti i Dukshmërisë',
      notes: 'Shënime',
      userType: 'Lloji i Përdoruesit',
      freeUploadRules: 'Rregullat e Ngarkimit Falas',
      timeLimit: 'Kufiri i Kohës',
      faqTitle: 'Pyetjet e Bëra Shpesh',
      faq: {
        question1: 'A mund ta ndryshoj planin tim në çdo kohë?',
        answer1: 'Po, mund ta përmirësosh ose ta ulësh planin tënd në çdo moment. Ndryshimet do të zbatohen në ciklin e ardhshëm të faturimit.',
        question2: 'A ka një periudhë kontrate?',
        answer2: 'Jo, nuk ka kontratë afatgjatë. Mund ta anulosh abonimin tënd në çdo kohë pa tarifa shtesë.',
        question3: 'Si funksionon pagesa?',
        answer3: 'Pagesa bëhet automatikisht çdo muaj. Pranojmë karta krediti dhe debiti, si dhe PayPal.',
        question4: 'A ka një periudhë provë?',
        answer4: 'Plani T0 Free është falas përgjithmonë. Për planet e paguara, ofrojmë një provë falas 7-ditore.'
      }
    },
    plans: {
      'T0-Free': {
        name: 'Falas',
        description: 'Për listuesit e rastësishëm që duan të provojnë platformën',
        features: ['2 artikuj aktivë', 'Boost të disponueshëm', 'Profili bazë', 'Mbështetje me email'],
        period: 'muaj'
      },
      'T1-Starter': {
        name: 'Starter',
        description: 'I përsosur për ndarësit e vogël të garderobës',
        features: ['10 artikuj aktivë', 'Të gjitha veçoritë bazë', 'Mbështetje me email', 'Personalizim profili'],
        period: 'muaj'
      },
      'T2-Growth': {
        name: 'Growth',
        description: 'Ideal për listuesit aktivë',
        features: ['30 artikuj aktivë', '5% zbritje boost', 'Mbështetje prioritare', 'Analitikë të avancuara', 'Promovim profili'],
        period: 'muaj'
      },
      'T3-Pro': {
        name: 'Pro',
        description: 'Për gjysmë-profesionistët',
        features: ['100 artikuj aktivë', '10% zbritje boost', 'Renditje prioritare', 'Mbështetje 24/7', 'Analitikë të avancuara', 'Listime të veçuara'],
        period: 'muaj'
      },
      'C1-BasicShop': {
        name: 'Basic Shop',
        description: 'I përsosur për butiket e vogla',
        features: ['50 artikuj aktivë', '2 llogari ekipi', 'Dashboard biznesi', 'Mbështetje prioritare', 'Profili marke'],
        period: 'muaj'
      },
      'C2-GrowingShop': {
        name: 'Growing Shop',
        description: 'Për biznese në rritje',
        features: ['200 artikuj aktivë', '5 llogari ekipi', '5% zbritje boost', 'Analitikë të avancuara', 'Mbështetje 24/7', 'Qasje API'],
        period: 'muaj'
      },
      'C3-Enterprise': {
        name: 'Enterprise',
        description: 'Për markat e mëdha të qirasë',
        features: ['Artikuj aktivë të pakufizuara', '10 llogari ekipi', '10% zbritje boost', 'Menaxher llogarie i dedikuar', 'Integrime të personalizuara', 'Opsione white-label', 'Prioritet për gjithçka'],
        period: 'muaj'
      }
    },
    boosts: {
      'MiniBoost': {
        boostType: 'Mini Boost',
        duration: '24h',
        visibilityEffect: '+100% dukshmëri',
        notes: 'Blerje mikro e nivelit të hyrjes'
      },
      'SuperBoost': {
        boostType: 'Super Boost',
        duration: '72h',
        visibilityEffect: '+200% dukshmëri',
        notes: 'Promovim më i fortë'
      },
      'WeeklyBoostPack': {
        boostType: 'Weekly Boost Pack',
        duration: '7 ditë',
        visibilityEffect: '+150% dukshmëri',
        notes: 'Më i mirë për artikuj me kërkesë të lartë'
      },
      'FeaturedSpotBoost': {
        boostType: 'Featured Spot Boost',
        duration: '24h',
        visibilityEffect: 'I veçuar në "Trending Near You"',
        notes: 'Surfacing i garantuar'
      },
      'MonthlyPriorityBoost': {
        boostType: 'Monthly Priority Boost (Recurring)',
        duration: '30 ditë',
        visibilityEffect: 'Gjithmonë +50% dukshmëri',
        notes: 'Upsell i shkëlqyer për shitësit seriozë'
      }
    },
    freeRules: {
      'Individual': {
        userType: 'Individual',
        freeUploadRules: '2 artikuj/muaj (e përhershme)',
        timeLimit: 'E pakufizuar'
      },
      'IndividualPromo': {
        userType: 'Individual Promo',
        freeUploadRules: 'Artikuj të pakufizuara',
        timeLimit: '3 muajt e parë të lansimit të Huazo'
      },
      'CompanyPromo': {
        userType: 'Company Promo',
        freeUploadRules: 'Artikuj të pakufizuara',
        timeLimit: '3 muajt e parë të lansimit të Huazo'
      },
      'CompanyNormal': {
        userType: 'Company (Normal)',
        freeUploadRules: 'Asnjë nivel falas',
        timeLimit: 'Pas 3 muajve'
      }
    },
    chat: {
      title: 'Bisedo me ne',
      subtitle: 'Zakonisht përgjigjemi brenda disa minutave',
      welcomeMessage: 'Përshëndetje! Si mund t\'ju ndihmojmë sot?',
      instruction: 'Shkruani mesazhin tuaj më poshtë dhe klikoni "Dërgo". Mesazhi do të hapë WhatsApp me mesazhin tuaj të plotësuar - thjesht klikoni "Dërgo" në WhatsApp për ta dërguar.',
      placeholder: 'Shkruani mesazhin tuaj...',
      send: 'Hap WhatsApp',
      openChat: 'Hap chat'
    }
  },
  en: {
    header: {
      home: 'Home',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      downloadApp: 'Download App'
    },
    pricing: {
      title: 'Huazo Subscription Plans',
      subtitle: 'Choose the plan that best fits your needs. Change or cancel anytime you want.',
      individualPlans: 'Individual Plans',
      companyPlans: 'Company Plans',
      mostPopular: 'Most Popular',
      startFree: 'Start Free',
      chooseStarter: 'Choose Starter',
      chooseGrowth: 'Choose Growth',
      choosePro: 'Choose Pro',
      contactSales: 'Contact Sales',
      visibilityBoosts: 'Huazo Visibility Boosts (Updated Recommended Pricing)',
      freePeriodRules: 'Free Period Rules (for clarity)',
      boostType: 'Boost Type',
      updatedPrice: 'Updated Price (€)',
      duration: 'Duration',
      visibilityEffect: 'Visibility Effect',
      notes: 'Notes',
      userType: 'User Type',
      freeUploadRules: 'Free Upload Rules',
      timeLimit: 'Time Limit',
      faqTitle: 'Frequently Asked Questions',
      faq: {
        question1: 'Can I change my plan at any time?',
        answer1: 'Yes, you can upgrade or downgrade your plan at any moment. Changes will be applied in the next billing cycle.',
        question2: 'Is there a contract period?',
        answer2: 'No, there is no long-term contract. You can cancel your subscription at any time without additional fees.',
        question3: 'How does payment work?',
        answer3: 'Payment is made automatically every month. We accept credit and debit cards, as well as PayPal.',
        question4: 'Is there a trial period?',
        answer4: 'The T0 Free plan is free forever. For paid plans, we offer a 7-day free trial.'
      }
    },
    plans: {
      'T0-Free': {
        name: 'Free',
        description: 'For casual listers who want to try the platform',
        features: ['2 active items', 'Boosts available', 'Basic profile', 'Email support'],
        period: 'monthly'
      },
      'T1-Starter': {
        name: 'Starter',
        description: 'Perfect for small wardrobe sharers',
        features: ['10 active items', 'All basic features', 'Email support', 'Profile customization'],
        period: 'monthly'
      },
      'T2-Growth': {
        name: 'Growth',
        description: 'Ideal for active listers',
        features: ['30 active items', '5% boost discount', 'Priority support', 'Advanced analytics', 'Profile promotion'],
        period: 'monthly'
      },
      'T3-Pro': {
        name: 'Pro',
        description: 'For semi-professionals',
        features: ['100 active items', '10% boost discount', 'Priority rank', '24/7 support', 'Advanced analytics', 'Featured listings'],
        period: 'monthly'
      },
      'C1-BasicShop': {
        name: 'Basic Shop',
        description: 'Perfect for small boutiques',
        features: ['50 active items', '2 team accounts', 'Business dashboard', 'Priority support', 'Brand profile'],
        period: 'monthly'
      },
      'C2-GrowingShop': {
        name: 'Growing Shop',
        description: 'For expanding businesses',
        features: ['200 active items', '5 team accounts', '5% boost discount', 'Advanced analytics', '24/7 support', 'API access'],
        period: 'monthly'
      },
      'C3-Enterprise': {
        name: 'Enterprise',
        description: 'For large rental brands',
        features: ['Unlimited active items', '10 team accounts', '10% boost discount', 'Dedicated account manager', 'Custom integrations', 'White-label options', 'Priority everything'],
        period: 'monthly'
      }
    },
    boosts: {
      'MiniBoost': {
        boostType: 'Mini Boost',
        duration: '24h',
        visibilityEffect: '+100% visibility',
        notes: 'Entry-level impulse micro-purchase'
      },
      'SuperBoost': {
        boostType: 'Super Boost',
        duration: '72h',
        visibilityEffect: '+200% visibility',
        notes: 'Stronger promotion'
      },
      'WeeklyBoostPack': {
        boostType: 'Weekly Boost Pack',
        duration: '7 days',
        visibilityEffect: '+150% visibility',
        notes: 'Best for highly demanded items'
      },
      'FeaturedSpotBoost': {
        boostType: 'Featured Spot Boost',
        duration: '24h',
        visibilityEffect: 'Featured in "Trending Near You"',
        notes: 'Guaranteed surfacing'
      },
      'MonthlyPriorityBoost': {
        boostType: 'Monthly Priority Boost (Recurring)',
        duration: '30 days',
        visibilityEffect: 'Always-on +50% visibility',
        notes: 'Great upsell for serious sellers'
      }
    },
    freeRules: {
      'Individual': {
        userType: 'Individual',
        freeUploadRules: '2 items/month (permanent)',
        timeLimit: 'Unlimited'
      },
      'IndividualPromo': {
        userType: 'Individual Promo',
        freeUploadRules: 'Unlimited items',
        timeLimit: 'First 3 months of Huazo launch'
      },
      'CompanyPromo': {
        userType: 'Company Promo',
        freeUploadRules: 'Unlimited items',
        timeLimit: 'First 3 months of Huazo launch'
      },
      'CompanyNormal': {
        userType: 'Company (Normal)',
        freeUploadRules: 'No free tier',
        timeLimit: 'After 3 months'
      }
    },
    chat: {
      title: 'Chat with us',
      subtitle: 'We typically reply within minutes',
      welcomeMessage: 'Hello! How can we help you today?',
      instruction: 'Type your message below and click "Open WhatsApp". Your message will open in WhatsApp pre-filled - just click "Send" in WhatsApp to send it.',
      placeholder: 'Type your message...',
      send: 'Open WhatsApp',
      openChat: 'Open chat'
    }
  }
};

