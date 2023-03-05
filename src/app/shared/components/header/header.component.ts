import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
		<mat-toolbar color="primary">
			<span>Karton first application</span>
			<p>Quantity: {{ quantity$ | async | json }}</p>
			<p>Total: {{ total$ | async | json }}</p>
			<p>Products: {{ cart$ | async | json }}</p>
		</mat-toolbar>
	`,
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	quantity$ = this.shoppingCartService.quantityAction$;
	total$ = this.shoppingCartService.totalAction$;
	cart$ = this.shoppingCartService.cartAction$;

	constructor(private shoppingCartService: ShoppingCartService) {}
}
