import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.scss']
})
export class WalletBalanceComponent implements OnInit {
  public walletAddress;
  public transactions: any = [];
  public walletBalance;
  public blocks;

  constructor(public blockchainInstance: BlockchainService, private router: Router) {
    if(blockchainInstance.LoggedInUser.len == 0)
      this.router.navigate(['/']);

    this.walletAddress = blockchainInstance.LoggedInUser.publicKey;
    this.walletBalance = blockchainInstance.walletBalance();
    
    this.blocks = blockchainInstance.getBlocks();
    this.blocks.forEach(block => {
      Array.prototype.forEach.call(block.transactions, transaction => {
        if(transaction.fromAddress == this.walletAddress || transaction.toAddress == this.walletAddress)
          this.transactions.push(transaction);
      });
    });
  }    

  ngOnInit(): void {
  }

}
