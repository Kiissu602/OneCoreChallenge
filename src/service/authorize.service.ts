import { Observable } from 'rxjs';
import { RenewTokens } from './../interface/renew-tokens';
import { Injectable } from '@angular/core';
import { Authorize } from 'src/api/authorize.api';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  constructor(private authorizeApi: Authorize) {}

  public authorize(): Observable<RenewTokens> {
    return this.authorizeApi.post();
  }
}
