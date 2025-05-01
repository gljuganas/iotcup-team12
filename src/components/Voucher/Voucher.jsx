import styles from './Voucher.module.css';

function Voucher({ title, storename, points, logoUrl }) {
    return (
        <div className={styles.ticket}>
            <div className={styles.logoContainer}>
                <img src={logoUrl} alt={`${storename} logo`} className={styles.logo} />
            </div>
            <div className={styles.details}>
                <p className={styles.title}>{title}</p>
                <p className={styles.store}>{storename}</p>
                <button className={styles.redeemButton}>REDEEM</button>
            </div>
        </div>
    );
}

export default Voucher;
