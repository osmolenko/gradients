import {
	GRADIENT_ADD_NEW_ITEM,
	GRADIENT_CHANGE_CURRENT,
	GRADIENT_CLEAR_CURRENT,
	GRADIENT_DELETE_ITEM,
	GRADIENT_MODIFY_ITEM,
} from '../constants';

export const changeCurrent = (id) => ({
	type: GRADIENT_CHANGE_CURRENT,
	payload: id,
});
export const clearCurrent = () => ({
	type: GRADIENT_CLEAR_CURRENT,
});

export const deleteItem = (id) => ({
	type: GRADIENT_DELETE_ITEM,
	payload: id,
});

export const addNewItem = (item) => ({
	type: GRADIENT_ADD_NEW_ITEM,
	payload: item,
});

export const modifyItem = (item) => ({
	type: GRADIENT_MODIFY_ITEM,
	payload: item,
});
