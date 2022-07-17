import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userId: any;

  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.createGuestUser(); 
  }

  menuVariable: boolean = false;

  openMenu(){
    this.menuVariable = !this.menuVariable;
  }

  createGuestUser(){
    this.httpClient.post<any>('http://localhost:9000/api/user', null).subscribe(res =>{
      this.userId = res.user._id;
      localStorage.setItem("userId", res.user._id)
    }  
    )
  }

}
