import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
klass="4twin5"
kolor = "red"
Q=40;
sayHello(){
  console.log("hello");
}
changeColor(t:any){
  this.kolor=t;
}

}
