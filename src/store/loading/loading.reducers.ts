/* eslint-disable @typescript-eslint/ban-types */
import { Action, createReducer, on } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { LoadingState } from './LoadingState';


const initialState: LoadingState ={
  show: false
};

// It returns empty object
const reducer = createReducer(initialState,
  on(show, ()=>({show: true})),
  on(hide, ()=>({show: false}))
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// eslint-disable-next-line @typescript-eslint/ban-types
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function loadingReducer(state: LoadingState, action: Action){
  return reducer(state, action);
};
