import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { propertiesReducer } from './redux/reducers/propertyReducer'

const rootReducer = combineReducers({properties:propertiesReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store