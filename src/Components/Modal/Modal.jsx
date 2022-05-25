import "./Modal.scss";
import { useState } from "react";
import axios from "axios";

export default function ModalComment({active, setActive}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isSent, setIsSent] = useState(false);
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    


    const postComment = (e) => {
        e.preventDefault();
        if (name && regEx.test(email) && comment) {
            axios.post('https://jsonplaceholder.typicode.com/comments', {
                name,
                email,
                comment
            })
            .then(({data}) => console.log(data))
            .catch(err => console.log(err));

        setIsSent(true);
        }
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                {!isSent ? (
                    <form>
                        <h2>Оставить комментарий</h2> 
                        <div className="modal_content_input">
                            <p style={name ? {color:'green'} : {color: 'red'}}>Имя</p>
                            <input 
                                required 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="modal_content_input">
                            <p style={(regEx.test(email)) ? {color:'green'} : {color: 'red'}}>E-mail</p>
                            <input 
                                required 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Случайные символы не пропустит"
                            />
                        </div>
                        <div className="modal_content_input">
                            <p style={comment ? {color:'green'} : {color: 'red'}}>Комментарий</p>
                            <textarea 
                                required 
                                type="text" 
                                value={comment} 
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                        <br />
                        <button className="main_black_btn" onClick={(e) => postComment(e)}>Отправить</button>
                    </form>
                ) : <h3>Сообщение отправлено <span style={{color: 'green'}}>&#10004;</span></h3>}
            </div>
        </div>
    )
}