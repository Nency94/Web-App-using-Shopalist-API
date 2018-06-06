import { Injectable } from '@angular/core';
import { HttpService } from '../utils/services/http.service';

@Injectable()
export class AuthService {

  constructor(private httpService: HttpService) {

  }

  searchApi(params: Object): any {
    return this.httpService.getRequest("products", params);
  }
 
}