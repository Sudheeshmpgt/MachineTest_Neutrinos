import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email?:string;
  password?:string;
  adminId?:any;

  constructor(private httpClient: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.email){
      alert('Please enter an email');
      return;
    }else if( !this.password){
      alert('Please enter a password');
      return;
    }

    const values = {
      email:this.email,
      password:this.password
    }
    this.httpClient.post<any>('http://localhost:9000/api/admin/login', values).subscribe(res=>{
      localStorage.setItem("adminId", res.data._id)

      if(res.data._id){
        this.router.navigate(['/adminhome']);
      }else{
        alert('Invalid credentials');
        return;
      }
      
    })
  }

}
