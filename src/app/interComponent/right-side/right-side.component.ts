import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/services/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit{

 mentors: Mentor[] = [];

 constructor(private service: MentorService, private router: Router){}

 ngOnInit(): void {
  this.mentors = this.service.getMentors();
 }

 
 onSelectMentor(mentor : Mentor){
  this.service.selectMentor(mentor);
  this.router.navigate(['left']);
 }

//  goToLeftSide(){
  
//  }



}
