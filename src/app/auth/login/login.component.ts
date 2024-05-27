import { Component } from '@angular/core';
import { User } from '../../core/model/user';
import { AuthentificationService } from '../../core/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthentificationService, private router: Router) { }

  login = true;
  signup = false;

  inverseAction() {
    this.login = !this.login;
    this.signup = !this.signup;
  }

  formDataSignUp = {
    id: 1,
    email: '',
    name: '',
    prename: '',
    password: '',
    confirmpassword: ''
  }

  formDataLogIn = {
    email: '',
    password: ''
  }
  logIn() {


    if (!this.formDataLogIn) {
      alert('Les données du formulaire sont manquantes !');
      return;
    }

    let missingField = '';
    if (!this.formDataLogIn.email) {
      missingField = 'Addresse email';
    } else if (!this.formDataLogIn.password) {
      missingField = 'Mot de passe';
    }

    if (missingField !== '') {
      alert('Veuillez remplir le champ ' + missingField);
      return;
    }



    this.authService.logIn(this.formDataLogIn)
      .subscribe(
        response => {
          if (response && response.token) {
            console.log('ok')
            this.router.navigate(['/master']);
          } else {
            // Gérer la réponse en cas de connexion échouée (par exemple, afficher un message d'erreur)
          }

        },
        error => {
          console.error('Erreur lors de la requête POST :', error.error);
          alert('Paire mail/mot de passe incorrect');
        }
      );;

  }




  signUp() {
    if (!this.formDataSignUp) {
      alert('Les données du formulaire sont manquantes !');
      return;
    }

    let missingField = '';
    if (!this.formDataSignUp.name) {
      missingField = 'Nom';
    } else if (!this.formDataSignUp.prename) {
      missingField = 'PreNom';
    } else if (!this.formDataSignUp.email) {
      missingField = 'Addresse email';
    } else if (!this.formDataSignUp.password) {
      missingField = 'Mot de passe';
    } else if (!this.formDataSignUp.confirmpassword) {
      missingField = 'Confirmer mot de passe';
    }

    if (missingField !== '') {
      alert('Veuillez remplir le champ ' + missingField);
      return;
    }

    if (this.formDataSignUp.password !== this.formDataSignUp.confirmpassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }


    let formUser = new User(
      this.formDataSignUp.id,
      this.formDataSignUp.email,
      this.formDataSignUp.name,
      this.formDataSignUp.prename,
      this.formDataSignUp.password)
    console.log(formUser);


    this.authService.signUp(formUser)
      .subscribe(
        response => {
          console.log('Réponse du serveur :', response);
          // Gérer la réponse ici (par exemple, afficher un message de succès)
        },
        error => {
          console.error('Erreur lors de la requête POST :', error.error);
          // Gérer l'erreur ici (par exemple, afficher un message d'erreur)
        }
      );;

  }

}
