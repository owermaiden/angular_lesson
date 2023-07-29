import { Component } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted!');
      console.log(form.value.name);
    }
  }
}
