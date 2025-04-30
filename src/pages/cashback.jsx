import Voucher from "../components/voucher.jsx"

function CashbackPage({points, name}){
    return (
        <>
        <></>
            <p>HI {name}, YOU CURRENTLY HAVE</p>
            <p>{points} POINTS</p>

            <p>EXPLORE VOUCHERS</p>
            <Voucher title="15 PESOS OFF" storename="Potato Corner" points="50 POINTS"/>
        </>
    )
}

export default CashbackPage