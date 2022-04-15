import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT, REFRESH_TOKEN } from 'src/constant/constants';
import { RenewTokens } from 'src/interface/renew-tokens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authorize {
  constructor(private http: HttpClient) {}

  public post(): Observable<RenewTokens> {
    const RefreshToken = REFRESH_TOKEN;
    return this.http.post<RenewTokens>(
      ENDPOINT + '/api/v1/tokens/renewtokens',
      {
        RefreshToken,
      }
    );
  }
}
