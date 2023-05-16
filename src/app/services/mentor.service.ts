import { Injectable } from '@angular/core';
import { Mentor } from '../shared/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  private mentors: Mentor[] = [
    new Mentor('Ower', 10), 
    new Mentor('Math', 2),
    new Mentor('Sahin', 3)
  ];

  selectedMentor: Mentor = this.mentors[1];


  constructor() { }

  public getMentors(): Mentor[]{
    return this.mentors.slice();
  }

  public likeMentor(mentor: Mentor){
    let index = this.mentors.findIndex(d => d.name === mentor.name);
    this.mentors[index].likeCount += 1;
  }



}
