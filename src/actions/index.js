// ACTION TYPES //
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

// ACTION CREATORS //
export const addFeature = (feature) => {
    // Returning an action object
    return { type: ADD_FEATURE, payload: feature }
}

export const removeFeature = (feature) => {
    return { type: REMOVE_FEATURE, payload: feature }
}
