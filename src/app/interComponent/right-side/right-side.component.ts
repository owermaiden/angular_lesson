import { Component } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent {

 mentors: Mentor[] = [];

 constructor(private service: MentorService){

  this.mentors = this.service.getMentors();
  
 }



}
