import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
 @Input() dontShow: boolean = true;
 @Output() myCustomEvent = new EventEmitter<any>();

 onMouseOver(){
  this.myCustomEvent.emit(4);
 }

}
