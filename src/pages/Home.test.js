import React from 'react';
import { renderWithReduxAndRouter } from '../test/helpers';
import { fireEvent } from '@testing-library/react';
import App from '../App';

describe('Home page', () => {
	it('should render a page', () => {
		const { getAllByTestId, getByTestId } = renderWithReduxAndRouter(<App />);

		const homeHeader = getByTestId('HomeHeader');
		const homeHeading = getByTestId('HomeHeading');
		const homeNewButton = getByTestId('HomeNewButton');
		const homeCard = getAllByTestId('CardContainer');

		expect(homeHeader).toContainElement(homeHeading);
		expect(homeHeader).toContainElement(homeNewButton);
		expect(homeCard.length).toBe(3);

		expect(homeHeading).toHaveTextContent('Gradient lister and editor');
		expect(homeNewButton).toHaveTextContent('Add new gradient');
	});

	it('should delete an item', () => {
		const { getAllByTestId } = renderWithReduxAndRouter(<App />);

		const cardsQuantityBefore = getAllByTestId('CardContainer').length;
		const deleteButton = getAllByTestId('CardDeleteButton')[0];

		fireEvent.click(deleteButton);

		const cardsQuantityAfter = getAllByTestId('CardContainer').length;

		expect(cardsQuantityBefore).toBeGreaterThan(cardsQuantityAfter);
	});

	it('should navigate to edit page', () => {
		const { getAllByTestId, container } = renderWithReduxAndRouter(<App />);

		const editButton = getAllByTestId('CardEditButton')[0];

		fireEvent.click(editButton);

		expect(container).toHaveTextContent('Edit gradient');
	});
});
