import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { commentSend, fetchComments, setCommentBody, setCommentEmail, setCommentName } from "../redux/actions";

// Components
import UserIcon from "../components/UserIcon";
import UserMenu from "../components/UserMenu";

const UserPost = ({ menu }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);
    const userId = useSelector(state => state.users.userId);
    const post = useSelector(state => state.users.post);
    const postId = useSelector(state => state.users.postId);
    const comments = useSelector(state => state.users.comments);
    const myComment = useSelector(state => state.users.myComment);
    useEffect(() => {
        dispatch(fetchComments(post.id))
    }, []); 

    // Хэндлеры формы отправки комментария
    const handleInputName = (event) => {
        const value = event.target.value;
        dispatch(setCommentName(value));
    }

    const handleInputEmail = (event) => {
        const value = event.target.value;
        dispatch(setCommentEmail(value));
    }

    const handleInputBody = (event) => {       const value = event.target.value;
        dispatch(setCommentBody(value));
    }

    const handleClick = () => {
        dispatch(commentSend(userId, postId, myComment.name, myComment.email, myComment.body))
    }

    return (
        <main>
            <h1>User</h1>
            <UserIcon />
            <UserMenu username={ user.username } menu={ menu }/>
            
            { /* Выбранный пост */
                post && (
                    <>
                        <h2>Post</h2>
                        <h3>{ post.title }</h3>
                        <div class="post">
                            <div class="icon-64">
                                <svg>
                                    <use xlinkHref="#image_icon"></use>
                                </svg>
                            </div>
                            <div class="post-info">
                                <p>{ post.body }</p>
                            </div>
                        </div>
                    </>
                )
            }

            <h2>Comments</h2>
                { /* Список комментариев к посту */
                    comments && comments.map(({ name, email, body }) => (
                        <div class="comment">
                            <div class="items-list__item">
                                <div class="icon-48">
                                    <svg>
                                        <use xlinkHref="#comments_icon"></use>
                                    </svg>
                                </div>
                                <div class="items-list__item-info">
                                    <span><b>{ name }</b></span>
                                    <span>{ email }</span>
                                </div>
                            </div>
                            <p>{ body }</p>
                        </div>
                    ))
                }
            
            {/* Фора создания комментария */}
            <h2>My Comment:</h2>
                <div class="my-comment">
                    <input type="text" placeholder="Name" value={ myComment.name } onChange={ (event) => handleInputName(event) }></input>
                    <input type="text" placeholder="Email" value={ myComment.email } onChange={ (event) => handleInputEmail(event) }></input>
                    <input type="text" placeholder="Comment" value={ myComment.body } onChange={ (event) => handleInputBody(event) }></input>
                    <div class="button link">
                        <div class="icon-64" onClick={ () => handleClick() }>
                            <svg>
                                <use xlinkHref="#submit_icon"></use>
                            </svg>
                        </div>
                    </div>
                </div>

        </main>
    )
}

export default UserPost;