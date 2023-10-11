import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mentor } from '../shared/mentor';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  productId: number;
  mentors: Mentor[] = [
    new Mentor(1,'Ower',12),
    new Mentor(2,'Sahin', 23),
    new Mentor(3,'Matt', 4)
  ];
  selected:Mentor | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.productId = params['id'];
    // });
    this.productId = +this.route.snapshot.params['id'];
  }

  onClick(mentor:Mentor){
    this.selected = mentor;
  }



}
