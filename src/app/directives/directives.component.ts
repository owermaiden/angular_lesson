import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit{
  
  isAuthorized: boolean = true;
  mentors: string[] = ['Ower', 'Matt', 'Sahin'];

  // constructor(private router: Router){}

  ngOnInit(): void {
    console.log(' This hook is used to initilize fields... Constructor should be left empty');
  }

  onClick(){
    this.isAuthorized = !this.isAuthorized;
  }

  // onNavigate(){
  //   this.router.navigate(['bindings']);
  // }
}
