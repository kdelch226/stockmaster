import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('token') !== null) {
      return sessionStorage.getItem('token');
    } else {
      return null;
    }
  }
  
  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }
  

  removeToken(): void {
    sessionStorage.removeItem('token');
  }


  signUp(user: User): Observable<User> {
    let url = this.apiUrl + '/' + 'signup'
    console.log('lien : ', url);
    return this.http.post<any>(url, user).pipe(
      catchError(error => {
        console.error('Erreur lors de la requête POST angular:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }

  logIn(user: any) {
    this.removeToken();
    let url = this.apiUrl + '/' + 'login'
    return this.http.post<any>(url, user).pipe(
      tap(response => {
        this.setToken(response.token);
      }),
      catchError(error => {
        console.error('Erreur lors de la requête POST angular:', error);
        throw error; // Propage l'erreur pour qu'elle soit gérée dans le composant appelant
      })
    );
  }

  logOut(): void {
    this.removeToken();
  }

}
