export interface AppState {
    language: string;
}

export interface SetLanguage {
    type: ActionTypes.SET_LANGUAGE;
    payload: string;
}

export enum ActionTypes {
    SET_LANGUAGE = 'SET_LANGUAGE',
}

export type AppAction = SetLanguage;
