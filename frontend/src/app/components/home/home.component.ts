import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Product} from '../Product'
import {InformationService} from '../../services/information.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products?: any;
  public page: number = 1;
  public total?: number;

  constructor(private httpClient:HttpClient, private information:InformationService, private router:Router) { }
  

  ngOnInit(): void {
    this.getAllProducts();
  }

  sendData(product:Product){
    this.information.setData(product)
    this.router.navigate(['/product_info'])
  }


  getAllProducts(){
    this.httpClient.get<any>('http://localhost:9000/api/product').subscribe(res=>{
      this.products = res.products;
      this.total = res.products.length
    })
  }

  searchText:string = '';

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    if(searchValue === ''){
      this.ngOnInit();
    }else{
      this.products = this.products.filter((data:any)=>{
        return (
          data.product_name.toLowerCase().includes(searchValue.toLowerCase())
        )
      })
    }
  }

  addToCart(product:any){ 
    const values = {
      productId:product._id,
      userId:localStorage.getItem('userId')
    }

    this.httpClient.post<any>('http://localhost:9000/api/cart', values).subscribe(res=>{
      alert(res.message)
      this.router.navigate(['/cart'])
    })
  }

}
