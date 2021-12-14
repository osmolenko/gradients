import { createStore } from 'redux';
import rootReducer from '../reducers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';

export const renderWithReduxAndRouter = (
	component,
	{ initialState, store = createStore(rootReducer, initialState) } = {}
) => {
	const Wrapper = ({ children }) => (
		<BrowserRouter>
			<Provider store={store}>{children}</Provider>
		</BrowserRouter>
	);
	return {
		...render(component, { wrapper: Wrapper }),
		store,
	};
};
