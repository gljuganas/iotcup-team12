
import './NotFound.css'; 
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <div className='not-found-container'>
                <h1>404 - Page Not Found</h1>
                <Link to="/">Go back to Login Page</Link>
            </div>
        </div>
    );
}