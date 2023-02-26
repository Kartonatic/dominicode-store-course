import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'dominicode-store-course';

	getName(): void {
		console.log('Hello kartonatic world =)');
	}
}
