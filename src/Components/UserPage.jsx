import { useParams } from "react-router-dom"

export default function UserPage() {
    const kek = useParams()
    console.log(kek);

    return(
        <main className="content">
            <div className="user_info">
                <div className="user_info_inner container">
                    <h3>Иванов Семен</h3>
                    <div>
                        <div>Питер</div>
                        <div>ivanov@mail.com</div>
                        <div>+7 (821) 311-21-32</div>
                        <button className="main_black_btn">Написать сообщение</button>
                        <button className="main_black_btn">Предложить сходить на концерт</button>
                    </div>
                </div>
            </div>
            <div className="user_posts">
                <div className="container">
                    <h3>Посты</h3>

                </div>
            </div>

            <div className="user_publications"></div>
        </main>
    )
}