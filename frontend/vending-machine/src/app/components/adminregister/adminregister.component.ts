import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  email?:string;
  password?:string;
  adminId?:any;

  constructor(private httpClient:HttpClient, private router:Router) { }

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
    this.httpClient.post<any>('http://localhost:9000/api/admin/register', values).subscribe(res=>{
      alert(res.message)
      this.router.navigate(['/adminlogin']);
      
    })
  }

}
