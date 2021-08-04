import { createAction } from '@ngrx/store';
import { hide, show } from './loading.actions';
import { loadingReducer } from './loading.reducers';
import { LoadingState } from './LoadingState';

describe('Loading reducer', ()=>{

  it(`show`, ()=>{
    const initialState: LoadingState = {show: false};
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({show: true});
  });

  it(`hide`, ()=>{
    const initialState: LoadingState = {show: true};
    const newState = loadingReducer(initialState, hide());

    expect(newState).toEqual({show: false});
  });

  it(`should keep in action if there is an unknown action`, ()=>{
    const initialState: LoadingState = {show: true};
    const action = createAction('UNKNOWN');
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual({show: true});
  });
});
