import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lazy-load-image',
  templateUrl: './lazy-load-image.component.html',
  styleUrls: ['./lazy-load-image.component.scss'],
})
export class LazyLoadImageComponent implements OnInit {
  @Input() largeImge: string = '';
  @Input() thumbnail: string = '';
  @Input() name: string = '';

  public image: string = '';

  public blur: boolean = true;

  constructor() {}

  @ViewChild('lazyimage')
  lazyImage!: ElementRef;

  ngOnInit(): void {
    this.image = this.thumbnail;
  }

  ngAfterViewInit(): void {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._loadImage();
          observer.disconnect();
        }
      });
    });
    observer.observe(this.lazyImage.nativeElement);
  }

  private _loadImage() {
    let img = new Image();
    img.onload = () => {
      this.image = img.src;
      this.blur = false;
    };
    img.src = this.largeImge;
  }
}
