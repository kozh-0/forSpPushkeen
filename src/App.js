import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Help/Footer";
import Header from "./Components/Help/Header";
import Main from "./Components/Main";
import UserPage from "./Components/UserPage";

export default function App() {
  	return (
		<>
		<Header/>
			<Routes>
				<Route path="/forSpPushkeen" element={ <Main/> }/>
				<Route path="/forSpPushkeen/userpage/:id/:name" element={ <UserPage/> }/>
			</Routes>
		<Footer/>

		</>
  );
}

