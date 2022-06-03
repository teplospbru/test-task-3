import { Link } from "react-router-dom";

// Меню при мобильном разрешении
const MobileMenu = ({ click, mobileMenuToggle }) => {

    const styles = mobileMenuToggle ? { display: 'flex' } : {}

    return (
        <div class="mobile-menu" style={ styles }>
            <ul class="link">
                <li onClick={ click }><Link to="/users">All Users</Link></li>
            </ul>
        </div>
    )
}

export default MobileMenu;