import styles from './CTA.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function CTA() {
    const { t } = useLanguage();

    const handleCTAClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Your 7-Day Free Trial',
                content_category: 'SaaS Signup Start',
                section: 'Final CTA Banner'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'Final CTA Banner',
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = "https://cbstudio.me";
        }, 150);
    };

    return (
        <section className={styles.finalCtaSection}>
            <div className={styles.finalCtaBox}>
                <h2 className={styles.finalCtaTitle}>
                    Ready to turn your link in bio into a <span>creator business?</span>
                </h2>
                <p className={styles.finalCtaSub}>
                    Launch your custom creator store, package your digital products, and start your 7-day free trial today.
                </p>

                <div className={styles.finalCtaBtnGroup}>
                    <a 
                        href="https://cbstudio.me" 
                        className={styles.primaryButtonLarge}
                        onClick={handleCTAClick}
                    >
                        {t.hero.cta} <i className="ri-arrow-right-line"></i>
                    </a>
                </div>

                <div className={styles.finalCtaAssurance}>
                    <i className="ri-shield-check-fill"></i>
                    <span>{t.hero.trialNote}</span>
                </div>
            </div>
        </section>
    );
}
