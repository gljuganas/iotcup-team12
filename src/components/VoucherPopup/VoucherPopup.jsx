import styles from './VoucherPopup.module.css';

function VoucherPopup({ title, storeName, points, logoUrl, onClose }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <div className={styles.voucherCard}>
                    <img src={logoUrl} alt="Store logo" className={styles.logo} />
                    <div className={styles.info}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.store}>{storeName}</p>
                        <p className={styles.points}>{points} POINTS</p>
                    </div>
                </div>

                <h2>VOUCHER DETAILS</h2>
                <strong>{storeName.toUpperCase()}</strong>
                <p>Terms and Conditions:</p>
                <ul>
                    <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>3. Ut enim ad minim veniam, quis nostrud exercitation.</li>
                </ul>

                <button className={styles.redeemButton}>REDEEM VIA EMAIL</button>
            </div>
        </div>
    );
}

export default VoucherPopup;
