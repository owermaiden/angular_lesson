import { Component } from '@angular/core';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent {
  selectedMentor: Mentor = {name: 'Ower', likeCount: 2};

  onLikeMentor(mentor: Mentor){
    
  }
}
