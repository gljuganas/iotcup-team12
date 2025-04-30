import Voucher from "./components/Voucher"

function VoucherPopUp({title, storename, points}) {
    return (
        <div>
            <p>{title}</p>
            <p>{storename}</p>
            <p>{points}</p>
        </div>
    )
}

export default VoucherPopUp