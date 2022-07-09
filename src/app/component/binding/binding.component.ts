import { Component, OnInit } from '@angular/core';
import { Image } from '../../interface';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  isHidden: boolean = false;
  image: Image = {
    url: 'https://picsum.photos/200/300',
    alt: 'Just a random pic',
    hidden: false,
  };

  constructor() {}

  ngOnInit(): void {}

  toggleImage(): void {
    this.image.hidden = !this.image.hidden;
    console.log(this.image.hidden);
    
  }
}
