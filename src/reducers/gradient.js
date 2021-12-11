import {
	GRADIENT_ADD_NEW_ITEM,
	GRADIENT_CHANGE_CURRENT,
	GRADIENT_CLEAR_CURRENT,
	GRADIENT_DELETE_ITEM,
	GRADIENT_MODIFY_ITEM,
} from '../constants';

const initialState = {
	current: {
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
	},

	list: [
		{
			name: 'Argon',
			id: 0,
			colors: [
				{
					id: 1,
					color: '#03001e',
				},
				{
					id: 2,
					color: '#7303c0',
				},
				{
					id: 3,
					color: '#ec38bc',
				},
				{
					id: 4,
					color: '#fdeff9',
				},
			],
		},
		{
			name: 'Learning and Leading',
			id: 1,
			colors: [
				{
					id: 1,
					color: '#f7971e',
				},
				{
					id: 2,
					color: '#ffd200',
				},
			],
		},
		{
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
		},
	],
};

function getItem(list, id) {
	return list.find((i) => i.id === +id);
}

function deleteItem(list, id) {
	return list.filter((value) => {
		return value.id !== id;
	});
}

function modifyItem(list, item) {
	const listCopy = list.concat();
	list.find((i, index) => {
		if (i.id === item.id) {
			listCopy[index] = item;
			return true;
		}
		return true;
	});
	return listCopy;
}

export default function gradientReducer(state = initialState, action) {
	switch (action.type) {
		case GRADIENT_CHANGE_CURRENT:
			return {
				...state,
				current: getItem(state.list, action.payload),
			};

		case GRADIENT_CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};

		case GRADIENT_DELETE_ITEM:
			return { ...state, list: deleteItem(state.list, action.payload) };

		case GRADIENT_ADD_NEW_ITEM:
			return {
				...state,
				list: state.list.concat(action.payload),
			};

		case GRADIENT_MODIFY_ITEM:
			return {
				...state,
				list: modifyItem(state.list, action.payload),
			};

		default:
			return state;
	}
}
