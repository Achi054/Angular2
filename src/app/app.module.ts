import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { SizeComponent } from './size/size.component';
import { HighlightDirective } from './highlight.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    SizeComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    HeroFormComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
