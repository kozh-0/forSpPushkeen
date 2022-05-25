import './scss/About.scss';

export default function MainAbout() {
    return(
        <section className="main_about">
            <div className="main_about_info">
                <div className="main_about_info_description">
                    <h3>О площадке</h3>
                    <div className="custom_scroll">
                        <h5>Современная площадка для проведения концертов и других мероприятий любой сложности</h5>
                        <p>Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам. </p> <br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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