import { createAction, props } from '@ngrx/store';

export const recoverPassowrd = createAction('[Recover Password]');
export const recoverPassowrdSuccess = createAction('[Recover Password] Success');
export const recoverPassowrdFail = createAction('[Recover Password] fail', props<{error: any}>());
