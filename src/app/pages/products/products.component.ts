import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	products!: Product[];
	constructor(private productService: ProductsService) {}

	ngOnInit(): void {
		this.productService
			.getProducts()
			.pipe(tap((products: Product[]) => (this.products = products)))
			.subscribe();
	}
}
