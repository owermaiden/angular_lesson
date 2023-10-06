import { Component } from '@angular/core';

@Component({
  selector: 'app-typecsript',
  templateUrl: './typecsript.component.html',
  styleUrls: ['./typecsript.component.css']
})
export class TypecsriptComponent {

  constructor(){}

  // public String word = "string"; // Java
  public name: string = 'https://www.tutorialsteacher.com/typescript';
  private schoolNumber: number = 12;
  avarageGrade: number = 12.4;
  readonly isEqual: boolean = false;
  static studentCount: number = 300;
  object1 : any = 23;
  object2 : any = 'asjcbak';

  // Array | ArrayList => Java
  // String[] myArray = { 'this', 'is', 'an', 'array' };

  stringArray : string[] = ['this', 'is', 'an', 'array'];
  numberArray : number[] = [10 , 20 , 30 ];
  anyArray : any[] = [10, 'string']; // Any means =>  without typescript


  public myFirstMethod(word: string, number1: number):void {
    console.log(word);
  }

  // functions
  areaCalculaetion(params:any):number {
    
    const pi : number = 3.14; // in java => final

    let result: number = 0;    // variable decleration in a method or constructor or loop
    result = 2 * pi * params;
    return result ;
  }

  // String Methods are very close to Java 
  stringMethods(givenString: string){

    givenString.toLowerCase();
    givenString.split(',');
    givenString.trim();
    givenString.substring(1,5);
    givenString.indexOf('a');

    let concatination: string = `${this.name} works in the ${this.schoolNumber} department.`; 
    // "merhaba" + givenString + " ";
    concatination.charAt(0);
    concatination.length;
    
  }

  // Array => There is no other data structure like array & arraylist... Just ArrayList
  arrayMethods(givenArray: number[]){

    givenArray.push(10);
    givenArray.pop()
    givenArray.length * 2;
    givenArray.forEach(n => n * 2);
    givenArray.findIndex(n => n === 10); // equality
    givenArray.find(n => n == 10);
    givenArray.slice(); // a copy of the array
    givenArray.splice(10, 1); // starting from element 10, remove only one element

    // %90 similar to Java
     
  }

  loopsInTypescript(){

    // for Loop
    for (let i = 0; i < 3; i++) {
      console.log ("Block statement execution no." + i);
    }

    // forEach Loop
    let arr: number[] = [10, 20, 30, 40];
    for (let val of arr) {
      console.log(val); // prints values: 10, 20, 30, 40
    }

    // While Loop
    let i: number = 2;
    while (i < 4) {
        console.log( "Block statement execution no." + i )
        i++;
    }

    //do-while Loop
    let x: number = 2;
    do {
        console.log("Block statement execution no." + x )
        x++;
    } while ( i < 4)
  }

  // If-Else Statement
  ifElseTypeScript(){
    let x: number = 10, y = 20;

    if (x > y) {
        console.log('x is greater than y.');
    } else if (x < y){
        console.log('x is less than y.'); 
    } else if (x == y) {
        console.log('x is equal to y');
    }
  }

  // Switch-Case
  switchCaseTypeScript(){
    let x = 10, y = 5;
    switch (x-y) {
        case 0:
            console.log("Result: 0");
            break;
        case 5:
            console.log("Result: 5");
            break;
        case 10:
            console.log("Result: 10");
            break;
        default:
            console.log('default');
    }
  }

}

// class example
class Employee {
  public id: number;
  public name: string;

  constructor(){}
}

interface IEmployee {
    id: number;
    name: string;
}

enum DAYS {
  SUNDAY, MONDAY, TUESDAY
}

let emp = new Employee();
emp.id = 123;
emp.name = "Swati";

let emp2: IEmployee = {id:1234 , name:'Ower'};



// JavaScript Object Notation (JSON)

let mentor: { name: string , surname: string} =  { name: 'Ower', surname: 'maiden' };  // HashMap

let mentor2 : Employee = { id: 123, name: 'Ower' };

let mentor3 : IEmployee = { id: 123 , name : "Ower" };
