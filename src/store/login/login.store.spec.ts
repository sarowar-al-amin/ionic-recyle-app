import { AppInitialState } from '../AppInitialState';
import { recoverPassowrd, recoverPassowrdFail, recoverPassowrdSuccess } from './login.actions';
import { loginReducer } from './login.reducers';
import { LoginState } from './LoginState';

describe(`login store`, ()=>{
  it(`recoverPassword`, ()=>{

    const initialState: LoginState = AppInitialState.login;

    const newState = loginReducer(initialState, recoverPassowrd());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true
    });
  });


  it(`recoverPasswordSuccess`, ()=>{

    const initialState: LoginState = AppInitialState.login;

    const newState = loginReducer(initialState, recoverPassowrdSuccess());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false
    });
  });

  it(`recoverPasswordSuccess`, ()=>{

    const initialState: LoginState = AppInitialState.login;

    const error = {error: 'error'};
    const newState = loginReducer(initialState, recoverPassowrdFail({error}));
    expect(newState).toEqual({
      ...initialState,
      error,
      isRecoveredPassword: false,
      isRecoveringPassword: false
    });
  });
});
