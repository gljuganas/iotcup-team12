import styles from './VoucherPopup.module.css';

function VoucherPopup({ title, storeName, points, logoUrl, onClose, onRedeem }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <div className={styles.popupContainer}>
                    <div className={styles.voucherCard}>
                        <div className={styles.giftCard}>
                            <p className={styles.storeName}>{storeName.toUpperCase()}</p>
                            <p className={styles.giftCert}>GIFT CERTIFICATE</p>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.points}>{points} POINTS</p>
                        </div>
                    </div>

                    <div className={styles.redeemInfo}>
                        <h2 className={styles.detailsTitle}>VOUCHER DETAILS</h2>
                        <p>Terms and Conditions:</p>
                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                        </ol>
                    </div>
                    <button className={styles.redeemButton} onClick={onRedeem}>REDEEM VIA EMAIL</button>
                </div>
            </div>
        </div>
    );
}

export default VoucherPopup;
