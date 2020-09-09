import { addToCart } from './../../redux/cart/cart.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']
})
export class ProdottoComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addToCart(text){
    this.store.dispatch(addToCart({product: text}))
  }

}
