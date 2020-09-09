import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectProducts } from 'src/app/redux/cart';
import { BehaviorSubject, of, Observable } from 'rxjs';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  get products(): Observable<string[]> {
    return this.store.pipe(select(selectProducts));
  };

  constructor(private store: Store) { 
  }

  ngOnInit(): void {
  }

}
