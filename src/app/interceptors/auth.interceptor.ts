import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = localStorage.getItem('username');
    if (username) {
      const clonedRequest = req.clone({
        setHeaders: { Username: username }
      });
      return next.handle(clonedRequest);
    }

    return next.handle(req);
  }
}
