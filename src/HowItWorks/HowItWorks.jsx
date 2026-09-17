import styles from './HowItWorks.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function HowItWorks() {
    const { t } = useLanguage();

    const handleCTAClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Your 7-Day Free Trial',
                content_category: 'SaaS Signup Start',
                section: 'How It Works Section'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'How It Works Section',
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = "https://cbstudio.me";
        }, 150);
    };

    return (
        <section className={styles.howItWorksSection} id="how-it-works">
            <div className={styles.howItWorksContainer}>
                <div className={styles.howItWorksHeader}>
                    <h2 className={styles.sectionTitle}>
                        {t.howItWorks.title}
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {t.howItWorks.subtitle}
                    </p>
                </div>

                <div className={styles.stepsGrid}>
                    
                    {/* Step 1: Claim your link */}
                    <div className={`${styles.stepCard} ${styles.stepCardBlue}`}>
                        <div className={styles.stepBadgeRow}>
                            <span className={styles.stepNumPill}>01</span>
                            <div className={styles.stepIconCircle}>
                                <i className="ri-user-add-line"></i>
                            </div>
                        </div>
                        <h3 className={styles.stepTitle}>{t.howItWorks.step1Title}</h3>
                        <p className={styles.stepDesc}>{t.howItWorks.step1Desc}</p>
                    </div>

                    {/* Step 2: Add what you sell */}
                    <div className={`${styles.stepCard} ${styles.stepCardPurple}`}>
                        <div className={styles.stepBadgeRow}>
                            <span className={styles.stepNumPill}>02</span>
                            <div className={styles.stepIconCircle}>
                                <i className="ri-shopping-bag-3-line"></i>
                            </div>
                        </div>
                        <h3 className={styles.stepTitle}>{t.howItWorks.step2Title}</h3>
                        <p className={styles.stepDesc}>{t.howItWorks.step2Desc}</p>
                    </div>

                    {/* Step 3: Share & sell */}
                    <div className={`${styles.stepCard} ${styles.stepCardEmerald}`}>
                        <div className={styles.stepBadgeRow}>
                            <span className={styles.stepNumPill}>03</span>
                            <div className={styles.stepIconCircle}>
                                <i className="ri-share-forward-fill"></i>
                            </div>
                        </div>
                        <h3 className={styles.stepTitle}>{t.howItWorks.step3Title}</h3>
                        <p className={styles.stepDesc}>{t.howItWorks.step3Desc}</p>
                    </div>

                </div>

                <div className={styles.howItWorksCtaBox}>
                    <span className={styles.easyNoticeLabel}>{t.howItWorks.easyLabel}</span>
                    <a href="https://cbstudio.me" className={styles.howItWorksCtaBtn} onClick={handleCTAClick}>
                        {t.howItWorks.cta || t.hero.cta} <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
