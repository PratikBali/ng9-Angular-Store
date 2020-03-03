import { Action } from '@ngrx/store';
import { Sample } from '../models/sample.model';
import * as SampleActions from '../actions/sample.actions'

const initialState: Sample = {
    name: 'Inotial',
    url: 'http://google.com'
}

export function reducer(state: Sample[] = [initialState], action: SampleActions.Actions) {
    switch (action.type) {
        case SampleActions.ADD_SAMPLE:
            console.log(state, action.payload, ...state);
            
            return [...state, action.payload]
        default:
            return state
    }
}
