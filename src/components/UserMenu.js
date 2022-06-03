import { Link } from "react-router-dom";

// Меню пользователя
const UserMenu = ({ username, menu }) => {
    return (
        <div class="user-menu">
            <h3>{ username }</h3>
            <ul class="user-menu__items link">
                <li class={ menu == 'info' && "active" }><Link to='/user-info'>Info</Link></li>
                <li class={ menu == 'post' && "active" }><Link to='/user-posts'>Posts</Link></li>
            </ul>
        </div>
    )
}

export default UserMenu;