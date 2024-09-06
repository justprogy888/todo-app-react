import HomePage from "../HomePage/HomePage";
import TodoPage from "../TodoPage/TodoPage";
import TrashBinPage from "../TrashBinPage/TrashBinPage";
import Header from "../Common/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/todo" element={<TodoPage />} />
				<Route path="/trash-bin" element={<TrashBinPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
