import { combineReducers } from 'redux'

import { data } from './data'
import { sort } from './sort'
import { order } from './order'
import { filter } from './filter'
export const rootReducer = combineReducers({
    data,
    sort,
    order,
    filter
})