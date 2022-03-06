import { Component, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imageList: string[];

  constructor() {
    const image1 = './assets/images/gallery/gallery-1.jpg';
    const image2 = './assets/images/gallery/gallery-2.jpg';
    const image3 = './assets/images/gallery/gallery-3.jpg';
    const image4 = './assets/images/gallery/gallery-4.jpg';
    const image5 = './assets/images/gallery/gallery-5.jpg';
    const image6 = './assets/images/gallery/gallery-6.jpg';
    const image7 = './assets/images/gallery/gallery-7.jpg';
    const image8 = './assets/images/gallery/gallery-8.jpg';
    const image9 = './assets/images/gallery/gallery-9.jpg';
    const image10 = './assets/images/gallery/gallery-10.jpeg';
    this.imageList = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  }

  ngOnInit(): void {
  }

  zoom(url: string) {
    // alert(url);
    // Get the modal
    const modal = <HTMLElement>document.getElementById("myModal");
    modal!.style.display = 'flex';
    modal!.style.top = '-15%';

    const modalContent = <HTMLElement>document.getElementById("modal-content");

    const imageElement = <HTMLImageElement>document.getElementById('image-result');

    imageElement!.src = url;
    imageElement!.style.width = '650px';

    // Get the <span> element that closes the modal
    const span = <HTMLElement>document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    //modal.style.display = "block";

    modalContent!.appendChild(imageElement!);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        //location.reload();
    }
  }

}
