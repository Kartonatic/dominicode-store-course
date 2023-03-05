import { Product } from './../interfaces/product.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
	@Input() product!: Product;
	@Output() addToCartClick = new EventEmitter<Product>();
	constructor() {}

	ngOnInit(): void {}

	onClickOnBuy(): void {
		this.addToCartClick.emit(this.product);
	}
}
