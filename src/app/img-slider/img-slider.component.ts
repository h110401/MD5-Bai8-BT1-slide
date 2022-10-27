import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  index = 0;
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    if (this.index === this.listImage.length - 1) this.index = 0
    else this.index++
  }

  prev() {
    if (this.index === 0) this.index = this.listImage.length - 1
    else this.index--
  }
}
