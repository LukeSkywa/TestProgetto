import { createAction, props } from '@ngrx/store';

export const retrieveAllProducts = createAction('[Cart] retrieve all products');
export const initCart = createAction('[Cart] init', props<{products: string[]}>());
export const addToCart = createAction('[Cart] add', props<{product: string}>());
export const saveToCart = createAction('[Cart] save', props<{product: string}>());
