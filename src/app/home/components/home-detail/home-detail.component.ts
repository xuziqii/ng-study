import { Component, OnInit } from '@angular/core';
import { Emoji } from 'src/app/share';

export interface ImgList {
  url: string
  title: string
}

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Emoji() title = 'pinduoduo';
  username = '';
  desc = 'desc';


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
