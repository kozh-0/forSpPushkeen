import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Help/Footer";
import Header from "./Components/Help/Header";
import NotFound from "./Components/Help/NotFound";
import Main from "./Components/Main";
import ProfilePage from "./Components/ProfilePage";
import Comments from './Components/Comments';

export default function App() {
  	return (
		<>
		<Header/>
			<Routes>
				<Route path="/forSpPushkeen" element={ <Main/> }/>
				<Route path="/forSpPushkeen/userpage/:userId/:name" element={ <ProfilePage/> }/>
				<Route path="/forSpPushkeen/userpage/:userId/:name/comments/:postId" element={ <Comments/> }/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		<Footer/>
		</>
  );
}

