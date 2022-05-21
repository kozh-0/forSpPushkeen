
export default function MainTickets() {
    return (
        <div>
            <div className="tickets_info">
                <h3>Купили билеты</h3>
                <h2>932/1000</h2>
            </div>

            <div className="tickets_users">
                {[1,2,3,4].map(el => (
                    <div key={el} className="tickets_users_person">
                        <div>
                            <h4>Иванов Семен</h4>
                            <p>Санкт-Петербург</p>
                        </div>
                        <button className="main_black_btn">Смотреть профиль</button>
                    </div>
                ))}

            </div>
        </div>
    )
}