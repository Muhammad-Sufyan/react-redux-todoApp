import {createStore} from 'redux';
import {myReducer} from './Reducers';




export const store = createStore(myReducer);

