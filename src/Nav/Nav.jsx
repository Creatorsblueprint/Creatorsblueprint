import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '../context/LanguageContext.jsx';

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { lang, toggleLanguage, t } = useLanguage();

    const handleNavCTAClick = (type) => {
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Start Free Trial',
                content_category: 'SaaS Signup Start',
                section: `Navbar ${type}`
            });
        }
        if (window.gtag) {
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: `Navbar ${type}`,
                value: 0
            });
        }
        setTimeout(() => {
            window.location.href = 'https://cbstudio.me';
        }, 150);
    };

    const handleScrollTo = (id) => {
        setMobileMenuOpen(false);
        if (location.pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    };

    return (
        <motion.div 
            className={styles.navWrapper}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.navContainer}>
                <div className={styles.logo} onClick={() => navigate('/')}>
                    <img src="/Images/CB_Logos/logo_new_black.png" alt="Creators Blueprint" />
                </div>
                
                <div className={styles.links}>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('spotlight')}>{t.nav.creatorStories}</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('features')}>{t.nav.features}</span>
                    <span className={styles.linkItem} onClick={() => handleScrollTo('how-it-works')}>{t.nav.howItWorks}</span>
                </div>
                
                <div className={styles.navActionRight}>
                    <button className={styles.langToggleBtn} onClick={toggleLanguage} title="Switch Language">
                        <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
                        <span className={styles.langDivider}>|</span>
                        <span className={lang === 'ar' ? styles.langActive : ''}>العربية</span>
                    </button>

                    <a href="https://cbstudio.me/login" className={styles.loginLink}>{t.nav.logIn}</a>
                    <div 
                        onClick={() => handleNavCTAClick('Desktop')} 
                        className={styles.ctaButton}
                    >
                        {t.nav.startFreeTrial}
                    </div>
                </div>

                {/* Mobile-only: lang toggle always visible beside hamburger */}
                <div className={styles.mobileLangPill} onClick={toggleLanguage}>
                    <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
                    <span className={styles.langDivider}>|</span>
                    <span className={lang === 'ar' ? styles.langActive : ''}>AR</span>
                </div>

                <div 
                    className={styles.mobileMenuToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('spotlight')}>{t.nav.creatorStories}</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('features')}>{t.nav.features}</span>
                            <span className={styles.mobileLink} onClick={() => handleScrollTo('how-it-works')}>{t.nav.howItWorks}</span>
                            
                            <button className={styles.mobileLangToggleBtn} onClick={toggleLanguage}>
                                <span className={lang === 'en' ? styles.langActive : ''}>EN</span>
                                <span className={styles.langDivider}>|</span>
                                <span className={lang === 'ar' ? styles.langActive : ''}>العربية</span>
                            </button>

                            <a href="https://cbstudio.me/login" className={styles.mobileLoginLink}>{t.nav.logIn}</a>
                            <div 
                                className={styles.mobileCtaButton}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    handleNavCTAClick('Mobile');
                                }}
                            >
                                {t.nav.startFreeTrial}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default Nav;