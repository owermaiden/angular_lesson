import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  productId: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.productId = params['id'];
    // });
    this.productId = +this.route.snapshot.params['id'];
  }



}
