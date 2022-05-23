import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Preloader from '../Help/Preloader';


export default function ProfilePublications() {
    const {userId} = useParams();
    const [pics, setPics] = useState([]);
    console.log(userId);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/photos')
            .then(({data}) => data.splice(data.length - 20))
            .then(pics => pics.slice(userId, +userId + 6))
            .then(pics => setPics(pics))
    }, [userId]);

    return (
        <div className="user_publications">
            <div className="container">
                <h3>Публикации</h3>
                <div className="user_publications_bunch">
                    {pics.length ? pics.map(el => (
                        <div 
                            style={{background: `url(${el.thumbnailUrl})`}}
                            key={el.title} 
                            className="user_publications_bunch_item"
                        ></div>
                    )) : <Preloader/>}
                </div>
            </div>
        </div>
    )
}