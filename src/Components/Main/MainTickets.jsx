import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function MainTickets() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => data.map(item => {
            return {
                id: item.id,
                name: item.name,
                city: item.address.city
            }
        }))
        .then(data => setData(data))
    }, [])

    return (
        <div>
            <div className="tickets_info">
                <h3>Купили билеты</h3>
                <h2>932/1000</h2>
            </div>

            <div className="tickets_users">
                {data.length ? data.map(el => (
                    <div key={el.name} className="tickets_users_person">
                        <div>
                            <h4>{el.name}</h4>
                            <p>{el.city}</p>
                        </div>
                        <Link to={`/forSpPushkeen/userpage/${el.id}/${el.name}`}>
                            <button className="main_black_btn">Смотреть профиль</button>
                        </Link>
                    </div>
                )) : <h1>JSONPlaceholder работает только с VPN</h1>}

            </div>
        </div>
    )
}