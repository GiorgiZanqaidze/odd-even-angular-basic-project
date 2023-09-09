import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent {

  @Output() startInterval = new EventEmitter()

  @Output() endInterval = new EventEmitter()



  startSession() {
    this.startInterval.emit()
  }

  endSession() {
    this.endInterval.emit()
  }


}
