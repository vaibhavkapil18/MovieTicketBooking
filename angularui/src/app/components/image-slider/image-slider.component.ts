import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  sliderItems: any[] = [
    {
      title: 'Ticket Scanning Made Easy',
      description: 'Experience the ease of managing entry at an event.',
      link: 'https://your-link-here.com',
      linkText: 'Know More',
      imageUrl: 'https://assetscdn1.paytm.com/images/catalog/view_item/2123238/1698395667223.jpg?format=webp&imwidth=1024'
    },
    // Add more slider items as needed
  ];
  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.showNextImage(), 1500); // Change image every 1.5 seconds
  }

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.sliderItems.length;
  }
}
