import { createStore, applyMiddleware, AnyAction } from 'redux';
import { AppState, AppAction, CONNECT_WITH_SSO } from './types';
import { reducer, initialState } from './reducers';
import axios from 'axios';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // 

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer<any, AnyAction>(persistConfig, reducer);

export const store = createStore<AppState, AppAction, void, void>(
    persistedReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

// async function init() {
//     try {
//         await axios.get('http://192.168.1.8:3080/ws/is-connected', { method: 'GET', withCredentials: true })
//             .then(res => {
//                 const data = res.data
//                 console.log(res.data);
//                         store.dispatch({
//                         type: CONNECT_WITH_SSO,
//                          user: data.sso.user
//                 })
//             })
        //store.dispatch({
        //    type: CONNECT_WITH_SSO,
        //    user: json.sso.user
        //})

    // } catch (e) {
    //     ;
    // }
// }
// if (performance.navigation.type == 1) {
//     init();
 