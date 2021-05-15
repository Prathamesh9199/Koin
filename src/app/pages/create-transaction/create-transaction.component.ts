import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'blockChain/src/BlockChain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx;
  public keyObject;
  public publicKey;
  public privateKey;  

  constructor(private blockchainService: BlockchainService, private router: Router) { 
    this.keyObject = blockchainService.LoggedInUser.keyObject;
    this.privateKey = blockchainService.LoggedInUser.privateKey;
    this.publicKey = blockchainService.LoggedInUser.publicKey;
    if(blockchainService.LoggedInUser.len == 0)
      this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction(){
    this.newTx.fromAddress = this.publicKey;    
    this.newTx.signTransaction(this.keyObject);    

    this.blockchainService.addTransaction(this.newTx);

    this.newTx = new Transaction();
    
    this.router.navigate(['/']);
  }

}
