import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {


  addProductForm = this.formBuilder.group({
    product_name:[null,Validators.required],
    product_price:[null,Validators.required],
    product_information:[null,Validators.required],
    picture:[null, Validators.required],
  })

  constructor(private httpClient:HttpClient, private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onFileChange(event:any){
    const file = event.target.files[0]
    this.addProductForm.patchValue({
      picture:file
    })
    this.addProductForm.get('picture')?.updateValueAndValidity();
  }

  get product_name(){
    return this.addProductForm.get('product_name')
  }
  get product_price(){
    return this.addProductForm.get('product_price')
  }
  get product_information(){
    return this.addProductForm.get('product_information')
  }
  get picture(){
    return this.addProductForm.get('picture')
  }

  onSubmit(){

    const fd : any = new FormData();
    const values = {
      product_name: this.addProductForm.controls.product_name.value, 
      product_price:this.addProductForm.controls.product_price.value,
      product_information:this.addProductForm.controls.product_information.value,
    }

    fd.append("product_name",values.product_name);
    fd.append("product_price",values.product_price);
    fd.append("product_information", values.product_information);
    fd.append("product_image",this.addProductForm.get('picture')?.value);


    this.httpClient.post<any>('http://localhost:9000/api/product', fd).subscribe(res=>{
      alert(res.message)
      
    })
    this.addProductForm.reset({
      product_name:null,
      product_price:null,
      product_information:null,
      picture:null,
    });

  }
}
