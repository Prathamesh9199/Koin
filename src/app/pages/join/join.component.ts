import { Component, Inject, OnInit } from '@angular/core';
import { ec } from 'elliptic';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  providers:[{provide: 'Window', useValue: window}]
})
export class JoinComponent implements OnInit {

  public link;
  public download;
  public downloadStyle = "display: none";
  public createStyle = "display: block";

  public createWallet = "display: none";
  public joinWallet = "display: block";

  public userWalletAddress;
  public userWalletPassword;

  public ms = '';
  
  constructor(private blockChainInstance: BlockchainService, private router: Router,
    @Inject('Window') private window: Window) {     
        
  }

  join(){
    const e = new ec('secp256k1');            
    const res = this.blockChainInstance.validLogin(this.userWalletPassword, this.userWalletAddress);    
    if(res === true){
      this.blockChainInstance.LoggedInUser.len = 1;
      this.blockChainInstance.LoggedInUser.keyObject = this.blockChainInstance.keyObject(this.userWalletPassword);
      this.blockChainInstance.LoggedInUser.publicKey = this.userWalletAddress;
      this.blockChainInstance.LoggedInUser.privateKey = this.userWalletPassword;

      this.router.navigate(['/']);
    }
    else{
      this.ms = "Incorrect Wallet Address or Wallet Password";
    }
  }

  newWallet(){
    this.joinWallet = "display: none"; 
    this.createWallet = "display: block";        
  }

  donwloadWalletKeys(){  
    const EC = new ec('secp256k1');
    const key = EC.genKeyPair();
    const walletAddress = key.getPublic('hex');
    const walletPassword = key.getPrivate('hex');

    var doc = new jsPDF('landscape', 'pt', 'a4');
    doc.setFontSize(30);
    doc.text('Welcome to Koin !!!', 20, 40);
    doc.text('--------------------------------------------------------------------', 20, 60);

    doc.setFontSize(20);    
    doc.text('1) Use your wallet Address to Receive Payment', 20, 90);
    doc.text('2) DO NOT DISCLOSE, LOOSE or COMPROMISE with your Wallet Password', 20, 110);
    doc.text('--------------------------------------------------------------------', 20, 130);

    doc.setFontSize(10);    
    doc.text('Wallet Address  : ' + walletAddress, 20, 160);
    doc.text('Wallet Password  : ' + walletPassword, 20, 190);

    doc.setFontSize(20);    
    doc.text('--------------------------------------------------------------------', 20, 210);
    doc.text('Use your Wallet Address & Wallet Password to Access Koin\'s Wallet', 20, 230);    


    doc.save('Koin Wallet Keys.pdf');    
    this.createStyle = "display: none";

    this.blockChainInstance.LoggedInUser.len = 1;
    this.blockChainInstance.LoggedInUser.keyObject = key;
    this.blockChainInstance.LoggedInUser.publicKey = walletAddress;
    this.blockChainInstance.LoggedInUser.privateKey = walletPassword;

    this.router.navigate(['/']);
  }  


  ngOnInit(): void {
  }

}
