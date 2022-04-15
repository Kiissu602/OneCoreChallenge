import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT } from 'src/constant/constants';

import { Observable } from 'rxjs';
import { ProductImages } from 'src/interface/image-list';

@Injectable({
  providedIn: 'root',
})
export class Images {
  constructor(private http: HttpClient) {}

  public get(
    productId: number,
    accessToken: string
  ): Observable<ProductImages[]> {
    const headers = new HttpHeaders({
      Authorization: `PublicApi ${accessToken}`,
    });
    return this.http.get<ProductImages[]>(
      ENDPOINT + `/api/v1/productimages/${productId}/list`,
      { headers }
    );
  }
}
