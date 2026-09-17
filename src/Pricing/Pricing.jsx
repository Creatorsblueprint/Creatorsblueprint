import { useState } from 'react';
import styles from './Pricing.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Pricing() {
    const { t } = useLanguage();
    const [isAnnual, setIsAnnual] = useState(false);

    const handleCTAClick = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Your 7-Day Free Trial',
                content_category: 'SaaS Signup Start',
                section: 'Pricing Section'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'Pricing Section',
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = "https://cbstudio.me";
        }, 150);
    };

    return (
        <section className={styles.pricingSection} id="pricing">
            <div className={styles.pricingHeader}>
                <h2 className={styles.sectionTitle}>
                    Simple, transparent <span>pricing</span>
                </h2>
                <p className={styles.sectionSubtitle}>
                    Everything you need to launch your creator store and sell digital products.
                </p>

                <div className={styles.billingToggle}>
                    <button 
                        className={`${styles.toggleBtn} ${!isAnnual ? styles.billingActive : ''}`}
                        onClick={() => setIsAnnual(false)}
                    >
                        Monthly
                    </button>
                    <button 
                        className={`${styles.toggleBtn} ${isAnnual ? styles.billingActive : ''}`}
                        onClick={() => setIsAnnual(true)}
                    >
                        Annual <span className={styles.discountBadge}>Save 20%</span>
                    </button>
                </div>
            </div>

            <div className={styles.pricingCardWrapper}>
                <div className={styles.pricingCard}>
                    <div className={styles.pricingCardHeader}>
                        <h3 className={styles.planName}>Creator Pro</h3>
                        <p className={styles.planDesc}>Full access to build, sell, and grow your creator business.</p>
                        <div className={styles.priceRow}>
                            <span className={styles.priceAmount}>{isAnnual ? '$22' : '$27'}</span>
                            <span className={styles.pricePeriod}>/ month {isAnnual ? '(billed annually)' : ''}</span>
                        </div>
                    </div>

                    <ul className={styles.featuresList}>
                        <li className={styles.featureItem}><i className="ri-checkbox-circle-fill"></i> <span>Custom Creator Store</span></li>
                        <li className={styles.featureItem}><i className="ri-checkbox-circle-fill"></i> <span>Unlimited Digital Products & Ebooks</span></li>
                        <li className={styles.featureItem}><i className="ri-checkbox-circle-fill"></i> <span>Stripe Payouts (0% Commission)</span></li>
                        <li className={styles.featureItem}><i className="ri-checkbox-circle-fill"></i> <span>Automatic Email File Delivery</span></li>
                        <li className={styles.featureItem}><i className="ri-checkbox-circle-fill"></i> <span>Creator Store Views & Clicks</span></li>
                    </ul>

                    <a href="https://cbstudio.me" className={styles.ctaBtn} onClick={handleCTAClick}>
                        {t.hero.cta} <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
