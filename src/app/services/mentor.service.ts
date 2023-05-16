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


  constructor() { }

  public getMentors(): Mentor[]{
    return this.mentors.slice();
  }

}
