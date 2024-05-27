import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from './services/authentification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authentificationService: AuthentificationService) { };
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le token JWT depuis le stockage local ou le cookie sécurisé
    let token = this.authentificationService.getToken();

    // Ajouter le token JWT à l'en-tête Authorization de la requête sortante
    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${token}`);
    const modifiedReq = request.clone({ headers });
    return next.handle(modifiedReq)
  }
}
