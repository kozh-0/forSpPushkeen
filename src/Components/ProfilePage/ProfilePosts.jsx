import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadPostsThunk } from "../Redux/profile/profileAction";


export default function ProfilePosts() {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.profile.posts);
    console.log(posts);

    useEffect(() => {
        dispatch(loadPostsThunk(1));

    }, [dispatch])

    return (
        <div className="user_posts">
            <div className="container">
                <h3>Посты</h3>
                <div className="user_posts_bunch">
                    {posts.length ? posts.map(el => (
                        <div key={el.title} className="user_posts_bunch_item">
                            <h4>{el.title}</h4>
                            <p>{el.body}</p>
                        </div>

                    )) : null}
                </div>
            </div>
        </div>
    )
}