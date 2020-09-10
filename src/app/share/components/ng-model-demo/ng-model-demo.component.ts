import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.scss']
})
export class NgModelDemoComponent {

  username = '123'

  private _desc = ''
  @Output() descChange = new EventEmitter()

  @Input()
  get desc () {
    return this._desc
  }

  set desc (value) {
    this._desc = value
    this.descChange.emit(value)
  }

  constructor() { }

}
