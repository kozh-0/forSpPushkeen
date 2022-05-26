import './scss/ProfilePosts.scss';

import { useEffect/* , useState */ } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Preloader from "../Help/Preloader";
import { loadPostsThunk } from "../../Redux/profile/profileAction";


export default function ProfilePosts() {
    const { userId, name } = useParams();
    const posts = useSelector(state => state.profile.posts.filter(el => el.userId === +userId));
    const dispatch = useDispatch();

    // const [overFlowY, setOverFlowY] = useState(true)
    
    const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);


    // onClick={setOverFlowY(!overFlowY)}
    useEffect(() => {
        dispatch(loadPostsThunk());
    }, [dispatch])

    return (
        <div className="user_posts">
            <div className="container" >
                <h3 style={{paddingBottom: '0'}}>Посты</h3>
                <div 
                    className="user_posts_bunch" 
                    // style={overFlowY ? {height: '300px',minHeight: 'none'} : {height: 'none',minHeight: '300px'}}
                >
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
                    {/* <div onClick={setOverFlowY(!overFlowY)}>Развернуть</div> */}
            </div>
        </div>
    )
}