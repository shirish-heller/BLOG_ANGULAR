import { Component, OnInit } from '@angular/core';
import { ErrorModel } from './errors.model';
import { ErrorsService } from './errors.service';
var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent(errorSrvc) {
        this.errorSrvc = errorSrvc;
    }
    ErrorsComponent.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    ErrorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorSrvc.errorOccured
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    return ErrorsComponent;
}());
export { ErrorsComponent };
