import { Post } from './post';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  exhaustMap, map, take } from 'rxjs/operators'
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root',
})

export class BlogsService {
    
    constructor(private http: HttpClient, private authService: AuthService) {}
    createPost(postData: Post) {
      return this.authService.user.pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.post(
          'https://mashupstack-angular-blog-5553d-default-rtdb.firebaseio.com/posts.json',
          postData,
          {params: new HttpParams().set('auth', user.idToken) }
      );
    })
  );
  }    

    fetchPost() {
      return this.authService.user.pipe(
        take(1),
        exhaustMap((user) => {
          return this.http.get<any>('https://mashupstack-angular-blog-5553d-default-rtdb.firebaseio.com/posts.json',
          {
            headers: new HttpHeaders({
              'custom-header':'Hello world',
            }),
            params: new HttpParams().set('auth', user.idToken),
          }
        );
      }),    

          map((responseData: { [key: string]: Post }) => {
            const postsArray: Post[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push({ ...responseData[key], id: key });
              }
            }
            return postsArray;
          })
        );
    }
      deletePosts() {
        return this.http.delete(
          'https://mashupstack-angular-blog-5553d-default-rtdb.firebaseio.com/posts.json'
        );
      }
    }