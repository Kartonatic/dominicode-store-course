import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
		<mat-toolbar color="primary">
			<span>Karton first application</span>
		</mat-toolbar>
	`,
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
