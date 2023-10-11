import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mentor } from 'src/app/shared/mentor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
//  @Input('mentor') mentor: Mentor;
 mentors: Mentor[] = [
  new Mentor(1,'Ower',12),
  new Mentor(2,'Sahin', 23),
  new Mentor(3,'Matt', 4)
];
selected: Mentor | undefined;

 constructor(private route: ActivatedRoute, private location: Location){}

 ngOnInit(): void {
  
  let index = Number(this.route.snapshot.paramMap.get('id'));
  this.selected = this.mentors[index - 1];

 }

 goBack(){
  this.location.back();
 }
 

 
}
