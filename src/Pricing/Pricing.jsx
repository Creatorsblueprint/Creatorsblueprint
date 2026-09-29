import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

const FREE_FEATURES_EN = [
    { text: 'Custom Mini Shop URL (cbstudio.me/@you)' },
    { text: 'Upload & Host Digital Products / Guides (Free Downloads)' },
    { text: 'Full Mini Shop Customization' },
    { text: 'Custom Color Themes & Typography Styles' },
    { text: 'Drag-and-Drop Layout Controls & Conversion FAQs' },
    { text: 'Unlimited Custom Links & All 9 Social Channels' },
    { text: 'Full Affiliate Hub (Access to UAE Brand Deals & Database)' },
    { text: 'Basic Social & Follower Growth Overview' },
];

const CREATOR_FEATURES_EN = [
    { text: 'Everything in Starter Plan, plus:', isHeading: true },
    { text: 'Sell Digital Products for Money (Keep 100% of Revenue)' },
    { text: 'Stripe Connect Integration (Instant Creator Payouts)' },
    { text: 'AI eBook & Cover Generator (Create in 60s)' },
    { text: 'Creator Launch Guides & 24/7 Priority Support' },
    { text: 'Mini Shop Analytics (Views, Clicks & Sell Rate)' },
    { text: 'Subscriber List Access & CSV Export' },
    { text: 'Automated Email Delivery' },
    { text: 'Email Marketing & Promotional Funnels' },
    { text: '1-on-1 Creator Bookings & Consultations' },
];

const FREE_FEATURES_AR = [
    { text: 'رابط متجر مصغر مخصص (cbstudio.me/@you)' },
    { text: 'رفع واستضافة المنتجات الرقمية والدلائل (تنزيلات مجانية)' },
    { text: 'تخصيص المتجر بالكامل وفق هويتك' },
    { text: 'سمات ألوان وأنماط خطوط مخصصة' },
    { text: 'تحكم بالسحب والإفلات وأسئلة شائعة لزيادة التحويل' },
    { text: 'روابط مخصصة غير محدودة وجميع قنوات التواصل الـ 9' },
    { text: 'مركز التسويق بالعمولة (صفقات العلامات التجارية في الإمارات)' },
    { text: 'نظرة عامة أساسية على نمو المتابعين والتفاعل' },
];

const CREATOR_FEATURES_AR = [
    { text: 'كل ما في خطة المبتدئين، بالإضافة إلى:', isHeading: true },
    { text: 'بيع المنتجات الرقمية (احتفظ بـ 100% من أرباحك)' },
    { text: 'ربط مباشر مع سترايب (عوايد فورية لمنشئ المحتوى)' },
    { text: 'صانع الكتب والأغلفة بالذكاء الاصطناعي (أطلق في 60 ثانية)' },
    { text: 'دلائل الإطلاق ودعم مباشر بأولوية 24/7' },
    { text: 'تحليلات المتجر (المشاهدات، النقرات ومعدل البيع)' },
    { text: 'الوصول لقائمة المشتركين وتصدير ملفات CSV' },
    { text: 'تسليم تلقائي للملفات عبر البريد الإلكتروني' },
    { text: 'تسويق عبر البريد الإلكتروني ومسارات ترويجية' },
    { text: 'حجوزات واستشارات 1-on-1 مع المبدع' },
];

