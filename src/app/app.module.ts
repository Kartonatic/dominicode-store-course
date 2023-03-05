import { LOCALE_ID, NgModule } from '@angular/core';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materia.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
	],
	providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
registerLocaleData(es);
