import { Component, OnInit } from '@angular/core';
import { TopMenu, Confirmable } from 'src/app/share';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: 'hot',
    },
    {
      title: '男装',
      link: 'man',
    },
    {
      title: '手机',
      link: 'phone',
    },
    {
      title: '女装',
      link: 'dress',
    },
    {
      title: '食品',
      link: 'food',
    },
  ];

  @Confirmable('真的要点击吗')
  handleSelectTab (topMenu: TopMenu) {
    console.log(topMenu);
  }


}
