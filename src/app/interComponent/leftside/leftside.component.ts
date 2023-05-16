import { Component } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent {
  selectedMentor: Mentor;

  constructor(private service : MentorService){

    this.selectedMentor = this.service.selectedMentor;

  }

  onLikeMentor(mentor: Mentor){
    this.service.likeMentor(mentor);
  }
}
