import { useSelector, useDispatch } from "react-redux";
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
            
            <h2>Posts</h2>
            <div class="latest-posts">
            { /* Список постов пользователя */
                posts && posts.map(({ title, body, id}) => (
                    <PostItem 
                        title={ title } 
                        body={ body } 
                        key={ id.toString() } 
                        id={ id }
                    />
                ))
            }
            </div>
        </main>
    )
}

export default UsersInfo;