import Voucher from "../components/Voucher/Voucher.jsx"
import VoucherPopup from "../components/VoucherPopup/VoucherPopup.jsx";
import { useState } from "react";
import "./Cashback.css"

function CashbackPage({points, name}){
    const [selectedVoucher, setSelectedVoucher] = useState(null);

    const vouchers = [
        {
            title: '15 PESOS OFF',
            storename: 'Potato Corner',
            points: 15,
            logoUrl: 'https://example.com/logo.png',
        },
        {
            title: 'BUY 1 TAKE 1',
            storename: 'MilkTea Hub',
            points: 25,
            logoUrl: 'https://example.com/milktea.png',
        },
        {
            title: 'BUY 1 TAKE 1',
            storename: 'Burger Hub',
            points: 25,
            logoUrl: 'https://example.com/milktea.png',
        },
    ];

    const handleRedeem = (voucher) => {
        setSelectedVoucher(voucher);
    };

    const closePopup = () => {
        setSelectedVoucher(null);
    };
    
    return (
        <>
            <header>
                <p>ECOLOOP</p>
            </header>
            <body>
                <div class="points-container">
                    <img src="/piggybank.png" alt="pic here"></img>
                    <div class="points-container-text">
                        <p class="text-welcome">HI {name}, YOU CURRENTLY HAVE</p>
                        <p class="text-points">{points} POINTS</p>
                    </div>
                </div>

                <div class="vouchers-container">
                    <h1>EXPLORE VOUCHERS</h1>
                    <div class="pageContainer">
                        {vouchers.map((v, idx) => (
                        <Voucher
                            key={idx}
                            title={v.title}
                            storename={v.storename}
                            points={v.points}
                            logoUrl={v.logoUrl}
                            onRedeem={handleRedeem}
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
            </body>
        </>
    )
}

export default CashbackPage