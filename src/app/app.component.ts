import { Component } from '@angular/core';
import { TopMenu, Emoji, Confirmable } from './share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Emoji() title = 'pinduoduo';
  username = '';
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
