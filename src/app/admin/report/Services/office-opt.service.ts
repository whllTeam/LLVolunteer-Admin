import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OfficeType } from '../../Model/Office/officeType';
import { map } from 'rxjs/operators';
import { OfficeTime } from '../../Model/Office/officeTime';
import { OfficeyWeek } from '../../Model/Office/officeWeek';
import { CheckStateInfoRequest } from '../Model/CheckStateInfoRequest';
import { CheckStateInfo } from '../Model/checkStateInfo';

@Injectable({
  providedIn: 'root'
})
export class OfficeOptService {

  private api = `${environment.apis.volunteerApi}office/`;
  constructor(private http: HttpClient) { }

  getOfficeType(): Observable<OfficeType[]> {
    return this.http.get(`${this.api}officeType`)
      .pipe(map(value =>
        JSON.parse(JSON.stringify(value)
      )));
  }

  getOfficeTime(): Observable<OfficeTime[]> {
    return this.http.get(`${this.api}timeDay`)
      .pipe(map(value =>
        JSON.parse(JSON.stringify(value)
      )));
  }

  getOfficeWeek(): Observable<OfficeyWeek[]> {
    return this.http.get(`${this.api}week`)
      .pipe(map( value =>
        JSON.parse(JSON.stringify(value)
        )));
  }
  getOfficeCheckTableInfo(query: CheckStateInfoRequest): Observable<CheckStateInfo[]> {
    const params = Object.keys(query).reduce((param, key) => {
      return param.set(key, query[key]);
    }, new HttpParams());
    return this.http.get(`${this.api}checkStateInfo`, {
      params
    })
      .pipe( map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
