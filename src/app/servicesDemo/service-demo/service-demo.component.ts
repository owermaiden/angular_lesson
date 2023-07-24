import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/services/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit{

  mentors: Mentor[] = [];

  constructor(private service: MentorService){}

  ngOnInit(): void {
      this.mentors = this.service.getMentors();
      console.log(this.mentors);
  }

}
