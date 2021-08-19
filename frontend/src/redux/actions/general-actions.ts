
export const START_FETCHING = 'START_FETCHING'
export const END_FETCHING = 'END_FETCHING'

export const startFetching = () => {
    return {
        type: START_FETCHING
    }
}

export const endFetching = () => {
    return {
        type: END_FETCHING
    }
}

export type GeneralActionTypes = 'START_FETCHING' | 'END_FETCHING'