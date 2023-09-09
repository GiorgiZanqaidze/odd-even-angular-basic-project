import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment';

  numbers = [0];
  evenNumbers: number[] = []
  oddNumbers: number[] = []


  intervalFunction() {
    this.numbers.push(this.numbers[this.numbers.length - 1] + 1)
    this.evenNumbers = this.numbers.filter(item => item % 2 === 0)
    this.oddNumbers = this.numbers.filter(item => item % 2 === 1)
  }

  intervalId:any = null

  beginInterval() {
     this.intervalId =  setInterval(this.intervalFunction.bind(this), 100)

  }

  stopInterval() {
    clearInterval(this.intervalId)
  }

}
