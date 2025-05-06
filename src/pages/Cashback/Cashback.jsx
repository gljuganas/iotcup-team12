import CashbackHeader from "../../components/Cashback/CashbackHeader.jsx";
import Voucher from "../../components/Voucher/Voucher.jsx";
import vouchers from "../../vouchers.js";
import VoucherPopup from "../../components/VoucherPopup/VoucherPopup.jsx";
import { useState } from "react";
import "./Cashback.css";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/userSlice';

function CashbackPage() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedVoucher, setSelectedVoucher] = useState(null);

    const handleRedeem = (voucher) => {
        setSelectedVoucher(voucher);
    };

    const closePopup = () => {
        setSelectedVoucher(null);
    };
    
    const handleLogout = () => {
        dispatch(clearUser());
        navigate('/', { replace: true });
    };

    const handleRegisterUser = () => {
        navigate('/register');
    };
    
    const userName = user?.name ? user.name.toUpperCase() : 'GUEST';
    const userBalance = user?.balance || 0;
    
    return (
        <>
            <CashbackHeader 
                permission={user?.permission} 
                handleRegisterUser={handleRegisterUser}
                handleLogout={handleLogout}
            />
            <div className="body-container">
                <div className="points-container">
                    <img className="voucher-img" src="/piggybank.png" alt="piggy bank" />
                    <div className="points-container-text">
                        <p className="text-welcome">HI {userName}, YOU CURRENTLY HAVE</p>
                        <p className="text-points">{userBalance} POINTS</p>
                    </div>
                </div>

                <div className="voucher-container">
                    <h1>EXPLORE VOUCHERS</h1>
                    <div className="pageContainer">
                        {vouchers.map((v, idx) => (
                        <Voucher
                            key={idx}
                            title={v.title}
                            storename={v.storename}
                            points={v.points}
                            logoUrl={v.logoUrl}
                            onRedeem={() => handleRedeem(v)}
                        />
                        ))}
                    </div>

                    {selectedVoucher && (
                        <VoucherPopup
                            title={selectedVoucher.title}
                            storeName={selectedVoucher.storename}
                            points={selectedVoucher.points}
                            logoUrl={selectedVoucher.logoUrl}
                            onClose={closePopup}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default CashbackPage;