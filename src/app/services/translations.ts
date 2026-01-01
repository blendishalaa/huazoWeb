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
    sentConfirmation: string;
    errorMessage: string;
    sending: string;
    sent: string;
    failed: string;
  };
  
  // Home Page
  home: {
    subtitle: string;
    title: string;
    description: string;
    downloadApp: string;
    addItem?: string;
    whyHuazo: string;
    whyHuazoSubtitle: string;
    benefits: {
      earnFromWardrobe: { title: string; text: string };
      saveMoney: { title: string; text: string };
      forEveryEvent: { title: string; text: string };
      sustainable: { title: string; text: string };
      endlessVariety: { title: string; text: string };
      fastAndEasy: { title: string; text: string };
    };
    howItWorks: string;
    howItWorksDescription: string;
    steps: {
      search: { title: string; description: string };
      discover: { title: string; description: string };
      contact: { title: string; description: string };
    };
  };
  
  // Add Item
  addItem?: {
    title: string;
    photos: string;
    uploadPhotos: string;
    photosHint: string;
    itemName: string;
    itemNamePlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    pricing: string;
    pricingPlaceholder: string;
    size: string;
    sizePlaceholder: string;
    brand: string;
    brandPlaceholder: string;
    optional: string;
    condition: string;
    selectCondition: string;
    conditionNew: string;
    conditionLikeNew: string;
    conditionGood: string;
    conditionFair: string;
    deposit: string;
    depositPlaceholder: string;
    cancel: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorRequired: string;
    errorNoPhotos: string;
    errorInvalidPricing: string;
    errorInvalidDeposit: string;
  };
  
  // About Page
  about: {
    heroTitle: string;
    heroSubtitle: string;
    mission: { title: string; description: string };
    vision: { title: string; description: string };
    story: { title: string; paragraphs: string[] };
    values: { title: string; values: Array<{ title: string; description: string }> };
    cta: { title: string; description: string; getStarted: string; learnMore: string };
  };
  
  // Contact Page
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    sendMessage: string;
    contactInfo: string;
    followUs: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      sendButton: string;
      sentButton: string;
    };
    info: {
      email: string;
      phone: string;
      address: string;
    };
  };

  // Privacy Policy
  privacy: {
    title: string;
    subtitle: string;
    updatedLabel: string;
    updatedDate: string;
    sections: Array<{
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }>;
    contact: {
      title: string;
      body: string;
      emailLabel: string;
      email: string;
    };
  };

  // Terms of Service
  terms: {
    title: string;
    subtitle: string;
    updatedLabel: string;
    updatedDate: string;
    sections: Array<{
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }>;
    contact: {
      title: string;
      body: string;
      emailLabel: string;
      email: string;
    };
  };
  
  // Footer
  footer: {
    slogan: string;
    company: string;
    resources: string;
    legal: string;
    contactLabel: string;
    contactEmail: string;
    allRightsReserved: string;
    links: {
      blog: string;
      careers: string;
      pricing: string;
      documentation: string;
      papers: string;
      pressConferences: string;
      termsOfService: string;
      privacyPolicy: string;
      cookiesPolicy: string;
      dataProcessing: string;
    };
  };
  
  // About Section Component
  aboutSection: {
    mainTitle: string;
    sectionTitle: string;
    features: Array<{ title: string; description: string }>;
  };
  
  // Auth
  auth?: {
    login: {
      title: string;
      subtitle: string;
      email: string;
      emailPlaceholder: string;
      password: string;
      passwordPlaceholder: string;
      submitButton: string;
      loggingIn: string;
      noAccount: string;
      signUp: string;
      errorRequired: string;
      webOnly: string;
    };
    signup: {
      title: string;
      subtitle: string;
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      password: string;
      passwordPlaceholder: string;
      dateOfBirth: string;
      gender: string;
      selectGender: string;
      male: string;
      female: string;
      other: string;
      preferNotToSay: string;
      phone: string;
      phonePlaceholder: string;
      optional: string;
      accountType: string;
      person: string;
      company: string;
      submitButton: string;
      creatingAccount: string;
      hasAccount: string;
      login: string;
      errorRequired: string;
      errorInvalidEmail: string;
      errorPasswordLength: string;
      verificationTitle: string;
      verificationSubtitle: string;
      verificationCode: string;
      verificationCodePlaceholder: string;
      verificationHint: string;
      verifyButton: string;
      verifying: string;
      didntReceiveCode: string;
      resendCode: string;
      backToForm: string;
      errorVerificationCode: string;
    };
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
      visibilityBoosts: 'Huazo Visibility Boosts',
      freePeriodRules: 'Rregullat e Periudhës Falas',
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
      instruction: 'Shkruani mesazhin tuaj më poshtë dhe ne do t\'ju përgjigjemi në WhatsApp.',
      placeholder: 'Shkruani mesazhin tuaj...',
      send: 'Dërgo',
      openChat: 'Hap chat',
      sentConfirmation: 'Mesazhi u dërgua! Do t\'ju përgjigjemi në WhatsApp shumë shpejt.',
      errorMessage: 'Na vjen keq, ka ndodhur një gabim. Ju lutemi provoni përsëri.',
      sending: 'Po dërgohet...',
      sent: 'U dërgua',
      failed: 'Dështoi'
    },
    home: {
      subtitle: 'Vish. Kthe. Përsërit.',
      title: 'HUAZO',
      description: 'E gjithë garderoba juaj në një aplikacion.',
      downloadApp: 'Shkarko aplikacionin',
      addItem: 'Shto Artikull',
      whyHuazo: 'Pse Huazo?',
      whyHuazoSubtitle: 'Transformo garderobën tënde në një burim të ardhurash dhe gjej stilin tënd pa shpenzuar shumë',
      benefits: {
        earnFromWardrobe: {
          title: 'Fito nga Garderoba',
          text: 'Rrobat që nuk i përdor më? Publikojë dhe fito para nga garderoba jote.'
        },
        saveMoney: {
          title: 'Kursim Parash',
          text: 'Mos shpenzo qindra për rroba që do t\'i vish vetëm një herë. Huazoje dhe kurse deri në 80%.'
        },
        forEveryEvent: {
          title: 'Për Çdo Event',
          text: 'Gjej diçka të përsosur. Për evente tuaja speciale'
        },
        sustainable: {
          title: 'Modë e Qëndrueshme',
          text: 'Zgjidhje e zgjuar për mjedisin. Rishpërdor rrobat dhe kontribuo për një planet më të pastër.'
        },
        endlessVariety: {
          title: 'Varietet i Pafund',
          text: 'Qasje në mijëra artikuj nga butiqet dhe përdoruesit. Gjej stilin tënd pa kufij.'
        },
        fastAndEasy: {
          title: 'I Shpejtë dhe i Lehtë',
          text: 'Rezervo dhe merr rrobat brenda pak orësh. Proces i thjeshtë dhe i sigurt.'
        }
      },
      howItWorks: 'Si Funksionon',
      howItWorksDescription: 'Huazo është platforma ideale për të huazuar dhe marrë me qira rroba. Shfletoni koleksionin, zgjidhni artikujt që ju pëlqejnë, dhe rezervoni për ditën që ju nevojitet.',
      steps: {
        search: {
          title: 'Kërko',
          description: 'Shkruaj madhësinë, ngjyrën ose qytetin.'
        },
        discover: {
          title: 'Zbulo',
          description: 'Gjej fustanin perfekt nga butiqet dhe përdoruesit.'
        },
        contact: {
          title: 'Kontakto & Huazo',
          description: 'Lidhu direkt për ta marrë me qira'
        }
      }
    },
    about: {
      heroTitle: 'Rreth Huazo',
      heroSubtitle: 'Revolucionizimi i modës përmes qirasë së qëndrueshme të rrobave',
      mission: {
        title: 'Misioni Ynë',
        description: 'Të revolucionizojmë mënyrën se si njerëzit mendojnë për modën duke e bërë qiranë e rrobave të arritshme, të qëndrueshme dhe të përballueshme për të gjithë. Ne besojmë se të gjithë meritojnë të duken të shkëlqyer pa koston mjedisore dhe financiare të modës së shpejtë.'
      },
      vision: {
        title: 'Vizioni Ynë',
        description: 'Të krijojmë një botë ku moda është rrethore, e qëndrueshme dhe e arritshme. Ne parashikojmë një të ardhme ku qira e rrobave është po aq e zakonshme sa blerja e tyre, duke reduktuar mbetjet dhe duke e bërë modën me cilësi të lartë të disponueshme për të gjithë.'
      },
      story: {
        title: 'Historia Jonë',
        paragraphs: [
          'Huazo u lind nga një vëzhgim i thjeshtë: garderobat tona janë plot me rroba që rrallë i veshim, ndërsa të tjerët luftojnë për të gjetur opsione modë të përballueshme. Ne pamë një mundësi për t\'i lidhur këto dy grupe dhe për të krijuar vlerë për të gjithë.',
          'E themeluar në 2024, Huazo filloi si një platformë e vogël që lidhte entuziastët e modës lokale. Sot, ne kemi rritur në një treg të gjithëpërfshirës që shërben mijëra përdorues që ndajnë vizionin tonë për modë të qëndrueshme.',
          'Ekipi ynë është i pasionuar për ta bërë modën më të qëndrueshme dhe të arritshme. Ne punojmë pa u lodhur për të përmirësuar platformën tonë, për të zgjeruar komunitetin tonë dhe për ta bërë qiranë e rrobave sa më të lehtë dhe të këndshme.'
        ]
      },
      values: {
        title: 'Vlerat Tona',
        values: [
          {
            title: 'Qëndrueshmëria',
            description: 'Ne jemi të përkushtuar për të reduktuar mbetjet e modës dhe për të promovuar një ekonomi rrethore. Çdo qira zgjat jetën e rrobave dhe redukton ndikimin mjedisor.'
          },
          {
            title: 'Aksesueshmëria',
            description: 'Moda duhet të jetë e arritshme për të gjithë. Ne ofrojmë opsione qiraje të përballueshme që lejojnë njerëzit të shprehin stilin e tyre pa u thyer banka.'
          },
          {
            title: 'Komuniteti',
            description: 'Ne ndërtojmë lidhje midis njerëzve që ndajnë një pasion për modën. Platforma jonë i bashkon qiramarrësit dhe pronarët në një komunitet mbështetës.'
          },
          {
            title: 'Cilësia',
            description: 'Ne sigurojmë që të gjitha artikujt në platformën tonë të plotësojnë standarde të larta cilësie. Kënaqësia dhe siguria juaj janë prioritetet tona kryesore.'
          }
        ]
      },
      cta: {
        title: 'Bashkohu me Komunitetin e Huazo',
        description: 'Qoftë se dëshiron të marrësh me qira rroba të mrekullueshme ose të fitosh nga garderoba jote, Huazo është këtu për ty.',
        getStarted: 'Fillo',
        learnMore: 'Mëso Më Shumë'
      }
    },
    contact: {
      heroTitle: 'Na Kontaktoni',
      heroSubtitle: 'Keni një pyetje ose dëshironi të mësoni më shumë? Do të donim të dëgjojmë nga ju.',
      sendMessage: 'Na Dërgoni një Mesazh',
      contactInfo: 'Informacioni i Kontaktit',
      followUs: 'Na Ndiqni',
      form: {
        name: 'Emri',
        email: 'Email',
        subject: 'Subjekti',
        message: 'Mesazhi',
        namePlaceholder: 'Emri juaj',
        emailPlaceholder: 'email.juaj@example.com',
        subjectPlaceholder: 'Për çfarë bëhet fjala?',
        messagePlaceholder: 'Na tregoni më shumë për pyetjen tuaj...',
        sendButton: 'Dërgo Mesazhin',
        sentButton: 'Mesazhi u Dërgua! ✓'
      },
      info: {
        email: 'Email',
        phone: 'Telefoni',
        address: 'Adresa'
      }
    },
    privacy: {
      title: 'Politika e Privatësisë',
      subtitle: 'Ne respektojmë privatësinë tuaj dhe shpjegojmë si i mbledhim dhe i përdorim të dhënat në Huazo.',
      updatedLabel: 'Përditësuar më',
      updatedDate: '30 Dhjetor 2025',
      sections: [
        {
          title: 'Të dhënat që mbledhim',
          paragraphs: [
            'Kur krijoni një llogari ose përdorni Huazo, ne mbledhim kategori të dhënash që na ndihmojnë të ofrojmë shërbimin.'
          ],
          bullets: [
            'Informacion bazik i llogarisë dhe profilit',
            'Përmbajtja dhe listimet që publikoni',
            'Komunikimet dhe kërkesat për mbështetje',
            'Të dhëna përdorimi dhe pajisjeje',
            'Ngjarje analitike dhe ndërveprime në platformë',
            'Vendndodhja që jepni (opsionale)'
          ]
        },
        {
          title: 'Si i përdorim të dhënat',
          paragraphs: [
            'I përdorim të dhënat për të ofruar, personalizuar dhe përmirësuar platformën Huazo.'
          ],
          bullets: [
            'Të krijojmë dhe menaxhojmë llogarinë tuaj',
            'Të përpunojmë rezervime dhe transaksione',
            'Të komunikojmë me ju për verifikime dhe njoftime',
            'Të personalizojmë përmbajtjen dhe rekomandimet',
            'Të ruajmë sigurinë dhe të parandalojmë abuzimet',
            'Të masim përdorimin dhe të përmirësojmë shërbimin'
          ]
        },
        {
          title: 'Pagesat dhe të dhënat financiare',
          paragraphs: [
            'Pagesat përpunohen nga Stripe. Ne nuk ruajmë numrat e kartave tuaja.'
          ],
          bullets: [
            'Stripe trajton të dhënat e pagesave në mënyrë të sigurt',
            'Ne marrim vetëm informacionin e nevojshëm për konfirmim dhe historik transaksionesh'
          ]
        },
        {
          title: 'Ndarja me palë të treta',
          paragraphs: [
            'Ne ndajmë të dhëna vetëm kur është e nevojshme për ofrimin e shërbimit.'
          ],
          bullets: [
            'Stripe për përpunimin e pagesave',
            'Resend për dërgimin e email-eve të verifikimit',
            'DigitalOcean Spaces për ruajtjen e imazheve',
            'Shërbime hostimi dhe analitike për funksionimin e platformës'
          ]
        },
        {
          title: 'Ruajtja dhe siguria',
          paragraphs: [
            'Ne i ruajmë të dhënat për aq kohë sa është e nevojshme për të ofruar shërbimin dhe për të respektuar detyrimet ligjore.',
            'Përdorim masa teknike dhe organizative për të mbrojtur të dhënat tuaja.'
          ]
        },
        {
          title: 'Të drejtat dhe zgjedhjet tuaja',
          paragraphs: [
            'Ju mund të përditësoni ose fshini të dhënat tuaja nga llogaria.'
          ],
          bullets: [
            'Përditësimi i profilit dhe preferencave',
            'Kërkesa për fshirjen e llogarisë',
            'Zgjedhje për njoftime dhe komunikime'
          ]
        }
      ],
      contact: {
        title: 'Na kontaktoni',
        body: 'Nëse keni pyetje rreth privatësisë, na kontaktoni në:',
        emailLabel: 'Email:',
        email: 'info@huazo.com'
      }
    },
    terms: {
      title: 'Kushtet e Shërbimit',
      subtitle: 'Këto kushte rregullojnë përdorimin e platformës Huazo.',
      updatedLabel: 'Përditësuar më',
      updatedDate: '30 Dhjetor 2025',
      sections: [
        {
          title: 'Përdorimi i Huazo',
          paragraphs: [
            'Duke përdorur Huazo, pranoni këto kushte. Ju duhet të jeni të paktën 18 vjeç ose të keni pëlqimin e prindit.'
          ]
        },
        {
          title: 'Llogaria dhe siguria',
          paragraphs: [
            'Ju jeni përgjegjës për ruajtjen e kredencialeve dhe për informacionin e saktë në llogarinë tuaj.'
          ],
          bullets: [
            'Mos ndani fjalëkalimin me të tjerët',
            'Njoftoni menjëherë për përdorim të paautorizuar'
          ]
        },
        {
          title: 'Listimet dhe përmbajtja e përdoruesit',
          paragraphs: [
            'Ju jeni përgjegjës për përmbajtjen që publikoni dhe duhet të keni të drejta mbi artikujt e listuar.'
          ],
          bullets: [
            'Fotot dhe përshkrimet duhet të jenë të sakta',
            'Nuk lejohet përmbajtje e paligjshme ose mashtruese'
          ]
        },
        {
          title: 'Rezervimet, pagesat dhe tarifat',
          paragraphs: [
            'Pagesat përpunohen nga Stripe. Tarifat dhe komisionet mund të ndryshojnë dhe do të shfaqen para përfundimit të pagesës.'
          ],
          bullets: [
            'Politikat e anulimit mund të ndryshojnë sipas listimit',
            'Depozitat dhe rimbursimet trajtohen sipas kushteve të qirasë'
          ]
        },
        {
          title: 'Veprimet e ndaluara',
          paragraphs: [
            'Ju nuk mund të përdorni platformën për qëllime të paligjshme ose për të dëmtuar të tjerët.'
          ],
          bullets: [
            'Mashtrimi, abuzimi ose ndërhyrja në shërbim',
            'Shkelja e të drejtave të autorit ose markës tregtare'
          ]
        },
        {
          title: 'Mbyllja e llogarisë',
          paragraphs: [
            'Ne mund të pezullojmë ose mbyllim llogarinë në rast shkeljeje të kushteve.'
          ]
        },
        {
          title: 'Përjashtim dhe kufizim përgjegjësie',
          paragraphs: [
            'Shërbimi ofrohet \"siç është\". Huazo nuk mban përgjegjësi për humbje indirekte ose dëme të veçanta, në masën e lejuar nga ligji.'
          ]
        }
      ],
      contact: {
        title: 'Na kontaktoni',
        body: 'Nëse keni pyetje rreth këtyre kushteve, na kontaktoni në:',
        emailLabel: 'Email:',
        email: 'info@huazo.com'
      }
    },
    footer: {
      slogan: 'Ne po rrisim biznesin tuaj me menaxher personal AI.',
      company: 'Kompania',
      resources: 'Burimet',
      legal: 'Ligjore',
      contactLabel: 'Kontakt:',
      contactEmail: 'info@huazo.com',
      allRightsReserved: 'Të gjitha të drejtat e rezervuara.',
      links: {
        blog: 'Blog',
        careers: 'Karriera',
        pricing: 'Çmimet',
        documentation: 'Dokumentacioni',
        papers: 'Letrat',
        pressConferences: 'Konferencat e Shtypit',
        termsOfService: 'Kushtet e Shërbimit',
        privacyPolicy: 'Politika e Privatësisë',
        cookiesPolicy: 'Politika e Cookies',
        dataProcessing: 'Përpunimi i të Dhënave'
      }
    },
    aboutSection: {
      mainTitle: 'Jepu Fustaneve Një Histori të Re!',
      sectionTitle: 'Rreth Nesh – Huazo',
      features: [
        {
          title: 'Shumëllojshmëri e Madhe',
          description: 'Zgjidh nga mijëra fustane për çdo rast'
        },
        {
          title: 'Dorëzim i Shpejtë',
          description: 'Marr fustanin tuaj në kohë rekord'
        },
        {
          title: 'Modë e Qëndrueshme',
          description: 'Kontribuoni në mjedisin më të mirë'
        },
        {
          title: 'Pagesë e Sigurt',
          description: 'Transaksione të sigurta dhe të lehta'
        },
        {
          title: 'Cilësi Premium',
          description: 'Vetëm fustane të zgjedhura me kujdes'
        },
        {
          title: 'Kthim i Lehtë',
          description: 'Proces i thjeshtë për kthimin e fustanit'
        }
      ]
    },
    auth: {
      login: {
        title: 'Hyr',
        subtitle: 'Mirë se vini përsëri! Ju lutemi hyni në llogarinë tuaj.',
        email: 'Email',
        emailPlaceholder: 'email.juaj@example.com',
        password: 'Fjalëkalimi',
        passwordPlaceholder: 'Shkruani fjalëkalimin tuaj',
        submitButton: 'Hyr',
        loggingIn: 'Po hyni...',
        noAccount: 'Nuk keni llogari?',
        signUp: 'Regjistrohu',
        errorRequired: 'Ju lutemi plotësoni të gjitha fushat',
        webOnly: 'Hyrja është e disponueshme vetëm në aplikacionin Huazo.'
      },
      signup: {
        title: 'Krijo Llogari',
        subtitle: 'Bashkohu me Huazo dhe fillo udhëtimin tënd të modës sot.',
        firstName: 'Emri',
        firstNamePlaceholder: 'Emri',
        lastName: 'Mbiemri',
        lastNamePlaceholder: 'Mbiemri',
        email: 'Email',
        emailPlaceholder: 'email.juaj@example.com',
        password: 'Fjalëkalimi',
        passwordPlaceholder: 'Të paktën 8 karaktere',
        dateOfBirth: 'Data e Lindjes',
        gender: 'Gjinia',
        selectGender: 'Zgjidhni Gjininë',
        male: 'Mashkull',
        female: 'Femër',
        other: 'Tjetër',
        preferNotToSay: 'Preferoj të mos them',
        phone: 'Telefoni',
        phonePlaceholder: '+383 49 123 456',
        optional: 'Opsionale',
        accountType: 'Lloji i Llogarisë',
        person: 'Person',
        company: 'Kompani',
        submitButton: 'Krijo Llogari',
        creatingAccount: 'Po krijohet llogaria...',
        hasAccount: 'Keni tashmë një llogari?',
        login: 'Hyr',
        errorRequired: 'Ju lutemi plotësoni të gjitha fushat e detyrueshme',
        errorInvalidEmail: 'Ju lutemi shkruani një adresë email të vlefshme',
        errorPasswordLength: 'Fjalëkalimi duhet të jetë të paktën 8 karaktere',
        verificationTitle: 'Verifikoni Email-in Tuaj',
        verificationSubtitle: 'Ne dërguam një kod verifikimi në',
        verificationCode: 'Kodi i Verifikimit',
        verificationCodePlaceholder: 'Shkruani kodin 6-shifror',
        verificationHint: 'Ju lutemi kontrolloni email-in tuaj për kodin 6-shifror',
        verifyButton: 'Verifiko',
        verifying: 'Po verifikohet...',
        didntReceiveCode: 'Nuk e morët kodin?',
        resendCode: 'Dërgo Përsëri Kodin',
        backToForm: '← Kthehu te Regjistrimi',
        errorVerificationCode: 'Ju lutemi shkruani një kod verifikimi të vlefshëm 6-shifror'
      }
    },
    addItem: {
      title: 'Shto Artikull të Ri',
      photos: 'Foto të Artikullit',
      uploadPhotos: 'Ngarko Foto',
      photosHint: 'Mund të ngarkoni foto të shumta',
      itemName: 'Emri i Artikullit',
      itemNamePlaceholder: 'Shkruani emrin e artikullit',
      description: 'Përshkrimi',
      descriptionPlaceholder: 'Përshkruani artikullin tuaj...',
      pricing: 'Çmimi',
      pricingPlaceholder: '0.00',
      size: 'Madhësia',
      sizePlaceholder: 'p.sh., S, M, L, XL',
      brand: 'Marka',
      brandPlaceholder: 'Shkruani emrin e markës',
      optional: 'Opsionale',
      condition: 'Gjendja',
      selectCondition: 'Zgjidhni Gjendjen',
      conditionNew: 'E Re',
      conditionLikeNew: 'Si E Re',
      conditionGood: 'E Mirë',
      conditionFair: 'E Kënaqshme',
      deposit: 'Depozita',
      depositPlaceholder: '0.00',
      cancel: 'Anulo',
      submitButton: 'Shto Artikull',
      submitting: 'Po shtohet artikulli...',
      successMessage: 'Artikulli u shtua me sukses!',
      errorRequired: 'Ju lutemi plotësoni të gjitha fushat e detyrueshme',
      errorNoPhotos: 'Ju lutemi shtoni të paktën një foto',
      errorInvalidPricing: 'Ju lutemi shkruani një çmim të vlefshëm',
      errorInvalidDeposit: 'Ju lutemi shkruani një shumë depozite të vlefshme'
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
      visibilityBoosts: 'Huazo Visibility Boosts',
      freePeriodRules: 'Free Period Rules',
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
      instruction: 'Type your message below and we\'ll reply to you on WhatsApp.',
      placeholder: 'Type your message...',
      send: 'Send',
      openChat: 'Open chat',
      sentConfirmation: 'Message sent! We\'ll reply to you on WhatsApp shortly.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again.',
      sending: 'Sending...',
      sent: 'Sent',
      failed: 'Failed'
    },
    home: {
      subtitle: 'Wear. Return. Repeat.',
      title: 'HUAZO',
      description: 'Your entire wardrobe in one app.',
      downloadApp: 'Download App',
      addItem: 'Add Item',
      whyHuazo: 'Why Huazo?',
      whyHuazoSubtitle: 'Transform your wardrobe into a source of income and find your style without spending too much',
      benefits: {
        earnFromWardrobe: {
          title: 'Earn from Wardrobe',
          text: 'Clothes you no longer use? Publish and earn money from your wardrobe.'
        },
        saveMoney: {
          title: 'Save Money',
          text: 'Don\'t spend hundreds on clothes you\'ll only wear once. Rent them and save up to 80%.'
        },
        forEveryEvent: {
          title: 'For Every Event',
          text: 'Find something perfect. For your special events'
        },
        sustainable: {
          title: 'Sustainable Fashion',
          text: 'Smart solution for the environment. Reuse clothes and contribute to a cleaner planet.'
        },
        endlessVariety: {
          title: 'Endless Variety',
          text: 'Access to thousands of items from boutiques and users. Find your style without limits.'
        },
        fastAndEasy: {
          title: 'Fast and Easy',
          text: 'Reserve and get clothes within hours. Simple and secure process.'
        }
      },
      howItWorks: 'How It Works',
      howItWorksDescription: 'Huazo is the ideal platform for renting and leasing clothes. Browse the collection, choose the items you like, and reserve for the day you need.',
      steps: {
        search: {
          title: 'Search',
          description: 'Enter size, color or city.'
        },
        discover: {
          title: 'Discover',
          description: 'Find the perfect dress from boutiques and users.'
        },
        contact: {
          title: 'Contact & Rent',
          description: 'Connect directly to rent'
        }
      }
    },
    about: {
      heroTitle: 'About Huazo',
      heroSubtitle: 'Revolutionizing fashion through sustainable clothing rental',
      mission: {
        title: 'Our Mission',
        description: 'To revolutionize the way people think about fashion by making clothing rental accessible, sustainable, and affordable for everyone. We believe that everyone deserves to look great without the environmental and financial cost of fast fashion.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To create a world where fashion is circular, sustainable, and accessible. We envision a future where renting clothes is as common as buying them, reducing waste and making high-quality fashion available to everyone.'
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          'Huazo was born from a simple observation: our closets are full of clothes we rarely wear, while others struggle to find affordable fashion options. We saw an opportunity to connect these two groups and create value for everyone.',
          'Founded in 2024, Huazo started as a small platform connecting local fashion enthusiasts. Today, we have grown into a comprehensive rental marketplace serving thousands of users who share our vision of sustainable fashion.',
          'Our team is passionate about making fashion more sustainable and accessible. We work tirelessly to improve our platform, expand our community, and make renting clothes as easy and enjoyable as possible.'
        ]
      },
      values: {
        title: 'Our Values',
        values: [
          {
            title: 'Sustainability',
            description: 'We are committed to reducing fashion waste and promoting a circular economy. Every rental extends the life of clothing and reduces environmental impact.'
          },
          {
            title: 'Accessibility',
            description: 'Fashion should be accessible to everyone. We provide affordable rental options that allow people to express their style without breaking the bank.'
          },
          {
            title: 'Community',
            description: 'We build connections between people who share a passion for fashion. Our platform brings together renters and owners in a supportive community.'
          },
          {
            title: 'Quality',
            description: 'We ensure all items on our platform meet high quality standards. Your satisfaction and safety are our top priorities.'
          }
        ]
      },
      cta: {
        title: 'Join the Huazo Community',
        description: 'Whether you want to rent amazing clothes or earn from your wardrobe, Huazo is here for you.',
        getStarted: 'Get Started',
        learnMore: 'Learn More'
      }
    },
    contact: {
      heroTitle: 'Get in Touch',
      heroSubtitle: 'Have a question or want to learn more? We\'d love to hear from you.',
      sendMessage: 'Send us a Message',
      contactInfo: 'Contact Information',
      followUs: 'Follow Us',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your.email@example.com',
        subjectPlaceholder: 'What\'s this about?',
        messagePlaceholder: 'Tell us more about your inquiry...',
        sendButton: 'Send Message',
        sentButton: 'Message Sent! ✓'
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      }
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'We respect your privacy and explain how we collect and use data to run Huazo.',
      updatedLabel: 'Last updated',
      updatedDate: 'December 30, 2025',
      sections: [
        {
          title: 'Information we collect',
          paragraphs: [
            'When you create an account or use Huazo, we collect categories of information needed to provide the service.'
          ],
          bullets: [
            'Basic account and profile information',
            'User-generated content and listings',
            'Communications and support requests',
            'Usage and device information',
            'Analytics events and interactions on the platform',
            'Location you provide (optional)'
          ]
        },
        {
          title: 'How we use information',
          paragraphs: [
            'We use data to deliver, personalize, and improve the Huazo experience.'
          ],
          bullets: [
            'Create and manage your account',
            'Process bookings and transactions',
            'Communicate with you for verification and updates',
            'Personalize discovery and recommendations',
            'Protect the platform against fraud and abuse',
            'Measure usage and improve the service'
          ]
        },
        {
          title: 'Payments and financial data',
          paragraphs: [
            'Payments are processed by Stripe. We do not store full card details.'
          ],
          bullets: [
            'Stripe securely handles payment information',
            'We receive only what is needed for confirmation and transaction history'
          ]
        },
        {
          title: 'Sharing and third parties',
          paragraphs: [
            'We share data only when needed to provide the service.'
          ],
          bullets: [
            'Stripe for payment processing',
            'Resend for verification and email delivery',
            'DigitalOcean Spaces for image storage',
            'Hosting and analytics services to keep the platform running'
          ]
        },
        {
          title: 'Retention and security',
          paragraphs: [
            'We keep data as long as needed to provide the service and meet legal obligations.',
            'We use technical and organizational measures to protect your data.'
          ]
        },
        {
          title: 'Your choices',
          paragraphs: [
            'You can update or delete your data from your account.'
          ],
          bullets: [
            'Update profile and preferences',
            'Request account deletion',
            'Choose your notification settings'
          ]
        }
      ],
      contact: {
        title: 'Contact us',
        body: 'If you have questions about privacy, contact us at:',
        emailLabel: 'Email:',
        email: 'info@huazo.com'
      }
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'These terms govern your use of the Huazo platform.',
      updatedLabel: 'Last updated',
      updatedDate: 'December 30, 2025',
      sections: [
        {
          title: 'Using Huazo',
          paragraphs: [
            'By using Huazo, you agree to these terms. You must be at least 18 or have parental consent.'
          ]
        },
        {
          title: 'Account and security',
          paragraphs: [
            'You are responsible for keeping your credentials secure and your account information accurate.'
          ],
          bullets: [
            'Do not share your password',
            'Notify us of any unauthorized access'
          ]
        },
        {
          title: 'Listings and user content',
          paragraphs: [
            'You are responsible for the content you publish and must have rights to the listed items.'
          ],
          bullets: [
            'Photos and descriptions must be accurate',
            'No illegal or misleading content'
          ]
        },
        {
          title: 'Bookings, payments, and fees',
          paragraphs: [
            'Payments are processed by Stripe. Fees and commissions may change and are shown before checkout.'
          ],
          bullets: [
            'Cancellation policies may vary by listing',
            'Deposits and refunds follow rental terms'
          ]
        },
        {
          title: 'Prohibited activities',
          paragraphs: [
            'You may not use the platform for unlawful purposes or to harm others.'
          ],
          bullets: [
            'Fraud, abuse, or interference with the service',
            'Infringing copyrights or trademarks'
          ]
        },
        {
          title: 'Termination',
          paragraphs: [
            'We may suspend or terminate accounts that violate these terms.'
          ]
        },
        {
          title: 'Disclaimers and limitation of liability',
          paragraphs: [
            'The service is provided \"as is\". Huazo is not liable for indirect or special damages to the extent permitted by law.'
          ]
        }
      ],
      contact: {
        title: 'Contact us',
        body: 'If you have questions about these terms, contact us at:',
        emailLabel: 'Email:',
        email: 'info@huazo.com'
      }
    },
    footer: {
      slogan: 'We growing up your business with personal AI manager.',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      contactLabel: 'Contact:',
      contactEmail: 'info@huazo.com',
      allRightsReserved: 'All rights reserved.',
      links: {
        blog: 'Blog',
        careers: 'Careers',
        pricing: 'Pricing',
        documentation: 'Documentation',
        papers: 'Papers',
        pressConferences: 'Press Conferences',
        termsOfService: 'Terms of Service',
        privacyPolicy: 'Privacy Policy',
        cookiesPolicy: 'Cookies Policy',
        dataProcessing: 'Data Processing'
      }
    },
    aboutSection: {
      mainTitle: 'Give Dresses a New Story!',
      sectionTitle: 'About Us – Huazo',
      features: [
        {
          title: 'Great Variety',
          description: 'Choose from thousands of dresses for every occasion'
        },
        {
          title: 'Fast Delivery',
          description: 'Get your dress in record time'
        },
        {
          title: 'Sustainable Fashion',
          description: 'Contribute to a better environment'
        },
        {
          title: 'Secure Payment',
          description: 'Safe and easy transactions'
        },
        {
          title: 'Premium Quality',
          description: 'Only carefully selected dresses'
        },
        {
          title: 'Easy Return',
          description: 'Simple process for returning the dress'
        }
      ]
    },
    auth: {
      login: {
        title: 'Login',
        subtitle: 'Welcome back! Please login to your account.',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        submitButton: 'Login',
        loggingIn: 'Logging in...',
        noAccount: "Don't have an account?",
        signUp: 'Sign Up',
        errorRequired: 'Please fill in all fields',
        webOnly: 'Login is available only in the Huazo mobile app.'
      },
      signup: {
        title: 'Create Account',
        subtitle: 'Join Huazo and start your fashion journey today.',
        firstName: 'First Name',
        firstNamePlaceholder: 'John',
        lastName: 'Last Name',
        lastNamePlaceholder: 'Doe',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        password: 'Password',
        passwordPlaceholder: 'At least 8 characters',
        dateOfBirth: 'Date of Birth',
        gender: 'Gender',
        selectGender: 'Select Gender',
        male: 'Male',
        female: 'Female',
        other: 'Other',
        preferNotToSay: 'Prefer not to say',
        phone: 'Phone',
        phonePlaceholder: '+383 49 123 456',
        optional: 'Optional',
        accountType: 'Account Type',
        person: 'Person',
        company: 'Company',
        submitButton: 'Create Account',
        creatingAccount: 'Creating Account...',
        hasAccount: 'Already have an account?',
        login: 'Login',
        errorRequired: 'Please fill in all required fields',
        errorInvalidEmail: 'Please enter a valid email address',
        errorPasswordLength: 'Password must be at least 8 characters',
        verificationTitle: 'Verify Your Email',
        verificationSubtitle: 'We sent a verification code to',
        verificationCode: 'Verification Code',
        verificationCodePlaceholder: 'Enter 6-digit code',
        verificationHint: 'Please check your email for the 6-digit code',
        verifyButton: 'Verify',
        verifying: 'Verifying...',
        didntReceiveCode: "Didn't receive the code?",
        resendCode: 'Resend Code',
        backToForm: '← Back to Sign Up',
        errorVerificationCode: 'Please enter a valid 6-digit verification code'
      }
    },
    addItem: {
      title: 'Add New Item',
      photos: 'Item Photos',
      uploadPhotos: 'Upload Photos',
      photosHint: 'You can upload multiple photos',
      itemName: 'Item Name',
      itemNamePlaceholder: 'Enter item name',
      description: 'Description',
      descriptionPlaceholder: 'Describe your item...',
      pricing: 'Pricing',
      pricingPlaceholder: '0.00',
      size: 'Size',
      sizePlaceholder: 'e.g., S, M, L, XL',
      brand: 'Brand',
      brandPlaceholder: 'Enter brand name',
      optional: 'Optional',
      condition: 'Condition',
      selectCondition: 'Select Condition',
      conditionNew: 'New',
      conditionLikeNew: 'Like New',
      conditionGood: 'Good',
      conditionFair: 'Fair',
      deposit: 'Deposit',
      depositPlaceholder: '0.00',
      cancel: 'Cancel',
      submitButton: 'Add Item',
      submitting: 'Adding Item...',
      successMessage: 'Item added successfully!',
      errorRequired: 'Please fill in all required fields',
      errorNoPhotos: 'Please add at least one photo',
      errorInvalidPricing: 'Please enter a valid price',
      errorInvalidDeposit: 'Please enter a valid deposit amount'
    }
  }
};
