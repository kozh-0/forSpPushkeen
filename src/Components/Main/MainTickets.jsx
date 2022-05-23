import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { loadPostsThunk } from "../Redux/profile/profileAction";
import { loadUsersThunk, resetUsers } from "../Redux/users/usersActions";

export default function MainTickets() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(loadUsersThunk());
        
        // return () => dispatch(resetUsers)
        // eslint-disable-next-line
        // if (!data.length) document.querySelector('.tickets_users').style.overflowX = "unset";
    }, [dispatch])
    
    return (
        <div>
            <div className="tickets_info">
                <h3>Купили билеты</h3>
                <h2>932/1000</h2>
            </div>

            <div className="tickets_users">
                {users.length ? users.map(el => (
                    <div key={el.name} className="tickets_users_person">
                        <div>
                            <h4>{el.name}</h4>
                            <p>{el.city}</p>
                        </div>
                        <Link to={`/forSpPushkeen/userpage/${el.name}`}>
                            <button 
                                className="main_black_btn"
                                onClick={() => dispatch(loadPostsThunk(el.id))}
                            >Смотреть профиль</button>
                        </Link>
                    </div>
                )) : <h2>JSONPlaceholder работает только с VPN</h2>}

            </div>
        </div>
    )
}