import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  titles: string = 'this is a string';
  isDisabled : boolean = false;
  userName: string = '';

  inputString: string = 'This is input';
  name: string = 'Hello World';

  onClick(){
    console.log('button clicked');
    this.isDisabled = true;
    this.titles = ' Title has changed';
  }

  onSubmit(value){
    this.inputString = value;
  }

  onInputChange(event: Event){
    console.log(event);

    const inputValue = (event.target as HTMLInputElement).value;
    this.userName = inputValue;
  }

  onMouseOver(event: any){
    console.log(event);
    // alert("Hello Team");
  }

  onMouseUp(event: any){
    console.log("done");
  }

}
