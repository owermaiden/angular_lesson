import { Component } from '@angular/core';

@Component({
  selector: 'app-xcomponent',
  templateUrl: './xcomponent.component.html',
  styleUrls: ['./xcomponent.component.css']
})
export class XcomponentComponent {
  mentors: string[] = ['Ower', 'Matt', 'Sahin'];
  selectedMentor: string = '';

  onSelectMentor(mentor){
    this.selectedMentor = mentor;
  }

  onLikeMentor(mentor: string){
    let index = this.mentors.findIndex(d => d === mentor);
    this.mentors[index] = `${mentor} liked`;
  }
}
