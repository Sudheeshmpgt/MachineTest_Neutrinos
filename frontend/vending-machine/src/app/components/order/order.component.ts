import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:any;
  userId:any;
  products:any;
  quantities:any;
  totalPrice:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.httpClient.get<any>(`http://localhost:9000/api/order/${this.userId}`).subscribe(res=>{
      console.log (res)
      this.orders = res.order;
      this.quantities = res.order[0].products
      this.products = res.products
      this.totalPrice = res.order[0].total_price
    })
  }

}
