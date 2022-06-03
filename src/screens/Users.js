import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser, usersFetch } from "../redux/actions";

const Users = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(usersFetch());
      }, []);
    const users = useSelector(state => state.users.users);

    // Сохраняем userId выбранного пользователя
    const handleClick = (id) => {
        dispatch(setUser(id))
    }
    
    return users.length && (
        <main>
            <h1>All Users</h1>
            <div class="items-list">
                { /* Список пользователей */
                    users.map(user => (
                        <Link to="/user-info" class="items-list__item link" key={ user.id.toString() } onClick={ () => handleClick(user.id) }>
                            <div class="icon-48">
                                <svg>
                                    <use xlinkHref="#user_icon"></use>
                                </svg>
                            </div>
                            <div class="items-list__item-info">
                                <h3>{ user.name }</h3>
                                <span>{ user.email }</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </main>
    )
}

export default Users;