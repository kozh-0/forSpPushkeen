import './scss/MainTop.scss';

export default function MainTop() {
    return (
        <section className="main_top">
            <div className="container">
                <div className="main_top_textarea">
                    <h1>Twenty One Pilots</h1>
                    <h2>22.02.23 в 21:00</h2>
                </div>
                <div className="main_top_slider">
                    <div className="slider_button">
                        <span>&lsaquo;</span>   
                    </div>
                    <button className="header_btn">Купить билет</button>
                    <div className="slider_button">
                        <span>&rsaquo;</span>
                    </div>
                </div>
            </div>
        </section>
    )
}