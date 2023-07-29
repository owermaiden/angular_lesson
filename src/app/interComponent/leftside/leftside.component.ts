import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/services/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {
  selectedMentor: Mentor | undefined;

  constructor(private service : MentorService, private router: Router){}

  ngOnInit(): void {
    this.selectedMentor = this.service.getSelectedMentor();
    // this.service.selectedMentor$$.subscribe(
    //       res => this.selectedMentor = res
    //     )
  }


  onLikeMentor(mentor: Mentor){
    this.service.likeMentor(mentor);
    this.router.navigate(['inter']);
  }
}


//
