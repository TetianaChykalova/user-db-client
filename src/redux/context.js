import { createContext, useReducer } from "react"
import { reducer } from "./reducer"
import * as types from './actionTypes'

export const UserContext = createContext()
const initialState = {
    users: [],
    posts: [],
    albums: [],
    photos: [],
    filteredUsers: [],
    loading: true,
    apiUsers: '',
    apiPosts: '',
    apiAlbums: '',
    apiPhotos: '',
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
    store.setPosts = (data) => {
        dispatch({type: types.SET_POSTS, payload: {posts: data}})
    }
    store.setAlbums = (data) => {
        dispatch({type: types.SET_ALBUMS, payload: {albums: data}})
    }
    store.setPhotos = (data) => {
        dispatch({type: types.SET_PHOTOS, payload: {photos: data}})
    }
    store.setApiUsers = (apiStr) => {
        dispatch({type: types.SET_API_USERS, payload: {apiStr}})
    }
    store.setApiPosts = (apiStr) => {
        dispatch({type: types.SET_API_POSTS, payload: {apiStr}})
    }
    store.setApiAlbums = (apiStr) => {
        dispatch({type: types.SET_API_ALBUMS, payload: {apiStr}})
    }
    store.setApiPhotos = (apiStr) => {
        dispatch({type: types.SET_API_PHOTOS, payload: {apiStr}})
    }
    store.apiRequestStart = () => {
        dispatch({type: types.API_REQUEST_START})
    }
    store.apiRequestEnd = () => {
        dispatch({type: types.API_REQUEST_END})
    }

    return (<UserContext.Provider value={store}>{children}</UserContext.Provider>)
}