import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      creatorStories: 'Creator Stories',
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      logIn: 'Log In',
      startFreeTrial: 'Start Free Trial',
    },
    hero: {
      badge: '🇦🇪 Built for UAE & Global Creators',
      titlePart1: 'Your creator business, ',
      titleHighlight: 'all in one link',
      titleEmoji: ' 😉',
      title: 'Your creator business, all in one link 😉',
      subtitle: 'Manage your store, sell digital products & connect with your audience. Free forever, ready in 60 seconds.',
      subtitleMobile: 'Manage, sell & connect with your audience in one link.',
      formTitle: 'Claim your creator store',
      formSubtitle: 'Free forever · No credit card required',
      domainPrefix: 'cbstudio.me/',
      handlePlaceholder: 'yourname',
      cta: 'Claim Your Store for Free →',
      trustSubtext: '100% Free Plan available · Instant setup',
      signInPrompt: 'Already have an account?',
      signInLink: 'Sign in to your studio',
      availableBadge: 'Available! Reserve now',
      takenBadge: 'Already taken',
      checkingBadge: 'Checking...',
      totalRevenue: 'TOTAL REVENUE',
      thisMonth: '+34% this mo',
      successfulSales: '142 successful sales',
      valuePillars: [
        {
          id: 'store',
          title: 'Custom Creator Store',
          desc: 'Luxury themes, custom bio & high-converting links.',
          icon: 'ri-store-3-line',
          badge: '0% Platform Fee',
          num: '01',
          tags: ['Luxury Themes', 'Custom Bio', 'High-Converting Links']
        },
        {
          id: 'digital',
          title: 'Sell Digital Products',
          desc: 'Upload, host, and sell eBooks, cheat sheets & guides with instant Stripe payouts.',
          icon: 'ri-file-download-line',
          badge: 'Instant Payouts',
          num: '02',
          tags: ['eBooks & Guides', 'Cheat Sheets', '0% Stripe Payouts']
        },
        {
          id: 'brand',
          title: 'UAE Brand Hub',
          desc: 'Direct access to top brand partnerships, ambassador programs & affiliate deals.',
          icon: 'ri-vip-diamond-line',
          badge: 'Brand Deals',
          num: '03',
          tags: ['Brand Partnerships', 'Ambassador Perks', 'Affiliate Network']
        },
        {
          id: 'support',
          title: '24/7 Support & Guides',
          desc: 'Proven blueprints and dedicated creator guidance to scale.',
          icon: 'ri-customer-service-2-line',
          badge: 'Dedicated Help',
          num: '04',
          tags: ['Proven Blueprints', 'Dedicated Support', 'Scale Playbooks']
        }
      ]
    },
    spotlight: {
      title: 'Built by creators, for creators',
      subtitle: 'See live creator stores generating real revenue across the GCC.',
      followers: 'Followers',
    },
    features: {
      title: 'Your creator stack, simplified',
      subtitle: 'Replace 6+ separate monthly tools with 1 platform built for GCC creators.',
      receiptTag: 'SEPARATE SUBSCRIPTIONS BILL',
      receiptTitle: '5 Separate Monthly Tools',
      estTotal: "WHAT YOU'LL SPEND OTHERWISE",
      estAmount: '380 AED / month',
      annualNote: '(4,500+ AED per year in separate bills)',
      vsText: 'VS',
      savePill: 'Save 3,300+ AED/yr',
      cbTitle: 'Creators Blueprint',
      cbFamily: 'Join Creators Blueprint Family 🤩',
      cbSubtext: 'Everything your creator business needs in 1 place.',
      zeroFeeBadge: '0% Commission',
      allInOnePill: '1 Simple Account · 0 Disconnected Apps',
      tools: {
        linkInBio: 'Link in Bio Storefront',
        ebooks: 'Instant Ebook PDF Builder',
        stripe: 'Direct Stripe Payouts (0%)',
        delivery: 'Automated Email Delivery',
        affiliate: 'Live Affiliate System',
        bookings: 'Content & Booking Hub',
      },
      badges: {
        included: 'Included',
        zeroFee: '0% Fee',
        instant: 'Instant',
        liveAffiliate: 'Live 35%',
      }
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Launch your store and start selling in 3 simple steps.',
      step1Title: 'Claim your link',
      step1Desc: 'Pick your username.',
      step2Title: 'Add what you sell',
      step2Desc: 'Ebooks & guides.',
      step3Title: 'Share & sell',
      step3Desc: 'Put the link in your bio.',
      easyLabel: "Yeah, we know... it's that easy.",
      cta: 'Start Building for Free',
    },
    trustStrip: [
      { icon: 'ri-links-line', text: 'The #1 link in bio for creator businesses' },
      { icon: 'ri-shield-check-fill', text: 'Secure payments through Stripe (0% fee)' },
      { icon: 'ri-flashlight-fill', text: 'Launch in under 5 minutes' },
      { icon: 'ri-earth-line', text: 'Built for GCC & Global Creators' },
      { icon: 'ri-code-s-slash-line', text: 'No coding required' }
    ],
    reviews: {
      title: 'See what GCC creators are saying',
      subtitle: 'Real results from real creators building their business with Creators Blueprint.',
      viewReel: 'View Instagram Reel',
      showMore: 'Show more reviews',
      showLess: 'Show less',
      items: {
        hajira: '800+ playlist sales later, I couldn\'t love @creatorsblueprint more! It took me 5 minutes to set up my creator store. ✨',
        sena: 'I created an ebook all about my experiences in Dubai in literally 10 minutes! @creatorsblueprint is amazing. 💖',
        caroline: 'Hosting and selling my 2 ebooks about my surgeries and modeling has been a game changer! @creatorsblueprint makes it so easy. ✨',
        rena: 'I went from having no online presence to having my own creator store live in one afternoon. @creatorsblueprint made it so simple! ✨'
      }
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know about starting your trial.',
      items: [
        {
          q: 'What is Creators Blueprint?',
          a: 'Creators Blueprint is the creator operating system designed specifically for GCC creators. It gives you a single place to launch a custom creator store, create digital products, process payments, and manage your creator business.'
        },
        {
          q: 'How does the 7-day free trial work?',
          a: 'You get full access to all features for 7 days. You won’t be charged today. If you choose to stay, billing starts automatically after your trial.'
        },
        {
          q: 'Can I cancel anytime during the trial?',
          a: 'Yes. You can cancel with one click from your account dashboard anytime during or after your trial without being charged.'
        },
        {
          q: 'How do payments work?',
          a: 'We connect directly to Stripe. When customers buy your digital products or services, money goes straight to your bank account with 0% platform commission.'
        },
        {
          q: 'How are digital products delivered to buyers?',
          a: 'Once a customer completes checkout on your creator store, your PDF guide, ebook, or digital asset is emailed to them instantly and automatically.'
        },
        {
          q: 'Is Creators Blueprint only for GCC creators?',
          a: 'While our platform features regional Arab creator optimization and GCC currency handling, creators worldwide can use Creators Blueprint to launch their creator store.'
        }
      ]
    },
    footer: {
      tagline: 'The link in bio for your creator business in the GCC.',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      rights: 'All rights reserved.',
    }
  },
  ar: {
    nav: {
      creatorStories: 'قصص النجاح',
      features: 'المميزات',
      howItWorks: 'كيف تعمل المنصة',
      pricing: 'الأسعار',
      logIn: 'تسجيل الدخول',
      startFreeTrial: 'ابدأ التجربة المجانية',
    },
    hero: {
      badge: '🇦🇪 صُمم لمنشئي المحتوى في الإمارات والعالم',
      titlePart1: 'مشروعك الرقمي بالكامل، ',
      titleHighlight: 'في رابط واحد',
      titleEmoji: ' 😉',
      title: 'مشروعك الرقمي بالكامل، في رابط واحد 😉',
      subtitle: 'أدِر متجرك، بِع منتجاتك الرقمية وتواصل مع جمهورك. مجاناً للأبد وجاهز في 60 ثانية.',
      subtitleMobile: 'أدِر متجرك، بِع منتجاتك وتواصل مع جمهورك في رابط واحد.',
      formTitle: 'احجز متجرك الآن',
      formSubtitle: 'مجاني للأبد · لا يتطلب بطاقة ائتمان',
      domainPrefix: 'cbstudio.me/',
      handlePlaceholder: 'اسمك',
      cta: 'احجز متجرك وابدأ مجاناً ←',
      trustSubtext: 'خطة مجانية 100% متاحة · إعداد فوري',
      signInPrompt: 'لديك حساب بالفعل؟',
      signInLink: 'تسجيل الدخول للاستوديو',
      availableBadge: 'متاح! احجز الآن',
      takenBadge: 'محجوز بالفعل',
      checkingBadge: 'جاري التحقق...',
      totalRevenue: 'إجمالي الإيرادات',
      thisMonth: '+34% هذا الشهر',
      successfulSales: '142 عملية بيع ناجحة',
      valuePillars: [
        {
          id: 'store',
          title: 'متجر مخصص للمبدعين',
          desc: 'ثيمات راقية، بايو مخصص وروابط ذات معدل تحويل عالي.',
          icon: 'ri-store-3-line',
          badge: 'عمولة 0%',
          num: '01',
          tags: ['ثيمات فاخرة', 'بايو مخصص', 'روابط تحويلية']
        },
        {
          id: 'digital',
          title: 'بيع المنتجات الرقمية',
          desc: 'ارفع واستضف وبِع الكتب الإلكترونية والأدلة مع تحويلات فورية عبر سترايب.',
          icon: 'ri-file-download-line',
          badge: 'تحويلات فورية',
          num: '02',
          tags: ['كتب وأدلة رقمية', 'ملخصات', 'عوايد سترايب المباشرة']
        },
        {
          id: 'brand',
          title: 'مركز العلامات التجارية بالإمارات',
          desc: 'وصول مباشر لشراكات العلامات التجارية، برامج السفراء وعروض الأفلييت.',
          icon: 'ri-vip-diamond-line',
          badge: 'صفقات حصرية',
          num: '03',
          tags: ['شراكات الماركات', 'برامج السفراء', 'شبكة الأفلييت']
        },
        {
          id: 'support',
          title: 'دعم وأدلة على مدار الساعة',
          desc: 'خطط عمل مجربة وإرشاد مخصص لتوسيع نطاق أعمالك.',
          icon: 'ri-customer-service-2-line',
          badge: 'إرشاد مخصص',
          num: '04',
          tags: ['خطط عمل مجربة', 'دعم مستمر', 'أدلة التوسع']
        }
      ]
    },
    spotlight: {
      title: 'صُمم بواسطة منشئي محتوى، لمنشئي المحتوى',
      subtitle: 'شاهد متاجر حية لمنشئي محتوى يحققون مبيعات حقيقية في الخليج.',
      followers: 'متابع',
    },
    features: {
      title: 'منصة واحدة تجمع كل ما تحتاجه',
      subtitle: 'استبدل أكثر من 5 أدوات منفصلة بـ منصة واحدة مخصصة لمنشئي المحتوى.',
      receiptTag: 'فاتورة الاشتراكات الشهرية المنفصلة',
      receiptTitle: '5 أدوات منفصلة ومكلفة',
      estTotal: 'ما ستنفقه بدون المنصة',
      estAmount: '380 درهم / شهرياً',
      annualNote: '(أكثر من 4,500 درهم سنوياً في فواتير منفصلة)',
      vsText: 'مقابل',
      savePill: 'وفّر أكثر من 3,300 درهم سنوياً',
      cbTitle: 'كريتؤرز بلوبراينت',
      cbFamily: 'انضم لـ عائلة كريتؤرز بلوبراينت 🤩',
      cbSubtext: 'كل ما يحتاجه مشروعك في مكان واحد.',
      zeroFeeBadge: 'عمولة 0%',
      allInOnePill: 'حساب واحد بسيط · بدون أدوات متشتتة',
      tools: {
        linkInBio: 'متجر الروابط الخاص بك',
        ebooks: 'صانع الكتب والملفات الرقمية',
        stripe: 'عوايد مباشرة عبر سترايب (0%)',
        delivery: 'تسليم تلقائي عبر الإيميل',
        affiliate: 'نظام التسويق بالعمولة',
        bookings: 'منصة المواعيد والحجوزات',
      },
      badges: {
        included: 'مشمول',
        zeroFee: 'عمولة 0%',
        instant: 'فوري',
        liveAffiliate: 'عمولة 35%',
      }
    },
    howItWorks: {
      title: 'كيف تعمل المنصة',
      subtitle: 'أطلق متجرك وابدأ البيع في 3 خطوات بسيطة.',
      step1Title: 'احجز رابطك',
      step1Desc: 'اختر اسم المستخدم الخاص بك.',
      step2Title: 'أضف منتجاتك',
      step2Desc: 'الكتب الرقمية والدلائل.',
      step3Title: 'انشر وابدأ البيع',
      step3Desc: 'ضع الرابط في البايو الخاص بك.',
      easyLabel: 'نعم... الأمر بهذه البساطة.',
      cta: 'ابدأ البناء مجاناً',
    },
    trustStrip: [
      { icon: 'ri-links-line', text: 'المنصة الأولى للروابط والمتاجر الرقمية' },
      { icon: 'ri-shield-check-fill', text: 'مدفوعات آمنة عبر سترايب (بعمولة 0%)' },
      { icon: 'ri-flashlight-fill', text: 'انطلق وأطلق متجرك في أقل من 5 دقائق' },
      { icon: 'ri-earth-line', text: 'صُمم لمنشئي المحتوى في الخليج والعالم' },
      { icon: 'ri-code-s-slash-line', text: 'بدون الحاجة لخبرة برمجة' }
    ],
    reviews: {
      title: 'ماذا يقول منشئو المحتوى عن المنصة',
      subtitle: 'نتائج حقيقية لمنشئي محتوى يطورون أعمالهم مع كريتؤرز بلوبراينت.',
      viewReel: 'مشاهدة فيديو إنستغرام',
      showMore: 'عرض المزيد من التقييمات',
      showLess: 'عرض أقل',
      items: {
        hajira: 'بعد أكثر من 800 مبيعة لقوائم التشغيل، أنشأت متجري في 5 دقائق فقط عبر @creatorsblueprint! ✨',
        sena: 'أنشأت كتابي الرقمي حول تجاربي في دبي في 10 دقائق فقط! المنصة رائعة حقاً. 💖',
        caroline: 'نشر وبيع كتابيّ الرقميين حول العمليات عروض الأزياء كان تحولاً جذرياً! المنصة تسهل كل شيء. ✨',
        rena: 'انتقلت من عدم وجود متجر إلى إطلاق متجري بالكامل في ظهيرة يوم واحد! تجربة سهلة جداً. ✨'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج معرفته لبدء تجربتك المجانية.',
      items: [
        {
          q: 'ما هي منصة كريتؤرز بلوبراينت؟',
          a: 'كريتؤرز بلوبراينت هي منصة تشغيل منشئي المحتوى المصممة خصيصاً في الخليج. تمنحك مكاناً واحداً لإطلاق متجرك الرقمي، إنشاء الكتب والملفات، معالجة المدفوعات، وإدارة عملك بالكامل.'
        },
        {
          q: 'كيف تعمل التجربة المجانية لمدة 7 أيام؟',
          a: 'تحصل على وصول كامل لجميع المميزات لمدة 7 أيام مجاناً. لن يتم خصم أي مبلغ اليوم. إذا اخترت الاستمرار، يبدأ الاشتراك تلقائياً بعد انتهاء التجربة.'
        },
        {
          q: 'هل يمكنني الإلغاء في أي وقت أثناء التجربة؟',
          a: 'نعم. يمكنك الإلغاء بنقرة واحدة من لوحة تحكم حسابك في أي وقت خلال التجربة المجانية دون أي رسوم.'
        },
        {
          q: 'كيف تعمل المدفوعات واستلام الأموال؟',
          a: 'نربط متجرك مباشرة بـ سترايب (Stripe). عندما يشتري العملاء منتجاتك الرقمية أو خدماتك، تذهب الأموال مباشرة إلى حسابك البنكي بعمولة 0%.'
        },
        {
          q: 'كيف يتم تسليم المنتجات الرقمية للمشترين؟',
          a: 'بمجرد إتمام الدفع في متجرك، يتم إرسال ملف الـ PDF أو الكتاب الرقمي إلى البريد الإلكتروني للمشتري فوراً وتلقائياً.'
        },
        {
          q: 'هل المنصة حصرياً لمنشئي المحتوى في الخليج؟',
          a: 'بينما تتميز منصتنا بدعم عملات الخليج واللغات المحلية، يمكن لمنشئي المحتوى من جميع أنحاء العالم استخدام المنصة لإطلاق متاجرهم.'
        }
      ]
    },
    footer: {
      tagline: 'منصة الرابط في البايو لمشروعك الرقمي في الخليج.',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      support: 'الدعم',
      rights: 'جميع الحقوق محفوظة.',
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
