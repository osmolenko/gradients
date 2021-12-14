import { renderWithReduxAndRouter } from '../test/helpers';
import { fireEvent } from '@testing-library/react';
import React from 'react';
import EditForm from './EditForm';

describe('EditForm component', () => {
	it('should change delete button state', () => {
		const { getAllByTestId, getByTestId } = renderWithReduxAndRouter(
			<EditForm />
		);

		let deleteButton = getAllByTestId('EditDeleteColor')[0];

		const addButton = getByTestId('EditAddColor');

		expect(deleteButton).toBeDisabled();

		fireEvent.click(addButton);

		expect(deleteButton).toBeEnabled();

		fireEvent.click(deleteButton);

		expect(getAllByTestId('EditDeleteColor')[1]).toBeDisabled();
	});

	it('should add 1 color input', () => {
		const { getAllByTestId, getByTestId } = renderWithReduxAndRouter(
			<EditForm />
		);

		const addButton = getByTestId('EditAddColor');
		const inputsQuantityBefore = getAllByTestId('EditColor').length;

		fireEvent.click(addButton);

		const inputsQuantityAfter = getAllByTestId('EditColor').length;

		expect(inputsQuantityBefore).toBeLessThan(inputsQuantityAfter);
	});
});
