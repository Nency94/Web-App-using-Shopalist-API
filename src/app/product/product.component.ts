import { Component, ViewChild } from '@angular/core';
import { AuthService } from './product.service';
import { environment } from '../../environments/environment';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {


  @ViewChild('filter') filter;
  product: any = {
    index: 0,
    limit: environment.limit,
    mode: environment.mode,
    apikey: environment.apiKey,
    merchantFilter: environment.merchant,
    sortOrder: '',
    sortField: ''
  };
  error: string;
  isLoading: boolean;
  ItemsInfo: any;
  productList: any = [];
  sortOrder: { key: string; value: string; }[];
  sortField: { key: string; value: string; }[];
  sortFieldModel: {};
  sortOrderModel: {};
  constructor(public service: AuthService) { }

  ngOnInit() {
    this.sortOrder = environment.sortOrder;
    this.sortField = environment.sortField;
    this.getProduct("");
  }

  getProduct(value) {
    this.error = "";
    this.isLoading = true;
    this.product['q'] = value;
    let params = this.product;

    //delete empty keys 
    Object.keys(params).forEach(function (key) {
      if (!params[key]) {
        delete params[key];
      }
    });

    this.service.searchApi(params).subscribe(
      (data) => {
        let response = JSON.parse(data['_body']);
        this.productList = this.productList.concat(response.productList);
        this.product.index += this.product.limit;
        this.ItemsInfo = (({ numFound, featuredFacets }) => ({ numFound, featuredFacets }))(response);
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.error = "Please Check Your Internet Conection" || error.statusText;
      }
    );
  };

  init() {
    this.productList = [];
    this.product = {
      index: 0,
      limit: environment.limit,
      mode: environment.mode,
      apikey: environment.apiKey,
      merchantFilter: environment.merchant,
      sortOrder: '',
      sortField: ''
    };
    this.ItemsInfo = {};
  }

  onChange(key, value) {
    this.product[value] = key;
    this.product.index = 0;
    this.productList = [];
    this.getProduct(this.product['q']);
  }

  onNotify(object) {
    this.isLoading = true;
    var value = this.product['q'];
    this.init();
    for (let keys in object) {
      this.product[keys] = object[keys];
    };
    this.productList = [];


    this.getProduct(value);
  }

  search(value) {
    this.init();
    this.filter.clearValues();
    this.getProduct(value);
  }

}
