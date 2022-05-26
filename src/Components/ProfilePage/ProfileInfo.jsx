import './scss/ProfileInfo.scss';

import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";


export default function ProfileInfo() {
    const {name} = useParams();
    const user = useSelector(state => state.users.find(el => el.name === name));


    return (
        <div className="user_info">
            {user?.name ? (
                <div className="user_info_inner container">
                    <div className="user_info_inner_basic">
                        <div>
                            <img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/344/external-User-male-avatar-blue-others-cattaleeya-thongsriphong-2.png" alt="user" />
                            <h3>{user.name}</h3>
                        </div>
                        <div>
                            <a href={`https://www.${user.website}`}><p>Website: {user.website}</p></a> 
                            <p>Company: {user.company.name}</p> 
                            <p>Business: {user.company.bs}</p> 
                        </div>
                    </div>
                    
                    <div className='fullscreen_splitter'></div>

                    <div className="user_info_inner_rooftop">
                        <div>{user.city}</div>
                        <div className="user_info_inner_splitter"></div>
                        <div><a href={`mailto:${user.email}`}>{user.email}</a></div>

                        <div className="user_info_inner_splitter"></div>
                        <div><a href={`tel:${user.phone}`}>{user.phone}</a></div>
                        <div className='user_info_inner_rooftop_buttons_group'>
                            <button className="main_black_btn">Написать сообщение</button>
                            <button className="main_black_btn">Предложить сходить на концерт</button>
                        </div>
                    </div>
                </div>
            ) : <h3>Что-то пошло не так, попробуйте с начальной страницы</h3>}
        </div>
    )
}
// {user.city ? ( 
//     ) : <Preloader/>}