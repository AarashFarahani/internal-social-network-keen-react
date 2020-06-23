import * as actionTypes from "./userActionTypes";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
        case actionTypes.SHOW_ALL_USER: {
            return {
                ...state,
                currentMonth: action.payload.currentMonth,
                fromDate: action.payload.fromDate,
                toDate: action.payload.toDate
            }
        }
        default:
            return state;
    }
};