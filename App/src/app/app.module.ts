import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';
import { CardcodeComponent } from './components/cardcode/cardcode.component';
import { SyntaxHighlightDirective } from './directives/syntax-highlight.directive';
import { HerocontainerComponent } from './components/herocontainer/herocontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MaincontainerComponent,
    CardcodeComponent,
    SyntaxHighlightDirective,
    HerocontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
