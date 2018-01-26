import { Injectable, EventEmitter } from '@angular/core';
import { ErrorModel } from './errors.model';
var ErrorsService = /** @class */ (function () {
    function ErrorsService() {
    }
    ErrorsService.prototype.handleError = function (error) {
        var errorData = new ErrorModel(error.title, (error.err !== null) ? error.err.message : 'Error:   ' + error.title);
        this.errorOccured.emit(errorData);
    };
    return ErrorsService;
}());
export { ErrorsService };
