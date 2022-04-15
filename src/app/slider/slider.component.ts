import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthorizeService } from 'src/service/authorize.service';
import { ImagesService } from 'src/service/images.service';
import { ProductImages } from 'src/interface/image-list';
import { ENDPOINT } from 'src/constant/constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @ViewChild('nxtBtn')
  nxtBtn!: ElementRef;
  @ViewChild('preBtn')
  preBtn!: ElementRef;
  @ViewChild('sliderContainer')
  sliderContainer!: ElementRef;

  public thumbnail: string = '../../assets/thumbnail.png';

  public selectedIndex = 0;
  public images: ProductImages[] = [];
  constructor(
    private authorizeService: AuthorizeService,
    private imageService: ImagesService
  ) {}

  ngOnInit(): void {
    this.authorizeService.authorize().subscribe((data) => {
      this.imageService.getImage(data.AccessToken).subscribe((res) => {
        this.images = this.imageService.mapImageUrl(res);
      });
    });
  }

  onPrevClick() {
    if (this.selectedIndex == 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
