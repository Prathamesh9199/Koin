import { Injectable } from '@angular/core';
import { BlockChain } from 'blockChain/src/BlockChain';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {    
  
  public BlockchainInstance = new BlockChain();      
  public totalPendingTransactions;

  public LoggedInUser = {
    len: 0,
    keyObject: '',
    publicKey: '',
    privateKey: '',

  };

  constructor() {                 
    this.BlockchainInstance.difficulty = 1;
  }  

  storeNewChain(newchain){
    this.BlockchainInstance.chain = newchain;    
    this.BlockchainInstance.miningReward = (10/ (2 ** (Math.trunc((newchain.length + 1) / 4))));
  }

  getBlocks(){
    return this.BlockchainInstance.chain;    
  }

  addTransaction(tx){
    this.BlockchainInstance.addTransaction(tx);
  }

  getPendingTransactions(){        
    return this.BlockchainInstance.pendingTransactions;
  }

  minePendingTransactions(){
    this.BlockchainInstance.minePendingTransactions(
      this.LoggedInUser.publicKey
    );
  }

  validLogin(privateKey, publicKey){    
    return this.BlockchainInstance.isValidPublicPrivate(privateKey, publicKey);
  }

  keyObject(privateKey){
    return this.BlockchainInstance.keyObject(privateKey);
  }

  walletBalance(){
    return this.BlockchainInstance.balanceOfAccount(this.LoggedInUser.publicKey);
  }
}
