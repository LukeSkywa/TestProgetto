import { createAction, props } from '@ngrx/store';

export const addToCart = createAction('[Cart] add', props<{product: string}>());
export const saveToCart = createAction('[Cart] save', props<{product: string}>());
