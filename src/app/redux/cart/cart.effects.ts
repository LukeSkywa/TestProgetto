import { addToCart, saveToCart } from './cart.actions';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpCommunicationsService } from 'src/app/services/http-communications.service';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class CartEffects{

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addToCart),
        switchMap(action => this.httpCommunicationsService.retrievePostCall<{name: string, id: number}>("products", {name: action.product}).pipe(
            map(product => saveToCart({ product: product.name }))
        ))
    ));

    constructor(private actions$: Actions,
        private httpCommunicationsService: HttpCommunicationsService) {
    }

}
