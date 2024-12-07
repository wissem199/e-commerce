import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products: Produit[] = [
    { name: 'Produit 1', description: 'Description produit 1', price: 20.99 },
    { name: 'Produit 2', description: 'Description produit 2', price: 15.49 },
    { name: 'Produit 3', description: 'Description produit 3', price: 30.00 }
  ];

  constructor() { }

  ngOnInit(): void {}

  // Méthode pour formater le prix
  formatPrice(price: number): string {
    return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  addToCart(product: Produit) {
    console.log('Produit ajouté au panier:', product);
  }
}
