import { combineReducers } from 'redux'

import { data } from './data'
import { sort } from './sort'
import { order } from './order'
export const rootReducer = combineReducers({
    data,
    sort,
    order
})