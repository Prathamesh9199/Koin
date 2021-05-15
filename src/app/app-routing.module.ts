import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutKoinComponent } from './pages/about-koin/about-koin.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { JoinComponent } from './pages/join/join.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { ResetComponent } from './pages/reset/reset.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';

const routes: Routes = [
  {path: '', component: BlockchainViewerComponent},  
  {path: 'settings', component: SettingsComponent},
  {path: 'new/Transaction', component: CreateTransactionComponent},
  {path: 'new/Transaction/Pending', component: PendingTransactionsComponent},  
  {path: 'join', component: JoinComponent},  
  {path: 'koin', component: AboutKoinComponent},  
  {path: 'walletBalance', component: WalletBalanceComponent},  
  {path: 'reset', component: ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
