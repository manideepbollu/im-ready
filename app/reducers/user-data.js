import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const userData = createReducer({firstname: "Nothing"}, {
    [types.CREATE_USER](state, action) {
        return Object.assign({}, action.payload);
    }
});