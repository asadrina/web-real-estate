import { FETCH_PROPERTIES_FAILURE, FETCH_PROPERTIES_REQUEST, FETCH_PROPERTIES_SUCCESS } from "../actions/actionTypes";

const initialPropertyState = {
    loading:false,
    properties:[],
    error:''
}
export const propertiesReducer = (state = initialPropertyState,action) => {
    switch (action.type) {
        case FETCH_PROPERTIES_REQUEST:
            return {...state, loading:true}
        case FETCH_PROPERTIES_SUCCESS:
            return {loading:false,properties:action.data,error:''}
        case FETCH_PROPERTIES_FAILURE:
                return {properties:'',error:action.data}
        default:
            return state
    }
}