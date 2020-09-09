import { CartEffects } from './cart/cart.effects';
import { CartState, cartReducer } from './cart/cart.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
    cartState: cartReducer
};

export const effects: any[] = [CartEffects]

