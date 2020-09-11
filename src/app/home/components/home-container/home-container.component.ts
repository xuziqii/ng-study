import { Component, OnInit } from '@angular/core';
import { Emoji, TopMenu, Confirmable } from 'src/app/share';

export interface ImgList {
  url: string
  title: string
}
@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Emoji() title = 'pinduoduo';
  username = '';
  desc = 'desc';
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

  imgList: ImgList[] = [
    {
      url: '../assets/gird-imgs/bmw.jpg',
      title: '爆款',
    },
    {
      url: '../assets/gird-imgs/neteasy.jpg',
      title: '低价',
    },
    {
      url: '../assets/gird-imgs/recycle.jpg',
      title: '经典',
    }
  ]

}
