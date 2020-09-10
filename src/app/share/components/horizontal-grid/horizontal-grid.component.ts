import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ImgList {
  url: string
  title: string
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  private _username = '';
  @Output() usernameChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @Input() imgList: ImgList[] = []

  @Input()
  public get username () {
    return this._username;
  }

  public set username (value) {
    this._username = value
    this.usernameChange.emit(value)
  }

}
