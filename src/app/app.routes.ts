import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { StockItemListComponent } from './stock-items/stock-item-list/stock-item-list.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'stock-items', component: StockItemListComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];