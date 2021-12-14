import { renderWithReduxAndRouter } from '../test/helpers';
import React from 'react';
import EditGradient from './EditGradient';
import App from '../App';
import { fireEvent, waitFor } from '@testing-library/react';

const colors = ['#fff', '#aeaeae'];

describe('Add new gradient page', () => {
	it('should render a page', () => {
		const { getAllByTestId, getByTestId } = renderWithReduxAndRouter(
			<EditGradient />
		);

		const heading = getByTestId('EditHeading');
		const form = getByTestId('EditForm');
		const name = getByTestId('EditName').querySelector('input');
		const color = getAllByTestId('EditColor');
		const addColor = getByTestId('EditAddColor');
		const submit = getByTestId('EditSubmit');

		expect(heading).toHaveTextContent('Add new gradient');
		expect(form).toContainElement(name);
		expect(color.length).toBeGreaterThanOrEqual(2);
		expect(name.value).toBe('New color');

		color.map((c, idx) => {
			expect(c.querySelector('input').value).toBe(colors[idx]);
		});

		expect(addColor).toHaveTextContent('Add 1 more color');
		expect(submit).toHaveTextContent('submit');
	});

	it('should add new element and redirect to home page', async () => {
		const { getAllByTestId, getByTestId, store } = renderWithReduxAndRouter(
			<App />
		);
		jest.useFakeTimers();

		const homeNewButton = getByTestId('HomeNewButton');

		const homeCardsBefore = getAllByTestId('CardContainer').length;
		const stateListBefore = store.getState().gradients.list.length;

		fireEvent.click(homeNewButton);

		const heading = getByTestId('EditHeading');

		expect(heading).toHaveTextContent('Add new gradient');

		const submit = getByTestId('EditSubmit');
		submit.click();

		await waitFor(() => {
			expect(homeCardsBefore).toBeLessThan(
				getAllByTestId('CardContainer').length
			);
			expect(stateListBefore).toBeLessThan(
				store.getState().gradients.list.length
			);
		});
	});
});
