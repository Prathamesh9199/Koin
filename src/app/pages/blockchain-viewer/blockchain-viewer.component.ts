import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {

  public blocks: any = [];
  public selectedBlock: any = [];  
  public storedChain: any;
  

  constructor(private blockchainService: BlockchainService, private router: Router, private client: HttpClient) {             
    const headers = {'X-Master-key':'$2b$10$HTeiK7Y.T/VhrWVmzJusHuwUkUbDICaPKU4CxMiBZSUIzN9pmGWhK'};    
    var fileUrl = 'https://api.jsonbin.io/v3/b/609d8c3dda8daf7e8e695aa4/latest';

    this.client.get<any>(fileUrl, { headers } ).subscribe(
      (data)=>{
        var temp = data;        
         this.storedChain = temp.record;
         if(this.storedChain != []){
            blockchainService.storeNewChain(this.storedChain);
            this.blocks = this.blockchainService.getBlocks();
            this.selectedBlock = this.blocks[0];
         }
         else{
           alert('asdf');
          this.blocks = this.blockchainService.getBlocks();
          this.selectedBlock = this.blocks[0];
         }
      },
      (error)=>{
      console.log(error);
    });
    if(this.blockchainService.LoggedInUser.len == 0)
      this.router.navigate(['/']);
  }  

  ngOnInit(): void {    
  }

  showTransactions(block){        
    this.selectedBlock = block;    
  }
}
