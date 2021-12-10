import { combineReducers } from 'redux';
import gradientReducer from './gradient';

const rootReducer = combineReducers({ gradients: gradientReducer });

export default rootReducer;
