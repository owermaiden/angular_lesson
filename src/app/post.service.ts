import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost$(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url).pipe(
      map(data => data.filter(each => each.body.startsWith('a'))),
    );
  }
}
