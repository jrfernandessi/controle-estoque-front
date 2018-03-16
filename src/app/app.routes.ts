import { AppComponent } from "./app.component";
import { PecaComponent } from "./peca/peca.component";
import { Routes } from "@angular/router/";

export const ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'pecas', component: PecaComponent },
];