import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPost } from "../redux/actions";

// Элемент списка постов
const PostItem = ({ title, body, id }) => {

    const dispatch = useDispatch();
    
    const handleClick = (id) => {
        dispatch(setPost(id));
    } 

    return (
        <Link 
            to="/user-post" 
            class="items-list__item post-item link"  
            onClick={ () => handleClick(id) }>
            
            <div class="icon-48">
                <svg>
                    <use xlinkHref="#image_icon"></use>
                </svg>
            </div>
            <div class="items-list__item-info">
                <h3 class="single-line">{ title }</h3>
                <p class="single-line">{ body }</p>
            </div>
        </Link>
    )
}

export default PostItem;