import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Help/Footer";
import Header from "./Components/Help/Header";
import Main from "./Components/Main";
import ProfilePage from "./Components/ProfilePage";

export default function App() {
  	return (
		<>
		<Header/>
			<Routes>
				<Route path="/forSpPushkeen" element={ <Main/> }/>
				<Route path="/forSpPushkeen/userpage/:userId/:name" element={ <ProfilePage/> }/>
			</Routes>
		<Footer/>

		</>
  );
}

