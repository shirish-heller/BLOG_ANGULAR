import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { ErrorsComponent } from './errors/errors.component';
import { ErrorsService } from './errors/errors.service';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
