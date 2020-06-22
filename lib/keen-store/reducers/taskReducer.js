import * as actionTypes from "../ActionTypes";

const initialState = {
    comment: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_DAY_COMMENT: {
            return {
                ...state,
                comment: action.payload.comment
            }
        }
        default:
            return state;
    }
};