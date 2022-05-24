import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function ProfilePosts() {
    const { userId } = useParams();
    const posts = useSelector(state => state.profile.posts.filter(el => el.userId === +userId));

    const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
    return (
        <div className="user_posts">
            <div className="container">
                <h3 style={{paddingBottom: '0'}}>Посты</h3>
                <div className="user_posts_bunch custom_scroll">
                    {posts.length && posts.map(el => (
                        <div key={el.title} className="user_posts_bunch_item">
                            <div>
                                <h4>{firstLetterToUpperCase(el.title)}</h4>
                                <h5>{new Date().toLocaleDateString()}</h5>
                            </div>
                            <p>{firstLetterToUpperCase(el.body)}</p>
                        </div>
                    ))}
                </div>
                {/* <div className="main_black_btn">Свернуть</div> */}
            </div>
        </div>
    )
}