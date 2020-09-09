import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
};

@Component({
  selector: 'app-scroll-tabs',
  templateUrl: './scroll-tabs.component.html',
  styleUrls: ['./scroll-tabs.component.css']
})
export class ScrollTabsComponent implements OnInit {

  constructor() { }
  selectedMenu: number = -1;
  @Input() menus: Array<TopMenu> = [];
  @Output() selectTab = new EventEmitter();

  handleMenuClick (index) {
    this.selectedMenu = index;
    this.selectTab.emit(this.menus[index])
  }

  ngOnInit(): void {
  }

}
