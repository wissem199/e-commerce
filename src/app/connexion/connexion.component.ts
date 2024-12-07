import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  // Créer un formulaire réactif
  loginForm: FormGroup;

  constructor() {
    // Initialiser le formulaire avec des validations
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulaire soumis', this.loginForm.value);
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
