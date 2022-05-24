import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";


export default function ProfileInfo() {
    const {name} = useParams();
    const user = useSelector(state => state.users.find(el => el.name === name));


    return (
        <div className="user_info">
            <div className="user_info_inner container">
                <div className="user_info_inner_basic">
                    <h3>{user.name}</h3>
                    <div>
                        <p>Website: {user.website}</p> 
                        <p>Company: {user.company.name}</p> 
                        <p>Business: {user.company.bs}</p> 
                    </div>
                </div>

                <div className="user_info_inner_rooftop">
                    <div>{user.city}</div>
                    <div className="user_info_inner_splitter"></div>
                    <div><a href={`mailto:${user.email}`}>{user.email}</a></div>

                    <div className="user_info_inner_splitter"></div>
                    <div><a href={`tel:${user.phone}`}>{user.phone}</a></div>

                    <div className="user_info_inner_splitter"></div>
                    <button className="main_black_btn">Написать сообщение</button>

                    <div className="user_info_inner_splitter"></div>
                    <button className="main_black_btn">Предложить сходить на концерт</button>
                </div>
            </div>
        </div>
    )
}
// {user.city ? ( 
//     ) : <Preloader/>}