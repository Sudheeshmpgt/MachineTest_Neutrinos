import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  adminId?:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.adminId = localStorage.getItem('adminId')
    if(this.adminId){
      this.router.navigate(['/adminhome'])
    }else{
      this.router.navigate(['/adminlogin'])
    }
  }

}
