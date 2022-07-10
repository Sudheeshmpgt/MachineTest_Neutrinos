import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {
  product_name?:string;
  product_price?:any;
  product_information?:string;
  picture?:File;

  constructor(private httpClient:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  onFileChange(event:any){
    this.picture = event.target.files[0]
  }

  onSubmit(){
    if(!this.product_name || !this.product_price || !this.product_information || !this.picture){
      alert('Please fill all the details');
      return;
    }

    const fd = new FormData();
    const values = {
      product_name: this.product_name,
      product_price:this.product_price,
      product_information:this.product_information
    }
    fd.append("product_name",values.product_name);
    fd.append("product_price",values.product_price);
    fd.append("product_information", values.product_information);
    fd.append("product_image",this.picture)


    this.httpClient.post<any>('http://localhost:9000/api/product', fd).subscribe(res=>{
      alert(res.message)
      this.product_name = '';
      this.product_price = '';
      this.product_information = '';
    })
  }



}
