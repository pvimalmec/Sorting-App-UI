import { Injectable,AfterViewInit, ViewChild } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class SortService {


  constructor(private http:Http) { }
  

  randomnumberurl :any = "http://localhost:8080/sorting-app-0.1.0/randomnumbers";
  sortingurl :any = "http://localhost:8080/sorting-app-0.1.0/sort";
  historyurl :any = "http://localhost:8080/sorting-app-0.1.0/history";
 

  getRandomNumbers() : any {
    return this.http.get(this.randomnumberurl).
    map((res:Response) => res.json())
    
  }

  sortnumbers(numbers) : any {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   return this.http.post(this.sortingurl, 
    {unorderedList:numbers} ).
    map((res:Response) => res.json())
  }

  getHistoryInfo() : any {
    
    return this.http.get(this.historyurl).
    map((res:Response) => res.json())
    
  }

  

}
