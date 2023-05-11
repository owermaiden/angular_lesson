import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  titles: string = 'this is a string';
  isDisabled : boolean = false;

  inputString: string = 'This is input';

  onClick(){
    console.log('button clicked');
    this.isDisabled = true;
  }

}
