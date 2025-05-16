import styles from "./Voucher.module.css";

function Voucher({ title, storename, points, logoUrl, onRedeem }) {
  const imgUrl = `${process.env.PUBLIC_URL}/piggybank.png`;

  return (
    <div className={styles.ticket}>
      <div className={styles.logoContainer}>
        <img src={imgUrl} alt={`${storename} logo`} className={styles.logo} />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.store}>{storename}</p>
        <div className={styles.pointsAndButton}>
          <p className={styles.points}>{points} POINTS</p>
          <button
            className={styles.redeemButton}
            onClick={() => onRedeem({ title, storename, points, logoUrl })}
          >
            REDEEM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Voucher;
