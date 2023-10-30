import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  currentImage: string = 'C:\Users\hp\Merudata\angularui\src\assets\images\image1.jpg'; // Replace with the path to your first image
  image2: string = 'C:\Users\hp\Merudata\angularui\src\assets\images\image2.jpg'; // Replace with the path to your second image
  image3: string = 'C:\Users\hp\Merudata\angularui\src\assets\images\image3.jpg'; // Replace with the path to your third image
  image4: string = 'C:\Users\hp\Merudata\angularui\src\assets\images\image4.jpg';
  // Add more image paths as needed

  constructor() { }

  ngOnInit(): void {
    this.animateImages();
  }

  animateImages() {
    const images = [this.currentImage, this.image2, this.image3,this.image4]; // Add more image paths here
    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      this.currentImage = images[currentIndex];
    }, 1500); // Change image every 1.5 seconds (1500 milliseconds)
  }
}
