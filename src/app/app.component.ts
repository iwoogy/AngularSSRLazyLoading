import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../src/environments/environment';
import { switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  title = 'angular-ssr';
  remoteData: any = {};

  ngOnInit() {
    const result = true;
    // const url = 'https://api.github.com';
    const url = 'https://staging.backpdm.com/api/front_data_manager/remoteCatalogue.json';

    this.http.get( url ).subscribe(
      data => {
        console.log('data');
        console.log(data);
        this.remoteData = data;
      },
      (error: HttpErrorResponse) => {
        console.log('error');
        console.log(error);
      }
    );
    // this.http.get( url, {} ).pipe(
    //   map(
    //     ( response: Response ) => {
    //       console.log('response');
    //       console.log(response);
    //       return [];
    //     }
    //   )
    // );

    return result;
  }

}