export default function Pricing() {
    const { lang } = useLanguage();
    const isAr = lang === 'ar';
    const [activeTab, setActiveTab] = useState('monthly'); // 'free' | 'monthly' for mobile view

    const freeFeatures = isAr ? FREE_FEATURES_AR : FREE_FEATURES_EN;
    const creatorFeatures = isAr ? CREATOR_FEATURES_AR : CREATOR_FEATURES_EN;

    const handleSelectFree = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Free Starter Plan',
                plan: 'free',
                currency: 'AED',
                value: 0.00,
                section: 'Pricing Section'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'Free Starter Plan',
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = "https://cbstudio.me/signup";
        }, 150);
    };

    const handleSelectTrial = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Monthly Creator Plan (7 Days Free)',
                plan: 'monthly',
                currency: 'AED',
                value: 99.00,
                section: 'Pricing Section'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'Monthly Creator Plan',
                value: 99
            });
        }
        setTimeout(() => {
            window.location.href = "https://cbstudio.me";
        }, 150);
    };

    return (
        <section className={styles.pricingSection} id="pricing">
            {/* Header */}
            <div className={styles.pricingHeader}>
                <h2 className={styles.sectionTitle}>
                    {isAr ? (
                        <>كل ما تحتاجه لـ <span>بناء مشروعك الرقمي</span></>
                    ) : (
                        <>Everything you need to <span>build your creator empire</span></>
                    )}
                </h2>
                <p className={styles.sectionSubtitle}>
                    {isAr 
                        ? 'ابدأ مجاناً مع تخصيص كامل لمتجرك، أو ابدأ تجربتك المجانية لمدة 7 أيام لخطة المبدعين لتطلق استوديو الذكاء الاصطناعي بالكامل.'
                        : 'Get started for free with full storefront customization, or start your 7-day trial of the Creator Plan to unleash our full AI studio.'}
                </p>
            </div>

            {/* Mobile Plan Switcher Header */}
            <div className={styles.mobileCarouselHeader}>
                <button
                    type="button"
                    className={`${styles.mobileTabBtn} ${activeTab === 'free' ? styles.mobileTabActive : ''}`}
                    onClick={() => setActiveTab('free')}
                >
                    <i className="ri-gift-line" /> {isAr ? 'خطة المبتدئين (0 درهم)' : 'Starter Plan (0 AED)'}
                </button>
                <button
                    type="button"
                    className={`${styles.mobileTabBtn} ${activeTab === 'monthly' ? styles.mobileTabActive : ''}`}
                    onClick={() => setActiveTab('monthly')}
                >
                    <i className="ri-flashlight-line" /> {isAr ? 'خطة المبدعين (7 أيام مجاناً)' : 'Creator (7 Days Free)'}
                </button>
            </div>

            {/* Plans Container */}
            <div className={styles.cardsContainer}>
                {/* 1. Free Starter Plan Card */}
                <div className={`${styles.planCard} ${styles.freeCard} ${activeTab !== 'free' ? styles.mobileHiddenCard : ''}`}>
                    <div className={styles.freeBadge}>
                        {isAr ? 'مجاناً للأبد' : 'Free Forever'}
                    </div>

                    <div className={styles.planCardInner}>
                        <div className={styles.planPriceRow}>
                            <span className={styles.newPriceWrapper}>
                                <span className={styles.planPrice}>0</span>
                                <span className={styles.newCurrency}>AED</span>
                            </span>
                            <span className={styles.planPeriod}>{isAr ? '/ للأبد' : '/forever'}</span>
                        </div>
                        <h3 className={styles.planName}>{isAr ? 'خطة المبتدئين' : 'Starter Plan'}</h3>

                        {/* Free Notice Box */}
                        <div className={styles.freeHighlightBox}>
                            <span className={styles.freeHighlightMain}>{isAr ? '100% مجاناً للأبد' : '100% Free Forever'}</span>
                            <span className={styles.freeHighlightSub}>{isAr ? 'لا يتطلب بطاقة ائتمان للبدء' : 'No credit card required to get started'}</span>
                        </div>

                        <div className={styles.planDivider} />

                        <p className={styles.featureListTitle}>{isAr ? 'ما يتضمنه الاشتراك' : "What's included"}</p>

                        <ul className={styles.featureList}>
                            {freeFeatures.map((feat, i) => (
                                <li key={i} className={styles.featureItem}>
                                    <span className={styles.featureCheckFree}>
                                        <i className="ri-check-line" />
                                    </span>
                                    <span>{feat.text}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className={`${styles.ctaButton} ${styles.freeCta}`}
                            onClick={handleSelectFree}
                        >
                            {isAr ? 'ابدأ مجاناً' : 'Start for Free'} <i className="ri-arrow-right-line" />
                        </button>
                        <p className={styles.ctaSubtext}>
                            {isAr ? 'لا يتطلب بطاقة ائتمان · مجاني للأبد' : 'No credit card required · Free forever'}
                        </p>
                    </div>

                    <div className={styles.cardFooter}>
                        <span className={styles.secureItem}><i className="ri-store-2-line" /> {isAr ? 'متجر مخصص' : 'Custom Store'}</span>
                        <span className={styles.secureSeperator} />
                        <span className={styles.secureItem}><i className="ri-bank-card-line" /> Stripe</span>
                        <span className={styles.secureSeperator} />
                        <span className={styles.secureItem}><i className="ri-shield-check-line" /> {isAr ? '100% مجاني' : '100% Free'}</span>
                    </div>
                </div>

                {/* 2. Monthly Creator Plan Card */}
                <div className={`${styles.planCard} ${styles.monthlyCardProminent} ${activeTab !== 'monthly' ? styles.mobileHiddenCard : ''}`}>
                    {/* Badge */}
                    <div className={styles.trialBadge}>
                        {isAr ? 'تجربة مجانية لمدة 7 أيام' : '7 Days Free'}
                    </div>

                    <div className={styles.planCardInner}>
                        <div className={styles.planPriceRow}>
                            <span className={styles.originalPrice}>
                                140<span className={styles.originalUnit}> AED</span>
                            </span>
                            <span className={styles.newPriceWrapper}>
                                <span className={styles.planPrice}>99</span>
                                <span className={styles.newCurrency}>AED</span>
                            </span>
                            <span className={styles.planPeriod}>{isAr ? '/شهرياً' : '/mo'}</span>
                        </div>
                        <h3 className={styles.planName}>{isAr ? 'خطة المبدعين الشهرية' : 'Monthly Creator Plan'}</h3>

                        {/* Highlighted Pricing / Trial Notice */}
                        <div className={styles.trialHighlightBox}>
                            <span className={styles.trialHighlightMain}>
                                {isAr ? '0.00 درهم تدفعها اليوم' : '0.00 AED charged today'}
                            </span>
                            <span className={styles.trialHighlightSub}>
                                {isAr ? 'ثم 99.00 درهم/شهرياً بعد انتهاء فترة الـ 7 أيام التجريبية' : 'Then 99.00 AED/month after your 7-day trial'}
                            </span>
                        </div>

                        <div className={styles.planDivider} />

                        <p className={styles.featureListTitle}>{isAr ? 'ما يتضمنه الاشتراك' : "What's included"}</p>

                        <ul className={styles.featureList}>
                            {creatorFeatures.map((feat, i) => (
                                <li
                                    key={i}
                                    className={styles.featureItem}
                                    style={feat.isHeading ? { fontWeight: 800, color: 'var(--accent-blue)', marginTop: '0.2rem' } : undefined}
                                >
                                    <span className={styles.featureCheck}>
                                        <i className="ri-check-line" />
                                    </span>
                                    <span>{feat.text}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className={`${styles.ctaButton} ${styles.creatorCta}`}
                            onClick={handleSelectTrial}
                        >
                            {isAr ? 'ابدأ تجربتي المجانية لمدة 7 أيام' : 'Start My 7-Day Free Trial'} <i className="ri-arrow-right-line" />
                        </button>
                        <p className={styles.ctaSubtext}>
                            {isAr ? 'تتطلب بطاقة · يمكنك الإلغاء في أي وقت · بدون أي رسوم اليوم' : 'Card required · Cancel anytime · No charge today'}
                        </p>
                    </div>

                    <div className={styles.cardFooter}>
                        <span className={styles.secureItem}><i className="ri-shield-check-line" /> {isAr ? 'آمن ومحمي' : 'Secure'}</span>
                        <span className={styles.secureSeperator} />
                        <span className={styles.secureItem}><i className="ri-bank-card-line" /> Stripe</span>
                        <span className={styles.secureSeperator} />
                        <span className={styles.secureItem}><i className="ri-refresh-line" /> {isAr ? 'إلغاء بأي وقت' : 'Cancel Anytime'}</span>
                    </div>
                </div>
            </div>

            {/* Bottom Trust Note */}
            <p className={styles.trustNote}>
                {isAr ? (
                    <>
                        تبدأ التجربة المجانية لخطة المبدعين فوراً. سيتم احتساب 99.00 درهم/شهرياً بعد 7 أيام إلا إذا قمت بالإلغاء قبل انتهاء الفترة التجريبية. يمكنك مراجعة <a href="/legal/terms">شروط الخدمة</a> و <a href="/legal/privacy">سياسة الخصوصية</a>.
                    </>
                ) : (
                    <>
                        Creator Plan trial begins immediately. You will be charged 99.00 AED/month after 7 days unless you cancel before the trial ends. Review our <a href="/legal/terms">Terms of Service</a> and <a href="/legal/privacy">Privacy Policy</a>.
                    </>
                )}
            </p>
        </section>
    );
}
