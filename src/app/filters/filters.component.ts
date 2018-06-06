import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  error: string;
  @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();

  filters: any;
  applyFilter: any = {
    genderFilter: null,
    silhouetteFilter: null,
    subSilhouetteFilter: null,
    discountFilter: null,
    patternFilter: null,
    primaryColorFilter: null,
    fabricFilter: null,
    highPriceFilter: null,
    lowPriceFilter: null
  };
  isLoading = false;

  constructor() {
    this.filters = environment;
  }

  ngOnInit() { }

  selectValue(key, value) {
    this.isLoading = true;
    var index = -1;
    if (this.applyFilter[key]) {
      index = this.applyFilter[key].indexOf(value);
    } else {
      this.applyFilter[key] = [value];
      this.emitEvent();
      return;
    }

    if (index == -1) {
      this.applyFilter[key].push(value);
    } else {
      this.applyFilter[key].splice(index, 1);
    }

    this.emitEvent();
  };

  emptyModel(key) {
    this.isLoading = true;
    this.applyFilter[key] = "";
    this.emitEvent();
  }

  clearAll() {
    debugger
    this.isLoading = true;
    this.applyFilter = {
      genderFilter: null,
      silhouetteFilter: null,
      subSilhouetteFilter: null,
      discountFilter: null,
      patternFilter: null,
      primaryColorFilter: null,
      fabricFilter: null,
      highPriceFilter: null,
      lowPriceFilter: null
    };
    this.emitEvent();
  }


  emitEvent() {
    let filter = {};
    for (var key in this.applyFilter) {
      if (this.applyFilter[key] && key != 'lowPriceFilter' && key != 'highPriceFilter') {
        filter[key] = this.applyFilter[key].toString();
      } else {
        filter[key] = this.applyFilter[key];
      }
    }
    this.isLoading = false;
    this.notify.emit(filter);
  }

  slelectForRadio(key, e) {
    this.applyFilter[key] = e.value;
    this.emitEvent();
  }

  savePrice(highPrice, LowPrice) {

    if (!highPrice || !LowPrice) {
      this.error = 'Please enter both the Numbers';
      return;
    }

    if (parseInt(highPrice) > 0 && parseInt(LowPrice) > 0) {
      if (highPrice < LowPrice) {
        this.error = "High price should be grater then low price";
      }
      else {
        this.applyFilter.highPriceFilter = parseInt(highPrice);
        this.applyFilter.lowPriceFilter = parseInt(LowPrice);
        this.error = "";
        this.emitEvent();
      }
    } else {
      this.error = 'Enter a valid Number';
    }
  };

  clearPrice() {
    this.applyFilter.lowPriceFilter = null;
    this.applyFilter.highPriceFilter = null;
    this.emitEvent();
  };

}
