import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  public pendingTransactions;    
  public ms;

  constructor(private blockchainService: BlockchainService,
    private router: Router, private client:HttpClient) { 
    this.pendingTransactions = blockchainService.getPendingTransactions();    
    if(blockchainService.LoggedInUser.len == 0)
      this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

  minePendingTransactions(){
    this.blockchainService.minePendingTransactions();

    const headers = {'Content-Type': 'application/json', 'X-Master-key':'$2b$10$HTeiK7Y.T/VhrWVmzJusHuwUkUbDICaPKU4CxMiBZSUIzN9pmGWhK'};    
    const data  = JSON.stringify(this.blockchainService.getBlocks());

    var fileUrl = 'https://api.jsonbin.io/v3/b/609d8c3dda8daf7e8e695aa4';
    this.client.put<any>(fileUrl, data, { headers } ).subscribe((error)=>{
      console.log(error);
    });
    this.ms = "Congratulations !!! You successfully Mined a Block, Mining Reward is added into your Wallet.";
    this.pendingTransactions = 0;
  }

}
