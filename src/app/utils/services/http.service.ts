import { Http, URLSearchParams, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

interface HeaderInterface {
  key: string,
  value: string
}

@Injectable()
export class HttpService {
  private baseUrl = environment.baseUrl;
  constructor(private http: Http) { }

  /**
   * Function to return common headers
   * @return headers Object
   */
  getCommonHeaders() {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    headers.append('Access-Control-Allow-Credentials', 'true');
    return headers;
  }

  /**
   * Function to Add Custom Headers and return it
   * @param headerArr Array<Object>
   * @return headers Object
   */
  getHeaders(headerArr?: Array<HeaderInterface>) {
    let headers = this.getCommonHeaders();
    if (headerArr)
      headerArr.forEach((headerObj) => {
        let key = headerObj['key'];
        let value = headerObj['value'];
        headers.set(key, value);
      });
    return headers;
  }
  /**
   * get type request
   * @param url 
   * @param params 
   * @param headerArr 
   */
  getRequest(url: String, params?: Object, headerArr?: Array<HeaderInterface>): any {
    let headers = this.getHeaders(headerArr);
    let reqOps = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http.get(`${this.baseUrl}/${url}`, reqOps);
  }
  /**
   * put type request
   * @param url 
   * @param body 
   * @param params 
   * @param headerArr 
   */
  putRequest(url: String, body: Object, params: Object, headerArr?: Array<HeaderInterface>): any {
    let headers = this.getHeaders(headerArr);
    let reqOps = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http.put(`${this.baseUrl}/${url}`, body, reqOps);
  }

  /**
   * post type request
   * @param url 
   * @param body 
   * @param headerArr 
   * @param params 
   */
  postRequest(url: String, body: Object, headerArr?: Array<HeaderInterface>, params?: Object): any {
    let headers = this.getHeaders(headerArr);
    let reqOps = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http.post(`${this.baseUrl}/${url}`, body, reqOps);
  }
  /**
     * patch type request
     * @param url 
     * @param body 
     * @param headerArr 
     * @param params 
     */
  patchRequest(url: String, body: Object, headerArr?: Array<HeaderInterface>, params?: Object): any {
    let headers = this.getHeaders(headerArr);
    let reqOps = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http.patch(`${this.baseUrl}/${url}`, body, reqOps);
  }

  /**
   * delete type Request 
   * @param url 
   * @param params 
   * @param headerArr 
   */
  deleteRequest(url: String, params?: Object, headerArr?: Array<HeaderInterface>): any {
    let headers = this.getHeaders(headerArr);
    let reqOps = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http.delete(`${this.baseUrl}/${url}`, reqOps);
  }

  /**
   * Request to upload any file.
   * @param url 
   * @param body 
   * @param headerObject 
   */
  fileUpload(url: String, body: FormData, headerObject: HeaderInterface): any {
    let headers = new Headers();
    headers.append("Authorization", headerObject.value);
    headers.append('accept-version', '1.0.0');
    let reqOps = new RequestOptions({
      headers: headers
    });
    return this.http.post(`${this.baseUrl}/${url}`, body, reqOps);
  }

}
