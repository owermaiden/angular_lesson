import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() selectedMentor: string = 'ower';
  @Output() likeEvent = new EventEmitter<string>();

  onLike(mentor: string){
    this.likeEvent.emit(mentor);
  }

}
