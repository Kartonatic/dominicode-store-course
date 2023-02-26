import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KartonComponent } from './pages/karton/karton.component';

const routes: Routes = [
	{ path: 'karton', component: KartonComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
