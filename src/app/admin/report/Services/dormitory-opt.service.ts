import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DormitoryType } from '../../Model/Dormitory/dormitoryType';
import { map } from 'rxjs/operators';
import { DormitoryTime } from '../../Model/Dormitory/dormitoryTime';
import { DormitoryWeek } from '../../Model/Dormitory/dormitoryWeek';
import { CheckStateInfoRequest } from '../Model/CheckStateInfoRequest';
import { CheckStateInfo } from '../Model/checkStateInfo';

@Injectable({
  providedIn: 'root'
})
export class DormitoryOptService {

  api = `${environment.apis.volunteerApi}dormitory/`;
  constructor(private http: HttpClient) { }

  getDormitoryType(): Observable<DormitoryType[]> {
    return this.http.get(`${this.api}dormitoryType`)
      .pipe(map(value =>
        JSON.parse(JSON.stringify(value))
        ));
  }

  getDormitoryTime(): Observable<DormitoryTime[]> {
    return this.http.get(`${this.api}timeDay`)
      .pipe(map(value =>
        JSON.parse(JSON.stringify(value)
      )));
  }

  getDormitoryWeek(): Observable<DormitoryWeek[]> {
    return this.http.get(`${this.api}week`)
      .pipe(map( value =>
        JSON.parse(JSON.stringify(value)
        )));
  }

  getDormitoryCheckTableInfo(query: CheckStateInfoRequest): Observable<CheckStateInfo[]> {
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
