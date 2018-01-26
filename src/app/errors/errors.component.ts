import { Component, OnInit } from '@angular/core';
import { ErrorModel } from './errors.model';
import { ErrorsService } from './errors.service';


@Component({
  selector: 'heller-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  constructor(private errorSrvc: ErrorsService) {}
  error: ErrorModel;
  display = 'none';

  onErrorHandled() {
    this.display = 'none';
  }

  ngOnInit() {
      this.errorSrvc.errorOccured
      .subscribe(
        (error: ErrorModel) => {
          this.error = error;
          this.display = 'block';
        }
      );
  }

}
