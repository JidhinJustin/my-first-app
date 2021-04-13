import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler)  {
        const newReq = req.clone({ headers: req.headers.append('Content-Type', 'application/json') });
        console.log('request has been sent to url: ' + req.url);
        return next.handle(newReq).pipe(
            tap((events) => {
                if (events.type == HttpEventType.Response) {
                    console.log(events.body);
                }
                console.log(events);
            })
        );
    }
}