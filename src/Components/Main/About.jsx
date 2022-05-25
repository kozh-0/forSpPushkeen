
export default function MainAbout() {
    return(
        <section className="main_about">
            <div className="main_about_info">
                <div className="main_about_info_description">
                    <h3>О площадке</h3>
                    <div className="custom_scroll">
                        <h5>Современная площадка для проведения концертов и других мероприятий любой сложности</h5>
                        <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </p>
                        <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </p>
                    </div>
                </div>
                <div className="main_about_info_form">
                    <form>
                        <div>
                            <span>Оставить заявку на проведение концерта</span>
                            <input type="text" />
                        </div>
                        <button className="main_black_btn">Отправить</button>
                    </form>
                </div>
            </div>

            <div className="main_about_band">
                <h3 style={{width: '400px'}}>О группе</h3>
                <p>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
            </div>
        </section>
    )
}