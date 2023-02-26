import { RestService } from './../../service/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  constructor(private restService: RestService){}

  ngOnInit(): void {}

  public logOut(){
    this.restService.logOut()
  }
}
