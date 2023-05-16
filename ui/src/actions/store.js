import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { reducers } from "../reducers";

export const store = configureStore(
    {
        reducer: reducers,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    },
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
) 