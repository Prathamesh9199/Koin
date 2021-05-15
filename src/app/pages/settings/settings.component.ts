import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public blockchain;
  

  constructor(private blockchainService: BlockchainService, private router: Router) { 
    this.blockchain = blockchainService.BlockchainInstance;
    if(blockchainService.LoggedInUser.len == 0)
      this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
