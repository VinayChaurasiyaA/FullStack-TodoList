import {createStore , combineReducers, applyMiddleware} from 'redux'
// Reducer. These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { todosReducers } from './reducer/todosReducers'
import { tabReducer } from './reducer/tabReducer'

const reducer = combineReducers({
    todos: todosReducers,
    currentTabs : tabReducer
})  
const middleware = [thunk]
const store = createStore( // in creatStore it only take 1 reducer
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store    