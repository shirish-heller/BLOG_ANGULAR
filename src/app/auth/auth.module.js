import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { authRouting } from "./auth.routes";
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
export { AuthModule };
