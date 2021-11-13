import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {

  public view: string = 'GRID';
  public products: any = [];
  public sortOrder:number = 1;

  constructor() {

    this.products = [
      {name: 'Vivo Y3', price:2001},
      {name: 'Xt4', price:3999},
      {name: 'Iphone Xr', price:4000},
      {name: 'Vivo Y15', price:5999},
      {name: 'Iphone Xr', price:6599},
      {name: 'RealMe', price:2533},
      {name: 'Oppo f3', price:9999},
      {name: 'OnePlus v3', price:5555},
      {name: 'Iphone 13', price:2200},
      {name: 'MicroMax', price:8100},
      {name: 'Lenova', price:2100},
      {name: 'RedMi', price:8990},
      {name: 'SamSung ', price:2999},
      {name: 'Poco F1', price:9888},
      {name: 'POCO 11', price:1999},
      {name: 'Itell 20', price:2999},
      {name: 'Nokia', price:3998},
      {name: 'Lenovo fab2', price:4770},
      {name: 'Vivo Z3', price:5777},
      {name: 'Iphone mAX', price:6999},
      {name: 'F3', price:2999},
      {name: 'Iphone', price:3888},
      {name: 'Vivo V5s', price:5665},
      {name: 'Iphone 11Pro', price:2999},
      {name: 'phone', price:8999},
      {name: 'BT3', price:2777},
      {name: 'Karbonn 22', price:8777},
      {name: 'Vivo v20', price:2999},
      {name: 'Iphone 6s', price:9999},
      {name: 'OnePlus Node', price:1999},
      {name: 'Reliance Jio', price:2888},
      {name: 'Assus', price:7770},
      {name: 'Sony', price:4444},
      {name: 'RedMi Note7', price:5700},
      {name: 'Iphone 12pro', price:6300},
      {name: 'OnePlus 7pro', price:2100},
      {name: 'Iphone 8plus', price:3000},
      {name: 'BlackBerry', price:5000},
      {name: 'Garmin Vivo', price:2000},
      {name: 'Vivo X6', price:8000},
    ]

    this.sortData();

  }

  ngOnInit(): void {
  }

  sortData() {
    this.products.sort((a:any, b:any) => {
      if(this.sortOrder == 1){
        return <any>b.price - <any>a.price;
      }
      else{
        return <any>a.price - <any>b.price;
      }
    });
  }

}
