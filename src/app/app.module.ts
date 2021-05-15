import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { JoinComponent } from './pages/join/join.component';
import { AboutKoinComponent } from './pages/about-koin/about-koin.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';
import { ResetComponent } from './pages/reset/reset.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    BlockViewComponent,
    TransactionsTableComponent,
    SettingsComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent,
    JoinComponent,
    AboutKoinComponent,
    WalletBalanceComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
