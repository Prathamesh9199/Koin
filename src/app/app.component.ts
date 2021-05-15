import { Component } from '@angular/core';
import { BlockchainService } from './services/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public blockChainService: BlockchainService, private router: Router){
    
  }

  LogOut(){
    this.blockChainService.LoggedInUser.len = 0;
    this.blockChainService.LoggedInUser.keyObject = '';
    this.blockChainService.LoggedInUser.privateKey = '';
    this.blockChainService.LoggedInUser.publicKey = '';

    this.router.navigate(['/']);
  }

  title = 'peoplePower';       
}
