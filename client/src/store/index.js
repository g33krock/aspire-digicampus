import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import teachers from './teachers';
import teacher from './teacher';
import students from './students';
import finalGrades from './finalGrades';

const reducer = combineReducers({ teachers, teacher, students, finalGrades });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;

export * from './teachers';
export * from './teacher';
