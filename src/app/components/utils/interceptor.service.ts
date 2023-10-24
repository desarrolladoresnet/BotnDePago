import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpXsrfTokenExtractor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cookieheaderName = "X-XSRF-TOKEN";
    let csrfToken = this.tokenExtractor.getToken() as string;
    if (csrfToken !== null && !req.headers.has(cookieheaderName)) {
      req = req.clone({
        headers: req.headers.set(cookieheaderName, csrfToken)
      });
    }
    return next.handle(req);
  }
}
