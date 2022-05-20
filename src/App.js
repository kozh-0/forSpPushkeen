import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";

export default function App() {
  	return (
    	<Routes>
      		<Route path="/forSpPushkeen" element={ <Main/> }/>
    	</Routes>
  );
}

