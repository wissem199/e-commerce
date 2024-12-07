import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model'; // Assure-toi d'importer le modèle produit

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Produit[] = []; // Liste des produits dans le panier

  constructor() { }

  ngOnInit(): void {
    // Simule un panier de produits
    this.panier = [
      { name: 'Produit 1', description: 'Description produit 1', price: 20.99 },
      { name: 'Produit 2', description: 'Description produit 2', price: 15.49 }
    ];
  }

  // Méthode pour formater le prix
  formatPrice(price: number): string {
    return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  // Méthode pour supprimer un produit du panier
  removeFromCart(product: Produit) {
    const index = this.panier.indexOf(product);
    if (index !== -1) {
      this.panier.splice(index, 1);
      console.log('Produit supprimé du panier:', product);
    }
  }

  // Méthode pour calculer le total du panier
  getTotal(): number {
    return this.panier.reduce((total, product) => total + product.price, 0);
  }
}
