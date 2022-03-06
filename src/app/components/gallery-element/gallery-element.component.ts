import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-element',
  templateUrl: './gallery-element.component.html',
  styleUrls: ['./gallery-element.component.scss']
})
export class GalleryElementComponent implements OnInit {

  @Input() image?: string;

  @Output() zoomEvent: EventEmitter<string>;

  constructor() { 
    this.zoomEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  zoomImage() {
    if (this.image) {
      this.zoomEvent.emit(this.image);  
    }
  }

}
