import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authservice: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Exclude specific URLs from the interceptor
    if (this.isLoginOrRegisterRequest(request.url)) {
      return next.handle(request);
    }

    const token = this.authservice.getAuthFromLocalStorage()?.authToken || '';

    // Clone the request and add the token to the headers
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(authRequest).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            // Handle unauthorized error here (e.g., log out the user)
            console.error('Unauthorized request. Logging out...');
            this.authservice.logout();
            // Implement your logout logic here
          }
        }
        return throwError(error);
      })
    );
  }

  private isLoginOrRegisterRequest(url: string): boolean {
    // Modify this method to match your login and register API URLs
    return url.includes('/login') || url.includes('/register');
  }
}
