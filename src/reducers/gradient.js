import {
	GRADIENT_ADD_NEW_ITEM,
	GRADIENT_DELETE_ITEM,
	GRADIENT_MODIFY_ITEM,
} from '../constants';

const initialState = [
	{
		name: 'Argon',
		colors: [
			{
				id: Math.random() * 100,
				color: '#03001e',
			},
			{
				id: Math.random() * 100,
				color: '#7303c0',
			},
			{
				id: Math.random() * 100,
				color: '#ec38bc',
			},
			{
				id: Math.random() * 100,
				color: '#fdeff9',
			},
		],
	},
	{
		name: 'Learning and Leading',
		colors: [
			{
				id: Math.random() * 100,
				color: '#f7971e',
			},
			{
				id: Math.random() * 100,
				color: '#ffd200',
			},
		],
	},
	{
		name: 'Combi',
		colors: [
			{
				id: Math.random() * 100,
				color: '#00416a',
			},
			{
				id: Math.random() * 100,
				color: '#799f0c',
			},
			{
				id: Math.random() * 100,
				color: '#ffe000',
			},
		],
	},
];

export default function gradientReducer(state = initialState, action) {
	switch (action.type) {
		case GRADIENT_ADD_NEW_ITEM:
			return state;
		case GRADIENT_DELETE_ITEM:
			return state;
		case GRADIENT_MODIFY_ITEM:
			return state;
		default:
			return state;
	}
}
