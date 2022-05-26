import './scss/ProfilePosts.scss';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Preloader from "../Help/Preloader";
import { loadPostsThunk } from "../../Redux/profile/profileAction";


export default function ProfilePosts() {
    const { userId, name } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.profile.posts.filter(el => el.userId === +userId));

    const [isOverflow, setisOverflow] = useState(true);

    
    const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
    
    // loads posts
    useEffect(() => {
        posts.length && dispatch(loadPostsThunk());
    }, [dispatch, posts.length])

    return (
        <div className="user_posts">
            <div className="container" >
                <h3 style={{paddingBottom: '0'}}>Посты</h3>
                <div className={isOverflow ? "user_posts_bunch overflow_active" : "user_posts_bunch"}>
                    {posts?.length ? posts.map(el => (
                        <div key={el.title} className="user_posts_bunch_item">
                            <div>
                                <h4>{firstLetterToUpperCase(el.title)}</h4>
                                <h5>{new Date().toLocaleDateString()}</h5>
                            </div>
                            <p>{firstLetterToUpperCase(el.body)}</p>
                            <Link to={`/forSpPushkeen/userpage/${userId}/${name}/comments/${el.id}`}>
                                <button className="main_black_btn">Подробнее</button>
                            </Link>
                        </div>
                    )) : <Preloader/>}
                </div >
                <div onClick={() => setisOverflow(!isOverflow)} className='user_posts_collapsible'></div>
            </div>
        </div>
    )
}