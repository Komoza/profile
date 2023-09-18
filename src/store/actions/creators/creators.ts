import { ActionTypes } from '../types/types';

export const setLanguage = (language: string) => {
    return {
        type: ActionTypes.SET_LANGUAGE,
        payload: language,
    };
};
