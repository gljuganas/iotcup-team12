import './CashbackHeader.css';

export default function CashbackHeader({permission, handleRegisterUser, handleLogout}){

    return (
        <header className='header-container'>
            <p>ECOLOOP</p>
            <div className='button-container'>
                { permission === 1 ? <button className='action-button' onClick={handleRegisterUser}>REGISTER USER</button> : null}
                <button className='action-button' onClick={handleLogout}>LOGOUT</button>
            </div>
        </header>
    )
}