import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirige vers /home par défaut
  { path: 'home', component: HomeComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
