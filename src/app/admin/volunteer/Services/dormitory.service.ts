import { Injectable } from '@angular/core';
import { SignQuery } from '../../Model/Common/volunteerSignQuery';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { PageList } from '../../Model/pageList';
import { VolunteerSignInfo } from '../Model/volunteerSignInfo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DormitoryType } from '../../Model/Dormitory/dormitoryType';
import { CheckState } from '../Model/checkState';

@Injectable({
  providedIn: 'root'
})
export class DormitoryService {

  private dormitoryApi = `${environment.apis.volunteerApi}dormitory`;
  constructor(
    private http: HttpClient
  ) { }
  getsignInfoQuery(query: SignQuery): Observable<PageList<VolunteerSignInfo>> {
    const params = Object.keys(query).reduce((param, key) => {
      return param.set(key, query[key]);
    }, new HttpParams());
    return this.http.get(`${this.dormitoryApi}/signInfoQuery`, {
      params
    }).pipe( map( value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }

  getDormitoryType(): Observable<DormitoryType[]> {
    return this.http.get(`${this.dormitoryApi}/dormitoryType`)
      .pipe(map(value =>
        JSON.parse(JSON.stringify(value))
        ));
  }

  checkOfficeState(parms: CheckState): Observable<boolean> {
    return this.http.post(`${this.dormitoryApi}/checkState`, parms)
      .pipe( map( value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
