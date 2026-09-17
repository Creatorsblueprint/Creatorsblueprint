import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

const POPULAR_CREATORS = ['hajira', 'caroline', 'yasmine', 'ayesha', 'rena', 'sena'];

export default function Hero() {
    const { t, lang } = useLanguage();
    const [activePlaceholder, setActivePlaceholder] = useState('hajira');
    const [activeSlide, setActiveSlide] = useState(0);

    const popularIdxRef = useRef(0);
    const charIdxRef = useRef(0);
    const isDeletingRef = useRef(false);
    const typingTimerRef = useRef(null);

    const touchStartXRef = useRef(0);
    const touchEndXRef = useRef(0);

    const pillars = t.hero.valuePillars || [];

    // Continuous typewriter effect cycling through popular creator names
    useEffect(() => {
        const runTypewriter = () => {
            const currentName = POPULAR_CREATORS[popularIdxRef.current];

            if (!isDeletingRef.current) {
                // Typing letters
                charIdxRef.current++;
                setActivePlaceholder(currentName.slice(0, charIdxRef.current));

                if (charIdxRef.current === currentName.length) {
                    // Pause before deleting
                    isDeletingRef.current = true;
                    typingTimerRef.current = setTimeout(runTypewriter, 2200);
                    return;
                }
                typingTimerRef.current = setTimeout(runTypewriter, 110);
            } else {
                // Deleting letters
                charIdxRef.current--;
                setActivePlaceholder(currentName.slice(0, charIdxRef.current));

                if (charIdxRef.current === 0) {
                    // Move to next name
                    isDeletingRef.current = false;
                    popularIdxRef.current = (popularIdxRef.current + 1) % POPULAR_CREATORS.length;
                    typingTimerRef.current = setTimeout(runTypewriter, 400);
                    return;
                }
                typingTimerRef.current = setTimeout(runTypewriter, 50);
            }
        };

        typingTimerRef.current = setTimeout(runTypewriter, 800);

        return () => {
            if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
        };
    }, []);

    // Mobile carousel auto-advance timer
    useEffect(() => {
        if (!pillars.length) return;
        const slideTimer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % pillars.length);
        }, 3600);

        return () => clearInterval(slideTimer);
    }, [pillars.length]);

    const handleTouchStart = (e) => {
        touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartXRef.current - touchEndXRef.current;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                // Swipe left -> Next slide
                setActiveSlide((prev) => (prev + 1) % pillars.length);
            } else {
                // Swipe right -> Prev slide
                setActiveSlide((prev) => (prev - 1 + pillars.length) % pillars.length);
            }
        }
    };

    const handleSubmitClaim = (e) => {
        if (e && e.preventDefault) e.preventDefault();

        const finalHandle = activePlaceholder || 'creator';

        if (window.fbq) {
            window.fbq('track', 'Lead', {
                content_name: 'Claim Creator Store',
                handle: finalHandle
            });
            window.fbq('track', 'InitiateCheckout', {
                content_name: 'Claim Creator Store',
                handle: finalHandle,
                section: 'Hero Reservation Form'
            });
        }
        if (window.gtag) {
            window.gtag('event', 'generate_lead', {
                event_category: 'Hero Handle Claim',
                event_label: finalHandle
            });
            window.gtag('event', 'begin_checkout', {
                event_category: 'SaaS Signup Start',
                event_label: 'Hero Reservation Form',
                value: 0
            });
        }

        setTimeout(() => {
            window.location.href = `https://cbstudio.me/signup?username=${encodeURIComponent(finalHandle)}`;
        }, 150);
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                
                {/* Main Hero Header & Split Grid */}
                <div className={styles.heroMainGrid}>
                    
                    {/* Left Column: Headline, Copy & Luxury Link Pill Action */}
                    <div className={styles.heroContentCol}>

                        {/* Main Headline */}
                        <h1 className={styles.heroTitle}>
                            {t.hero.titlePart1}
                            <span className={styles.brushHighlight}>
                                {t.hero.titleHighlight}
                                <svg className={styles.brushStroke} viewBox="0 0 260 22" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path d="M 4 15 C 65 3, 175 4, 256 14" stroke="var(--accent-blue)" strokeWidth="6" strokeLinecap="round" />
                                </svg>
                            </span>
                            {t.hero.titleEmoji || ' 😉'}
                        </h1>

                        {/* Subheadline */}
                        <p className={styles.heroSubText}>
                            <span className={styles.subtextDesktop}>{t.hero.subtitle}</span>
                            <span className={styles.subtextMobile}>{t.hero.subtitleMobile || 'Manage, sell & connect with your audience in one link.'}</span>
                        </p>

                        {/* ⚡ Luxury URL Link Capsule & CTA Action */}
                        <div className={styles.claimActionWrapper}>
                            
                            {/* Sleek URL Pill with Live Typewriter Auto-Fill */}
                            <div className={styles.urlCapsulePill} onClick={handleSubmitClaim} title="Click to claim your store">
                                <span className={styles.capsuleDomain}>{t.hero.domainPrefix || 'cbstudio.me/'}</span>
                                <span className={styles.capsuleHandle}>{activePlaceholder}</span>
                                <span className={styles.typewriterCursor}></span>
                            </div>

                            {/* Primary CTA Button: Claim My Creator Store & Start for Free */}
                            <button 
                                type="button" 
                                className={styles.claimSubmitBtn}
                                onClick={handleSubmitClaim}
                            >
                                <span>{t.hero.cta || 'Claim Your Store for Free →'}</span>
                                <i className={lang === 'ar' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'}></i>
                            </button>

                            {/* Trust Subtext & Sign-in Link */}
                            <div className={styles.formFooterRow}>
                                <div className={styles.trustSubtext}>
                                    <i className="ri-shield-check-fill"></i>
                                    <span>{t.hero.trustSubtext || '100% Free Plan available · Instant setup'}</span>
                                </div>
                                <span className={styles.footerDividerDot}>·</span>
                                <a 
                                    href="https://cbstudio.me/login" 
                                    className={styles.signInLink}
                                >
                                    <span className={styles.signInPrompt}>{t.hero.signInPrompt || 'Already have an account?'}</span>{' '}
                                    <span className={styles.signInAction}>{t.hero.signInLink || 'Sign in to your studio'}</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Clean Luxury Dual iPhone Mockups */}
                    <div className={styles.heroVisualCol}>
                        <div className={styles.stackedPhonesStage}>

                            {/* Hajira Total Revenue Floating Card */}
                            <div className={styles.heroRevenueCard}>
                                <div className={styles.revenueCardHeader}>
                                    <span className={styles.revenueLabel}>{t.hero.totalRevenue || 'TOTAL REVENUE'}</span>
                                    <span className={styles.revenueBadge}>{t.hero.thisMonth || '+34% this mo'}</span>
                                </div>
                                <div className={styles.revenueAmountRow}>
                                    <span className={styles.revenueAmount}>AED 5,480</span>
                                    <svg className={styles.sparklineSvg} viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 2 20 Q 15 18, 25 12 T 42 10 T 58 3" stroke="#0F1B3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className={styles.revenueCardFooter}>
                                    <i className="ri-arrow-up-line"></i>
                                    <span>{t.hero.successfulSales || '142 successful sales'}</span>
                                </div>
                            </div>

                            {/* Back iPhone: Clean Instagram Profile */}
                            <div className={`${styles.iphoneFrame} ${styles.backPhoneIG}`}>
                                <img 
                                    src="/Images/creators/hajira_ig.png" 
                                    alt="Creator Instagram Profile" 
                                    className={styles.iphoneScreenImg}
                                />
                            </div>

                            {/* Front iPhone: Clean Luxury Creators Blueprint Storefront */}
                            <div className={`${styles.iphoneFrame} ${styles.frontPhoneStorefront}`}>
                                <img 
                                    src="/Images/creators/hajira_storefront.png" 
                                    alt="Creator Storefront Preview" 
                                    className={styles.iphoneScreenImg}
                                />
                            </div>

                            {/* Ambient Glow */}
                            <div className={styles.visualAmbientGlow}></div>
                        </div>
                    </div>

                </div>

                {/* 💎 Value Proposition Section */}
                <div className={styles.editorialPillarsSection}>
                    
                    {/* Desktop 4-Column Open Grid */}
                    <div className={styles.desktopPillarsGrid}>
                        {pillars.map((pillar, idx) => (
                            <div key={pillar.id || idx} className={styles.editorialPillarItem}>
                                <div className={styles.pillarEyebrowRow}>
                                    <span className={`${styles.pillarAccentDot} ${styles[`dotColor${idx + 1}`]}`}></span>
                                    <span className={styles.pillarEyebrow}>{pillar.badge}</span>
                                </div>
                                <h3 className={styles.pillarHeadline}>{pillar.title}</h3>
                                <p className={styles.pillarSummary}>{pillar.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Centered Carousel */}
                    <div 
                        className={styles.mobilePillarsCarousel}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {pillars.length > 0 && (
                            <div className={styles.carouselSlideCard}>
                                <div className={styles.pillarEyebrowRowCentered}>
                                    <span className={`${styles.pillarAccentDot} ${styles[`dotColor${activeSlide + 1}`]}`}></span>
                                    <span className={styles.pillarEyebrow}>{pillars[activeSlide].badge}</span>
                                </div>
                                <h3 className={styles.pillarHeadlineCentered}>{pillars[activeSlide].title}</h3>
                                <p className={styles.pillarSummaryCentered}>{pillars[activeSlide].desc}</p>
                            </div>
                        )}

                        {/* Carousel Pagination Dots */}
                        <div className={styles.carouselDotsTrack}>
                            {pillars.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={`${styles.carouselDot} ${activeSlide === idx ? styles.carouselDotActive : ''}`}
                                    onClick={() => setActiveSlide(idx)}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
