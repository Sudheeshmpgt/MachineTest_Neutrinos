import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product?:any
  id?:any
  total?:number;

  constructor(private httpClient:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('userId')
    this.getCartData();
  }

  getCartData(){
    this.httpClient.get<any>(`http://localhost:9000/api/cart/${this.id}`).subscribe(res=>{
      this.product = res.item
      this.total = res.total
    })
  }

  placeOrder(){
    const values = {
      userId:this.id,
    }
    this.httpClient.post<any>('http://localhost:9000/api/order',values).subscribe(res=>{
      this.router.navigate(['/order'])
    })
  }
  
}
