import MainAbout from "./Main/About";

import MainTickets from "./Main/MainTickets";
import MainTop from "./Main/MainTop";


export default function Main() {
    return (
        <>
            <MainTop/>
            <main className="container">
                <MainTickets/>
                <MainAbout/>
            </main>
        </>
  )
}
