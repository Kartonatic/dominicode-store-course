import { Subject, Observable } from 'rxjs';
import { Product } from './../../pages/products/interfaces/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ShoppingCartService {
	products: Product[] = [];

	private cartSubject = new Subject<Product[]>();
	private totalSubject = new Subject<number>();
	private quantitySubject = new Subject<number>();

	get cartAction$(): Observable<Product[]> {
		return this.cartSubject;
	}

	get totalAction$(): Observable<number> {
		return this.totalSubject;
	}

	get quantityAction$(): Observable<number> {
		return this.quantitySubject;
	}

	updateCart(product: Product): void {
		this.addCart(product);
		this.quantityProducts();
		this.calculateTotal();
	}

	private addCart(product: Product): void {
		this.products.push(product);
		this.cartSubject.next(this.products);
	}

	private quantityProducts(): void {
		const quantity = this.products.length;
		this.quantitySubject.next(quantity);
	}

	private calculateTotal(): void {
		const total = this.products.reduce((acc, prod) => (acc += prod.price), 0);
		this.totalSubject.next(total);
	}
}
