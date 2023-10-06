import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  observable: Observable<string> = new Observable<string>((observer) => {
    observer.next("1");
    observer.next("2");
    setTimeout(() => {
      observer.next('Word 1');
      observer.complete();
    }, 3000); 
  });
  posts: Post[];

  months: Observable<number> = of(1,2,3,4,5,6,7,8,9);

  constructor(private postservice: PostService){}

  ngOnInit(): void {
    this.getData();
    this.subscription = this.observable.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
      complete: () => console.log('')
    });
  }


  getData() {
    this.postservice.getPost$().subscribe({
      next: (data) => this.posts = data,
      error: (error) => console.log(error),
      complete: () => console.log("completed")
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


