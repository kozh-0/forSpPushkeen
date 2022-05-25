import './Modal/Comments.scss';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPostCommentsThunk, resetComments } from "../Redux/profile/profileAction";
import Preloader from './Help/Preloader';
import Modal from "./Modal/Modal";


export default function UserPosts() {

    const [modalActive, setModalActive] = useState(false);

    const { name, postId } = useParams();
    const dispatch = useDispatch();
    const userPost = useSelector(state => state.profile.posts.find(el => el.id === +postId));
    const comments = useSelector(state => state.profile.comments);


    const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);

    useEffect(() => {
        dispatch(loadPostCommentsThunk(+postId));

        return () => dispatch(resetComments);
    }, [dispatch, postId])

    return (
        <main className="container">
            <div className="content">
                <div className="comments_post">
                    <h3 style={{width: 'unset'}}>{name} пишет</h3>
                    <div>
                        <h2>{firstLetterToUpperCase(userPost.title)}</h2>
                        <p>{new Date().toLocaleDateString()}</p>
                    </div>
                    <hr />
                    <p>{firstLetterToUpperCase(userPost.body)}</p>
                </div>
                
                <h3>Комментарии</h3>

                <div className="comments_bunch">
                    {comments?.length ? comments.map(el => (
                        <div key={el.id} className="comments_bunch_item">
                            <div>
                                <h4>{firstLetterToUpperCase(el.name)}</h4>
                                <a href={`mailto:${el.email}`}>{el.email}</a>
                            </div>
                            <hr />
                            <p>{firstLetterToUpperCase(el.body)}</p>
                        </div>
                    )) : <Preloader/>}
                </div>


                <button 
                    onClick={() => setModalActive(true)}
                    className="main_black_btn comments_sendbutton"
                >Оставить комментарий</button>
                <Modal active={modalActive} setActive={setModalActive}/>

            </div>
        </main>
    )
}