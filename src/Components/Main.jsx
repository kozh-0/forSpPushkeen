import Footer from "./Help/Footer";
import Header from "./Help/Header";
import MainAbout from "./Main/About";

import MainTickets from "./Main/MainTickets";
import MainTop from "./Main/MainTop";


export default function Main() {
    return (
        <>
            <Header/>
                <MainTop/>
                <main className="container">
                    <MainTickets/>
                    <MainAbout/>
                </main>
            <Footer/>
        </>
  )
}
