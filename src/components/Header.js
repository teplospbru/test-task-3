import { Link } from "react-router-dom";

// Хедер
const Header = ({ click }) => {
    return (
        <header>
            <span class="logo">SOCIAL APP</span>
            <ul class="menu link">
                <li><Link to="/users">All Users</Link></li>
            </ul>
            <div class="burger link icon-32" onClick={ click }>
                <svg>
                    <use xlinkHref="#burger_icon"></use>
                </svg>
            </div>
        </header>
    )
}

export default Header;