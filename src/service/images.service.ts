import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductImages } from './../interface/image-list';
import { Images } from 'src/api/image.api';
import { ENDPOINT } from 'src/constant/constants';
@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private imageApi: Images) {}

  public getImage(accessToken: string): Observable<ProductImages[]> {
    return this.imageApi.get(153541, accessToken);
  }

  public mapImageUrl(images: ProductImages[]): ProductImages[] {
    return images.map((i) => {
      i.Url = ENDPOINT + i.Url;
      return i;
    });
  }
}
