import { Injectable } from '@angular/core';
import { Mentor } from '../shared/mentor';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  private mentors: Mentor[] = [
    new Mentor('Ower', 10), 
    new Mentor('Math', 2),
    new Mentor('Sahin', 3)
  ];

  selectedMentor: Mentor = this.mentors[0];   // Angular change detection...
  selectedMentor$$: BehaviorSubject<Mentor> = new BehaviorSubject(this.selectedMentor);
  // selectedMentor$: Subject<Mentor> = new Subject(); // Subject is a kind of obervable       Queue -> send data (next) / get data (subscribe)


  constructor() { }

  public getMentors(): Mentor[]{
    return this.mentors.slice();
  }

  public likeMentor(mentor: Mentor){
    let index = this.mentors.findIndex(d => d.name === mentor.name);
    this.mentors[index].likeCount += 1;
  }

  public selectMentor(mentor: Mentor){
    let index = this.mentors.findIndex(d => d.name === mentor.name);
    // this.selectedMentor = this.mentors[index];
    this.selectedMentor$$.next(this.mentors[index]);
    // console.log(this.selectedMentor);
  }

  // public getSelectedMentor(): Mentor{
  //   return this.selectedMentor;
  // }


  // Stream Api 



}
