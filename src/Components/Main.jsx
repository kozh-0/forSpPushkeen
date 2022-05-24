import MainAbout from "./Main/About";
import MainTickets from "./Main/MainTickets";
import MainTop from "./Main/MainTop";


export default function Main() {
    return (
        <main className="content" style={{paddingTop: '0'}}>
            <MainTop/>
            <div className="container">
                <MainTickets/>
                <MainAbout/>
            </div>
        </main>
  )
}
