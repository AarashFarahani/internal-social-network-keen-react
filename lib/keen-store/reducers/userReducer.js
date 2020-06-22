import * as actionTypes from "../ActionTypes";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_MONTH:
        case actionTypes.PREVIOUS_MONTH: {
            return {
                ...state,
                currentMonth: action.payload.currentMonth,
                fromDate: action.payload.fromDate,
                toDate: action.payload.toDate
            }
        }
        case actionTypes.TODAY: {
            return {
                ...state,
                currentDate: action.payload.currentDate,
                currentMonth: action.payload.currentMonth,
                fromDate: action.payload.fromDate,
                toDate: action.payload.toDate
            }
        }
        default:
            return state;
    }
};