import Footer from "./Help/Footer";
import Header from "./Help/Header";
import MainTickets from "./Main/MainTickets";
import MainTop from "./Main/MainTop";


export default function Main() {
    return (
        <>
            <Header/>
                <MainTop/>
                <main className="container">
                    <MainTickets/>
                </main>
            <Footer/>
        </>
  )
}
