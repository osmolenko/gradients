import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditGradient from './pages/EditGradient';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="new" element={<EditGradient />} />
			<Route path="edit/:id" element={<EditGradient />} />
		</Routes>
	);
}

export default App;
