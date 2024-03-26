import { createContext, useReducer } from "react"
import { reducer } from "./reducer"
import * as types from './actionTypes'

export const UserContext = createContext()
const initialState = {
    users: [],
    filteredUsers: [],
    loading: true,
}

export const ContextProvider = ({children}) => {
    const [store, dispatch] = useReducer(reducer, initialState)

    store.setUsers = (data) => {
        dispatch({type: types.SET_USERS, payload: {users: data}})
    }
    store.searchUsers = (str) => {
        dispatch({type: types.SEARCH_USERS, payload: {searchStr: str}})
    }
    store.sortAscending = () => {
        dispatch({type: types.SORT_ASCEDING})
    }
    store.sortDescending = () => {
        dispatch({type: types.SORT_DESCEDING})
    }
    store.resetAll = (data) => {
        dispatch({type: types.RESET_ALL, payload: {defaultOrder: data}})
    }

    return (<UserContext.Provider value={store}>{children}</UserContext.Provider>)
}