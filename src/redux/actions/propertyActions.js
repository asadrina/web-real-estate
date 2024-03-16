import { FETCH_PROPERTIES_FAILURE, FETCH_PROPERTIES_REQUEST, FETCH_PROPERTIES_SUCCESS } from "./actionTypes"
import axios from "axios"

export const fetchPropertiesRequest = () => {
    return {
        type:FETCH_PROPERTIES_REQUEST
    }
}

export const fetchPropertiesSuccess = (properties) => {
    return {
        type:FETCH_PROPERTIES_SUCCESS,
        data:properties
    }
}

export const fetchPropertiesFailure = (error) => {
    return {
        type:FETCH_PROPERTIES_FAILURE,
        data:error
    }
}

export const fetchProperties = () => {
    return function(dispatch) {
        dispatch(fetchPropertiesRequest())
        axios.get('http://localhost:3001/products')
        .then(response => {
            const properties = response.data
            dispatch(fetchPropertiesSuccess(properties))
        })
        .catch(error => {
            dispatch(fetchPropertiesFailure(error.message))
        })
    }
}