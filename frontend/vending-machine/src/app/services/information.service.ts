import { Injectable } from '@angular/core';
import {Product} from '../components/Product'

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  product?:Product

  constructor() { }

  setData(data:Product){
    this.product = data;
  }
 
  getData(){
    return this.product;
  }
}
