import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.httpClient.get('http://localhost:9000/api/product').subscribe(res=>{
      console.log(res)
    })
  }

}
