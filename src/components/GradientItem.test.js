import React from 'react';
import { fireEvent } from '@testing-library/react';
import GradientItem from './GradientItem';
import { renderWithReduxAndRouter } from '../test/helpers';

const props = {
	name: 'Combi',
	id: 2,
	colors: [
		{
			id: 1,
			color: '#00416a',
		},
		{
			id: 2,
			color: '#799f0c',
		},
		{
			id: 3,
			color: '#ffe000',
		},
	],
};

describe('GradientItem component', () => {
	it('should render a component', () => {
		const colors = props.colors.map((e) => e.color).join(', ');

		const { getByTestId } = renderWithReduxAndRouter(
			<GradientItem gradient={props} />
		);

		const cardContainer = getByTestId('CardContainer');
		const cardColor = getByTestId('CardColor');
		const cardActions = getByTestId('CardActions');
		const cardName = getByTestId('CardName');
		const editButton = getByTestId('CardEditButton');
		const deleteButton = getByTestId('CardDeleteButton');

		expect(cardContainer).toContainElement(cardColor);
		expect(cardContainer).toContainElement(cardActions);
		expect(cardActions).toContainElement(cardName);
		expect(cardActions).toContainElement(editButton);
		expect(cardActions).toContainElement(deleteButton);

		expect(cardColor).toHaveStyle(
			`background: linear-gradient(to right,  ${colors})`
		);

		expect(cardName).toHaveTextContent(props.name);
	});

	it('should delete an item', () => {
		const { getByTestId, store } = renderWithReduxAndRouter(
			<GradientItem gradient={props} />
		);

		const list = store.getState().gradients.list;
		const deleteButton = getByTestId('CardDeleteButton');

		fireEvent.click(deleteButton);

		expect(list).not.toContain(props);
	});
});
