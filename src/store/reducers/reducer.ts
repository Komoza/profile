import { ActionTypes, AppAction, AppState } from '../actions/types/types';

const initialState: AppState = {
    language: 'ru',
};

const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case ActionTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;
