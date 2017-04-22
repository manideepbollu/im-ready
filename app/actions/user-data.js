import * as types from './types'
import Api from '../lib/api'

export function createUser(userData) {
    return {
        type: types.CREATE_USER,
        payload: {
            firstname: "Manideep"
        }
    }
}