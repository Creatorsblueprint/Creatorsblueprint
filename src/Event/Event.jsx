import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Event.module.css';
import SuccessPopup from '../Popups/SuccessPopup.jsx';
import CancelledPopup from '../Popups/CancelledPopup.jsx';

// TODO: MAKE scanner for admins lsitne to endpoint to  mark attendance 


const Event = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');

  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidInsta, setIsValidInsta] = useState(false);

  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [instaTouched, setInstaTouched] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Popups based on search parameters
  const showSuccessPopup = searchParams.get('issuccess') === 'true' || searchParams.get('success') === 'true';
  const showCancelledPopup = searchParams.get('iscancelled') === 'true' || searchParams.get('cancelled') === 'true';

  const handleClosePopup = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('issuccess');
    newParams.delete('success');
    newParams.delete('iscancelled');
    newParams.delete('cancelled');
    setSearchParams(newParams);
  };

  useEffect(() => {
    setIsValidFirstName(firstName.trim().length >= 2);
    setIsValidLastName(lastName.trim().length >= 1);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email.trim()));

    const cleanInsta = instagram.startsWith('@') ? instagram.slice(1) : instagram;
    const instaRegex = /^[a-zA-Z0-9._]{1,30}$/;
    setIsValidInsta(instaRegex.test(cleanInsta.trim()));
  }, [firstName, lastName, email, instagram]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirstNameTouched(true);
    setLastNameTouched(true);
    setEmailTouched(true);
    setInstaTouched(true);

    if (!isValidFirstName || !isValidLastName || !isValidEmail || !isValidInsta) {
      setMessage({ text: "Don't leave us hanging! 📝 Please fill out all required fields.", type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    const cleanInsta = instagram.startsWith('@') ? instagram.slice(1) : instagram;
    const baseUrl = window.location.origin;

    try {
      const backendUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:8080/api/event/register'
        : 'https://creatorsblueprintbackend-648711352735.me-west1.run.app/api/event/register';

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          instagram: cleanInsta.trim(),
          event: 'Hot & Hustle',
          amount: 89,
          currency: 'AED',
          successUrl: `${baseUrl}/event?issuccess=true`,
          cancelUrl: `${baseUrl}/event?iscancelled=true`
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        if (data.url || data.redirect_url) {
          setMessage({ text: "Securing your spot... teleporting to checkout! 🚀", type: 'success' });
          setTimeout(() => {
            window.location.href = data.url || data.redirect_url;
          }, 800);
        } else {
          setMessage({ text: data.message || "Boom, you're registered! See you at Yofit 🎉", type: 'success' });
          setSearchParams({ issuccess: 'true' });
        }
      } else {
        let errorMsg = data.message || data.error;

        switch (data.code) {
          case 'FULLY_BOOKED':
            errorMsg = data.message || "Holy matcha! 🍵 We're completely sold out!";
            break;
          case 'EMAIL_EXISTS':
            errorMsg = data.message || "Looks like you're already on the VIP list with this email! Check your inbox 💌";
            break;
          case 'INSTAGRAM_EXISTS':
            errorMsg = data.message || "This Instagram handle is already registered! Sneaking in twice? 😉";
            break;
          case 'DATA_NOT_FOUND':
            errorMsg = data.message || "Data vanished into thin air 💨 Please refresh and try once more.";
            break;
          default:
            errorMsg = errorMsg || "Registration hit a roadblock 🚧 Let's try that one more time.";
            break;
        }

        setMessage({ text: errorMsg, type: 'error' });
      }
    } catch (err) {
      console.error('Registration request failed:', err);
      setMessage({
        text: "Unable to connect to the checkout server. Please try again in a moment.",
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Minimal Split Layout */}
        <main className={styles.mainLayout}>
          {/* Left Side: Hook Heading -> Boutique Studio Photo -> Activities -> Logistics */}
          <div className={styles.leftCol}>
            <div className={styles.headlineGroup}>
              <div className={styles.eventEyebrow}>
                HOT &amp; HUSTLE
              </div>

              <h1 className={styles.hookHeading}>
                <span className={styles.hookLead}>you've done the brand deals.</span>
                <span className={styles.hookEmphasis}>
                  now let's <em className={styles.heatItalic}>turn up the heat.</em>
                </span>
              </h1>

              <div className={styles.mobileLogistics}>
                <span className={styles.logisticsPin}>📍</span>
                <span>Yofit Studio, Gate Avenue, DIFC</span>
                <span className={styles.logisticsDivider}>•</span>
                <span>Sat, Sept 26 @ 7 PM</span>
              </div>
            </div>

            {/* Generated High Definition Boutique Hot Yoga Studio Photo Card */}
            <div className={styles.imageCard}>
              <img
                src="/Images/yofit_hot_yoga.jpg"
                alt="Yofit Studio DIFC Hot Yoga"
                className={styles.creatorImg}
              />
              <div className={styles.imageOverlayBadge}>
                30 SPOTS MAX
              </div>
            </div>

            {/* Curated Activity List with Styled Visual Badges */}
            <ul className={styles.compactList}>
              <li className={styles.compactItem}>
                <div className={`${styles.itemIconBadge} ${styles.iconYoga}`} aria-hidden="true">
                  <span className={styles.itemEmoji}>🔥</span>
                </div>
                <span className={styles.itemText}>Hot yoga session to open the evening</span>
              </li>

              <li className={styles.compactItem}>
                <div className={`${styles.itemIconBadge} ${styles.iconIce}`} aria-hidden="true">
                  <span className={styles.itemEmoji}>🧊</span>
                </div>
                <span className={styles.itemText}>Ice bath, reset and recharge</span>
              </li>

              <li className={styles.compactItem}>
                <div className={`${styles.itemIconBadge} ${styles.iconMoney}`} aria-hidden="true">
                  <span className={styles.itemEmoji}>💰</span>
                </div>
                <span className={styles.itemText}>Money talk: monetizing your account</span>
              </li>

              <li className={styles.compactItem}>
                <div className={`${styles.itemIconBadge} ${styles.iconMatcha}`} aria-hidden="true">
                  <span className={styles.itemEmoji}>🍵</span>
                </div>
                <span className={styles.itemText}>Hella good matcha</span>
              </li>

              <li className={styles.compactItem}>
                <div className={`${styles.itemIconBadge} ${styles.iconGift}`} aria-hidden="true">
                  <span className={styles.itemEmoji}>🎁</span>
                </div>
                <span className={styles.itemText}>Goodies to take home</span>
              </li>
            </ul>

            <div className={styles.logisticsLine}>
              <span className={styles.logisticsPin}>📍</span>
              <span>Yofit Studio, Gate Avenue, DIFC</span>
              <span className={styles.logisticsDivider}>•</span>
              <span>Sat, Sept 26 @ 7 PM</span>
            </div>
          </div>

          {/* Right Side: Ticket Card with Partner Lockup & Host Bio */}
          <div className={styles.rightCol}>
            <div className={styles.formTopHeader}>
              <div className={styles.ticketEyebrowBadge}>OFFICIAL EVENT PASS</div>
              <div className={styles.logoRow}>
                <img
                  src="/Images/yofit_logo.png"
                  alt="Yofit Hot Studios"
                  className={styles.yofitLogoImg}
                />
                <span className={styles.partnerX}>×</span>
                <img
                  src="/Images/CB_Logos/logo_new_black.png"
                  alt="Creators Blueprint"
                  className={styles.cbLogoImg}
                />
              </div>
              <p className={styles.subTagline}>
                An evening of heat, movement, and money talk.
              </p>
            </div>

            <div className={styles.formHeader}>
              <div className={styles.priceGroup}>
                <span className={styles.priceNumber}>89</span>
                <span className={styles.priceCurrency}>AED</span>
              </div>
              <span className={styles.spotsBadge}>30 SPOTS MAX</span>
            </div>

            {/* Host Bio Card */}
            <div className={styles.ticketHostBio}>
              <img
                src="/Images/rashmi_pfp.png"
                alt="Rashmi"
                className={styles.ticketHostAvatar}
              />
              <div className={styles.ticketHostMeta}>
                <h4 className={styles.ticketHostRole}>Instructed by Rashmi</h4>
                <p className={styles.ticketHostSub}>
                  Founder of The Form Club, in partnership with Creators Blueprint and Yofit
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.formElement} noValidate>
              <div className={styles.nameRow}>
                <div className={styles.fieldGroup}>
                  <div
                    className={`${styles.inputContainer} ${firstNameTouched ? (isValidFirstName ? styles.validInput : styles.invalidInput) : ''
                      }`}
                  >
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onBlur={() => setFirstNameTouched(true)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <div
                    className={`${styles.inputContainer} ${lastNameTouched ? (isValidLastName ? styles.validInput : styles.invalidInput) : ''
                      }`}
                  >
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onBlur={() => setLastNameTouched(true)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <div
                  className={`${styles.inputContainer} ${emailTouched ? (isValidEmail ? styles.validInput : styles.invalidInput) : ''
                    }`}
                >
                  <div className={styles.iconWrapper} title="Email Address">
                    <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.emailNoticeHighlight}>
                  ⚠️ Double-check email spelling for your entry QR pass.
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <div
                  className={`${styles.inputContainer} ${instaTouched ? (isValidInsta ? styles.validInput : styles.invalidInput) : ''
                    }`}
                >
                  {/* Real Official Multi-Color Instagram Logo */}
                  <div className={styles.iconWrapper} title="Instagram Handle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <radialGradient id="igRealGrad" cx="30%" cy="107%" r="150%">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </radialGradient>
                      </defs>
                      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igRealGrad)" />
                      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.25-8.8a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <span className={styles.atPrefix}>@</span>
                  <input
                    type="text"
                    placeholder="Instagram Handle"
                    value={instagram.startsWith('@') ? instagram.slice(1) : instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    onBlur={() => setInstaTouched(true)}
                    className={`${styles.inputField} ${styles.inputWithPrefix}`}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={
                  loading ||
                  (!isValidFirstName && firstNameTouched) ||
                  (!isValidLastName && lastNameTouched) ||
                  (!isValidEmail && emailTouched) ||
                  (!isValidInsta && instaTouched)
                }
              >
                {loading ? 'Processing...' : 'Reserve Spot'}
              </button>

              {message.text && (
                <div className={`${styles.messageBox} ${styles[message.type]}`}>
                  {message.text}
                </div>
              )}
            </form>

            <div className={styles.stripeNotice}>
              🔒 Secure checkout via Stripe
            </div>
          </div>
        </main>
      </div>

      {/* Popups */}
      {showSuccessPopup && <SuccessPopup onClose={handleClosePopup} />}
      {showCancelledPopup && <CancelledPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Event;
