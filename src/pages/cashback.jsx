import Voucher from "../components/Voucher.jsx"
import "./Cashback.css"

function CashbackPage({points, name}){
    return (
        <body>
            <header>
                <p>ECOLOOP</p>
            </header>
            <div class="points-container">
                <p class="text-welcome">HI {name}, YOU CURRENTLY HAVE</p>
                <p class="text-points">{points} POINTS</p>
            </div>

            <p>EXPLORE VOUCHERS</p>
            <Voucher title="15 PESOS OFF" storename="Potato Corner" points="50 POINTS"/>
        </body>
    )
}

export default CashbackPage