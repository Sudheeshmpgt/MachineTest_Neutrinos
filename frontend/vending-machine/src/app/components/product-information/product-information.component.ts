import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InformationService} from '../../services/information.service'

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
  product?:any

  constructor( private information:InformationService, private router:Router, private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.product = this.information.getData()
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

  goBack(){
    this.router.navigate(['/'])
  }
  
}
