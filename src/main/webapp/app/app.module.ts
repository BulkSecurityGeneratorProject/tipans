import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { ConstructMgmtSharedModule, UserRouteAccessService } from './shared';
import { ConstructMgmtAppRoutingModule} from './app-routing.module';
import { ConstructMgmtHomeModule } from './home/home.module';
import { ConstructMgmtAdminModule } from './admin/admin.module';
import { ConstructMgmtAccountModule } from './account/account.module';
import { ConstructMgmtEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        ConstructMgmtAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ConstructMgmtSharedModule,
        ConstructMgmtHomeModule,
        ConstructMgmtAdminModule,
        ConstructMgmtAccountModule,
        ConstructMgmtEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class ConstructMgmtAppModule {}
