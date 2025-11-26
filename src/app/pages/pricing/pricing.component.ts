import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnInit, OnDestroy {
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;

  plans: any[] = [];
  visibilityBoosts: any[] = [];
  freePeriodRules: any[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.updateTranslations();
    
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.updateTranslations();
    });
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }

  updateTranslations() {
    this.translations = translations[this.currentLanguage];
    this.updatePlans();
    this.updateBoosts();
    this.updateFreeRules();
  }

  updatePlans() {
    this.plans = [
      {
        tier: 'T0',
        name: this.translations.plans['T0-Free'].name,
        userType: 'Individual',
        price: '0.00',
        period: this.translations.plans['T0-Free'].period,
        description: this.translations.plans['T0-Free'].description,
        features: this.translations.plans['T0-Free'].features,
        popular: false,
        buttonText: this.translations.pricing.startFree,
        buttonClass: 'btn-secondary'
      },
      {
        tier: 'T1',
        name: this.translations.plans['T1-Starter'].name,
        userType: 'Individual',
        price: '4.99',
        period: this.translations.plans['T1-Starter'].period,
        description: this.translations.plans['T1-Starter'].description,
        features: this.translations.plans['T1-Starter'].features,
        popular: false,
        buttonText: this.translations.pricing.chooseStarter,
        buttonClass: 'btn-secondary'
      },
      {
        tier: 'T2',
        name: this.translations.plans['T2-Growth'].name,
        userType: 'Individual',
        price: '11.99',
        period: this.translations.plans['T2-Growth'].period,
        description: this.translations.plans['T2-Growth'].description,
        features: this.translations.plans['T2-Growth'].features,
        popular: true,
        buttonText: this.translations.pricing.chooseGrowth,
        buttonClass: 'btn-primary'
      },
      {
        tier: 'T3',
        name: this.translations.plans['T3-Pro'].name,
        userType: 'Individual',
        price: '19.99',
        period: this.translations.plans['T3-Pro'].period,
        description: this.translations.plans['T3-Pro'].description,
        features: this.translations.plans['T3-Pro'].features,
        popular: false,
        buttonText: this.translations.pricing.choosePro,
        buttonClass: 'btn-secondary'
      },
      {
        tier: 'C1',
        name: this.translations.plans['C1-BasicShop'].name,
        userType: 'Company',
        price: '29.99',
        period: this.translations.plans['C1-BasicShop'].period,
        description: this.translations.plans['C1-BasicShop'].description,
        features: this.translations.plans['C1-BasicShop'].features,
        popular: false,
        buttonText: this.translations.pricing.contactSales,
        buttonClass: 'btn-secondary'
      },
      {
        tier: 'C2',
        name: this.translations.plans['C2-GrowingShop'].name,
        userType: 'Company',
        price: '59.99',
        period: this.translations.plans['C2-GrowingShop'].period,
        description: this.translations.plans['C2-GrowingShop'].description,
        features: this.translations.plans['C2-GrowingShop'].features,
        popular: false,
        buttonText: this.translations.pricing.contactSales,
        buttonClass: 'btn-secondary'
      },
      {
        tier: 'C3',
        name: this.translations.plans['C3-Enterprise'].name,
        userType: 'Company',
        price: '99.99',
        period: this.translations.plans['C3-Enterprise'].period,
        description: this.translations.plans['C3-Enterprise'].description,
        features: this.translations.plans['C3-Enterprise'].features,
        popular: false,
        buttonText: this.translations.pricing.contactSales,
        buttonClass: 'btn-secondary'
      }
    ];
  }

  updateBoosts() {
    this.visibilityBoosts = [
      {
        boostType: this.translations.boosts['MiniBoost'].boostType,
        price: 0.79,
        duration: this.translations.boosts['MiniBoost'].duration,
        visibilityEffect: this.translations.boosts['MiniBoost'].visibilityEffect,
        notes: this.translations.boosts['MiniBoost'].notes
      },
      {
        boostType: this.translations.boosts['SuperBoost'].boostType,
        price: 1.49,
        duration: this.translations.boosts['SuperBoost'].duration,
        visibilityEffect: this.translations.boosts['SuperBoost'].visibilityEffect,
        notes: this.translations.boosts['SuperBoost'].notes
      },
      {
        boostType: this.translations.boosts['WeeklyBoostPack'].boostType,
        price: 4.49,
        duration: this.translations.boosts['WeeklyBoostPack'].duration,
        visibilityEffect: this.translations.boosts['WeeklyBoostPack'].visibilityEffect,
        notes: this.translations.boosts['WeeklyBoostPack'].notes
      },
      {
        boostType: this.translations.boosts['FeaturedSpotBoost'].boostType,
        price: 2.49,
        duration: this.translations.boosts['FeaturedSpotBoost'].duration,
        visibilityEffect: this.translations.boosts['FeaturedSpotBoost'].visibilityEffect,
        notes: this.translations.boosts['FeaturedSpotBoost'].notes
      },
      {
        boostType: this.translations.boosts['MonthlyPriorityBoost'].boostType,
        price: 7.99,
        duration: this.translations.boosts['MonthlyPriorityBoost'].duration,
        visibilityEffect: this.translations.boosts['MonthlyPriorityBoost'].visibilityEffect,
        notes: this.translations.boosts['MonthlyPriorityBoost'].notes
      }
    ];
  }

  updateFreeRules() {
    this.freePeriodRules = [
      {
        userType: this.translations.freeRules['Individual'].userType,
        freeUploadRules: this.translations.freeRules['Individual'].freeUploadRules,
        timeLimit: this.translations.freeRules['Individual'].timeLimit
      },
      {
        userType: this.translations.freeRules['IndividualPromo'].userType,
        freeUploadRules: this.translations.freeRules['IndividualPromo'].freeUploadRules,
        timeLimit: this.translations.freeRules['IndividualPromo'].timeLimit
      },
      {
        userType: this.translations.freeRules['CompanyPromo'].userType,
        freeUploadRules: this.translations.freeRules['CompanyPromo'].freeUploadRules,
        timeLimit: this.translations.freeRules['CompanyPromo'].timeLimit
      },
      {
        userType: this.translations.freeRules['CompanyNormal'].userType,
        freeUploadRules: this.translations.freeRules['CompanyNormal'].freeUploadRules,
        timeLimit: this.translations.freeRules['CompanyNormal'].timeLimit
      }
    ];
  }

  getPlansByUserType(userType: string) {
    return this.plans.filter(plan => plan.userType === userType);
  }
}


