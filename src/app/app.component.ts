import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinduoduo';
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

  handleSelectTab (topMenu: TopMenu) {
    console.log(topMenu);
  }
}
