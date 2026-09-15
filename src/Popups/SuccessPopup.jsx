import React from 'react';
import styles from './Popups.module.css';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close popup">
          ✕
        </button>

        <span className={styles.successBadge}>Registration Confirmed</span>

        <h3 className={styles.title}>Hot &amp; Hustle</h3>

        <div className={styles.detailsBlock}>
          <div>Yofit Studio, Gate Avenue, DIFC</div>
          <div>Saturday, Sept 26 • 7:00 PM</div>
        </div>

        <p className={styles.description}>
          Spot reserved! Confirmation and entry pass sent.
        </p>

        <div className={styles.qrNoticeBlock}>
          <div className={styles.qrNoticeHeader}>
            <span>🎟️ Entry QR Code Emailed</span>
          </div>
          <p className={styles.qrNoticeText}>
            Scan your QR code at entry. Check <strong>spam folder</strong> if missing, or contact <a href="mailto:help@creatorsblueprint.io">help@creatorsblueprint.io</a>.
          </p>
        </div>

        <button className={styles.actionBtn} onClick={onClose}>
          Return Back
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
