import { createStore, combineReducers } from "redux";
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducer";



// reducerlerı birleştir
const rootReducer = combineReducers({
    product: productReducer,
    basket: basketReducer,
})

//storu oluşturup import ettik
export default createStore(rootReducer)
