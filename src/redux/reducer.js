import * as types from './actionTypes'

export function reducer(state, {type, payload}) {
    switch (type) {
        case types.SET_USERS:
            return {
                ...state,
                users: payload.users,
                filteredUsers: payload.users,
                loading: false
            }
        case types.SET_POSTS:
            return {
                ...state,
                posts: payload.posts,
                loading: false
            }
        case types.SET_ALBUMS:
            return {
                ...state,
                albums: payload.albums,
                loading: false
            }
        case types.SET_PHOTOS:
            return {
                ...state,
                photos: payload.photos,
                loading: false
            }
        case types.SEARCH_USERS:
            return {
                ...state,
                filteredUsers: state.users.filter(user => user.name.toLowerCase().includes(payload.searchStr.toLowerCase()))
            }
        case types.SORT_ASCEDING:
            const sortedUsersAsc = [...state.filteredUsers].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            return {
                ...state,
                filteredUsers: sortedUsersAsc
            };
        case types.SORT_DESCEDING:
            const sortedUsersDesc = [...state.filteredUsers].sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
            return {
                ...state,
                filteredUsers: sortedUsersDesc
            };
        case types.RESET_ALL:
            return {
                ...state,
                filteredUsers: payload.defaultOrder
            };
        case types.SET_API_USERS:
            return {
                ...state,
                apiUsers: payload.apiStr,
            }
        case types.SET_API_POSTS:
            return {
                ...state,
                apiPosts: payload.apiStr,
            }
        case types.SET_API_ALBUMS:
            return {
                ...state,
                apiAlbums: payload.apiStr,
            }
        case types.SET_API_PHOTOS:
            return {
                ...state,
                apiPhotos: payload.apiStr,
            }
        case types.API_REQUEST_START:
            return {
                ...state,
                loading: true,
            };
        case types.API_REQUEST_END:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}