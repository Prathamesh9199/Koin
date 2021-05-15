import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public ms = '';

  constructor(private client:HttpClient) { }

  resetBlockchain(){

    const headers = {'Content-Type': 'application/json', 'X-Master-key':'$2b$10$HTeiK7Y.T/VhrWVmzJusHuwUkUbDICaPKU4CxMiBZSUIzN9pmGWhK'};    
    const data  = [{"timeStamp":1620789094585,"transactions":"Genesis Block","previousHash":"0","nOnce":0,"hash":"6a45f8ed9172af5e4c0248e6a1b02efd7273a5743fcf0bfdf6e0e55ba17d8e5b"}];

    var fileUrl = 'https://api.jsonbin.io/v3/b/609d8c3dda8daf7e8e695aa4';
    this.client.put<any>(fileUrl, data, { headers } ).subscribe((error)=>{
      console.log(error);
    });        
  }

  ngOnInit(): void {
  }

}
