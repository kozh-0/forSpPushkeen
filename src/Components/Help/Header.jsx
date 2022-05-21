import { Link } from "react-router-dom"

export default function Header() {

    return (
        <header>
            <div className="header container">
                <Link to="/forSpPushkeen">
                    <div className="header_logo">Concert club</div>
                </Link>
                
                <div>
                    <button className="header_btn">Версия для слабовидящих</button>
                    <button className="header_btn">Мой профиль</button>
                </div>
            </div>
        </header>
    )
}