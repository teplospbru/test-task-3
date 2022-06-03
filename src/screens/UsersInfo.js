import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../redux/actions";

// Components
import PostItem from "../components/PostItem";
import UserIcon from "../components/UserIcon";
import UserMenu from "../components/UserMenu";


const UsersInfo = ({ menu }) => {

const dispatch = useDispatch();
const user = useSelector(state => state.users.user);
const userId = useSelector(state => state.users.userId);
const posts = useSelector(state => state.users.posts);
useEffect(() => {
    dispatch(fetchPosts(userId))
}, []);

    return (
        <main>
            <h1>User</h1>
            <UserIcon />
            <UserMenu username={ user.username } menu={ menu }/>

            {/* Информация о пользователе */}
            <h2>Info</h2>
            <div class="user-info">
                <div>
                    <p>{ user.name }</p>
                    <p>{ user.email }</p>
                    <p>{ user.phone }</p>
                </div>
                <div>
                    <p>{ user.company.name }</p>
                    <p>{ user.company.bs }</p>
                    <p>{ user.website }</p>
                </div>
            </div>

            <h2>Latest Posts</h2>
            <div class="latest-posts">
            { /* Список 3 постов пользователя */
                posts && posts.slice(0,3).map(({ title, body, id }) => (
                    <PostItem 
                        title={ title } 
                        body={ body } 
                        key={ id.toString() } 
                        id={ id }
                    />
                ))
            }
            </div>

            <Link to='/user-posts' class="link medium">View All</Link>
        </main>
    )
}

export default UsersInfo;