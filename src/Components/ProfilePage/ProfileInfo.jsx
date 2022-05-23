import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getSingleUser } from "../Redux/profile/profileAction";


export default function ProfileInfo() {
    const {name} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.userInfo);

    useEffect(() => {
        dispatch(getSingleUser(name))
    }, [dispatch, name])

    return (
        user && <div className="user_info">
            <div className="user_info_inner container">
                <h3>{user.name}</h3>
                <div>
                    <div>{user.city}</div>
                    <div>
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                    </div>
                    <div>
                        <a href={`tel:${user.phone}`}>{user.phone}</a>
                    </div>
                    <button className="main_black_btn">Написать сообщение</button>
                    <button className="main_black_btn">Предложить сходить на концерт</button>
                </div>
            </div>
        </div>
    )
}