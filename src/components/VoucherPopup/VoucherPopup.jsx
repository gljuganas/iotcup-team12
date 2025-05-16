import styles from "./VoucherPopup.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setBalance } from "../../store/userSlice";
import { useState } from "react";
import axios from "axios";

function VoucherPopup({ title, storeName, points, onClose }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const generateVoucherCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    // Generate 12 random characters
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }

    return `${code.slice(0, 4)}-${code.slice(4, 8)}-${code.slice(8)}`;
  };

  const [voucherCode] = useState(generateVoucherCode());

  const handleRedeemVoucher = async () => {
    try {
      const newBalance = user.balance - points;

      dispatch(setBalance(newBalance));

      await Promise.all([
        axios.post(
          `${process.env.REACT_APP_BACKEND_API_URL}/update_user_balance`,
          {
            rfid: user.rfid,
            balance: points * -1, // subtract points from balance
          }
        ),
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/voucher`, {
          email: user.email,
          voucher_code: voucherCode,
        }),
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/add_transaction`, {
          rfid: user.rfid,
          transaction_date: new Date().toISOString(),
          transaction_type: "REDEEM VOUCHER",
          balance_modified: points * -1,
        }),
      ]);

      onClose();
      alert("Voucher redeemed successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error redeeming voucher. Please try again.");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
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
            <p>Your current balance: {user.balance} points</p>
            <p>Points required: {points} points</p>
            <p>Terms and Conditions:</p>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore.
              </li>
            </ol>
          </div>
          <button
            className={styles.redeemButton}
            onClick={handleRedeemVoucher}
            disabled={user.balance < points}
          >
            {user.balance < points ? "NOT ENOUGH POINTS" : "REDEEM VOUCHER"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoucherPopup;
