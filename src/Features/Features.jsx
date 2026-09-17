import { useState } from 'react';
import styles from './Features.module.css';
import { useLanguage } from '../context/LanguageContext.jsx';

const SVG_ICONS = {
    linktree: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#43E660">
            <path d="M13.511 5.853l3.699-3.699A1.472 1.472 0 0 1 19.29 4.23l-3.699 3.699h5.232a1.472 1.472 0 0 1 0 2.944h-5.232l3.699 3.699a1.472 1.472 0 0 1-2.08 2.081L13.51 12.95v7.88a1.472 1.472 0 0 1-2.944 0v-7.88l-3.699 3.699a1.472 1.472 0 1 1-2.081-2.081l3.699-3.699H3.253a1.472 1.472 0 0 1 0-2.944h5.232L4.786 4.23a1.472 1.472 0 0 1 2.081-2.081l3.699 3.699V0h2.945v5.853z"/>
        </svg>
    ),
    canva: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#00C4CC">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.8 15.6c-2.4 0-4.2-1.8-4.2-4.2s1.8-4.2 4.2-4.2c1.2 0 2.2.5 3 1.3l-1.4 1.4c-.4-.4-1-.7-1.6-.7-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4c.6 0 1.2-.3 1.6-.7l1.4 1.4c-.8.8-1.8 1.3-3 1.3z"/>
        </svg>
    ),
    calendly: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#006BFF">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
        </svg>
    ),
    mailchimp: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#D97706">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
        </svg>
    ),
    teachable: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#FF5A5F">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4l7 3.82 7-3.82v-4L12 17l-7-3.82z"/>
        </svg>
    )
};

function ToolItem({ tool }) {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <div className={styles.toolItemRow}>
            <div className={styles.toolItemLeft}>
                <div className={styles.toolLogoWrapper}>
                    {!imgFailed && tool.logoUrl ? (
                        <img 
                            src={tool.logoUrl} 
                            alt={`${tool.name} Logo`} 
                            className={styles.toolLogoImg} 
                            onError={() => setImgFailed(true)}
                        />
                    ) : (
                        SVG_ICONS[tool.key]
                    )}
                </div>
                <span className={styles.toolName}>{tool.name}</span>
            </div>
            <span className={styles.toolCost}>{tool.cost}</span>
        </div>
    );
}

export default function Features() {
    const { t } = useLanguage();

    const receiptTools = [
        { key: 'linktree', name: 'Linktree Pro', cost: '$15/mo', logoUrl: 'https://cdn.simpleicons.org/linktree/43E660' },
        { key: 'canva', name: 'Canva Pro', cost: '$13/mo', logoUrl: 'https://cdn.simpleicons.org/canva/00C4CC' },
        { key: 'calendly', name: 'Calendly Pro', cost: '$16/mo', logoUrl: 'https://cdn.simpleicons.org/calendly/006BFF' },
        { key: 'mailchimp', name: 'Mailchimp', cost: '$20/mo', logoUrl: 'https://cdn.simpleicons.org/mailchimp/D97706' },
        { key: 'teachable', name: 'Teachable', cost: '$39/mo', logoUrl: 'https://cdn.simpleicons.org/teachable/FF5A5F' },
    ];

    return (
        <section className={styles.featuresSection} id="features">
            <div className={styles.featuresHeader}>
                <h2 className={styles.sectionTitle}>
                    {t.features.title}
                </h2>
                <p className={styles.sectionSubtitle}>
                    {t.features.subtitle}
                </p>
            </div>

            <div className={styles.unifiedCardWrapper}>
                <div className={styles.unifiedCard}>
                    
                    {/* Top Section: Itemized 5 Separate Monthly Tools */}
                    <div className={styles.receiptTopSection}>
                        <div className={styles.receiptHeaderRow}>
                            <h3 className={styles.receiptTitle}>{t.features.receiptTitle}</h3>
                        </div>

                        <div className={styles.toolsListGrid}>
                            {receiptTools.map((tool) => (
                                <ToolItem key={tool.key} tool={tool} />
                            ))}
                        </div>

                        <div className={styles.receiptTotalRow}>
                            <span className={styles.receiptTotalLabel}>{t.features.estTotal}</span>
                            <div className={styles.receiptTotalAmountGroup}>
                                <span className={styles.receiptTotalCrossed}>{t.features.estAmount}</span>
                            </div>
                        </div>
                    </div>

                    {/* Bridge VS Divider */}
                    <div className={styles.vsBridgeContainer}>
                        <div className={styles.vsCircle}>
                            <span>{t.features.vsText}</span>
                        </div>
                    </div>

                    {/* Bottom Section: Minimal Clean Creators Blueprint Card */}
                    <div className={styles.cbBottomSection}>
                        <div className={styles.cbMinimalRow}>
                            <div className={styles.cbLogoGroup}>
                                <span className={styles.cbFamilyTitle}>{t.features.cbFamily || 'Join Creators Blueprint Family 🤩'}</span>
                            </div>
                            <div className={styles.cbPriceBadge}>
                                <span className={styles.cbPriceAmount}>$27 / mo</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.stackCtaWrapper}>
                <a 
                    href="https://cbstudio.me" 
                    className={styles.stackCtaBtn}
                    onClick={() => {
                        if (window.fbq) {
                            window.fbq('track', 'InitiateCheckout', {
                                content_name: 'Start Your 7-Day Free Trial',
                                content_category: 'SaaS Signup Start',
                                section: 'Creator Stack CTA'
                            });
                        }
                        if (window.gtag) {
                            window.gtag('event', 'begin_checkout', {
                                event_category: 'SaaS Signup Start',
                                event_label: 'Creator Stack CTA',
                                value: 0
                            });
                        }
                    }}
                >
                    Start My Free Trial <i className="ri-arrow-right-line"></i>
                </a>
            </div>
        </section>
    );
}
