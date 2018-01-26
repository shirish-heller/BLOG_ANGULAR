import { Injectable, EventEmitter } from '@angular/core';
import { ErrorModel } from './errors.model';

@Injectable()
export class ErrorsService {
  errorOccured = new EventEmitter<ErrorModel>();

  handleError(error: any) {
    const errorData = new ErrorModel(error.title, (error.err !== null) ? error.err.message : 'Error:   ' + error.title );
    this.errorOccured.emit(errorData);
  }
}
