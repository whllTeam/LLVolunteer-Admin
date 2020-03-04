import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PageList } from '../../Model/pageList';
import { VolunteerSignInfo } from '../Model/volunteerSignInfo';
import { SignQuery } from '../../Model/Common/volunteerSignQuery';
import { OfficeType } from '../../Model/Office/officeType';
import { CheckState } from '../Model/checkState';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private officeApi = `${environment.apis.volunteerApi}office`;
  constructor(
    private http: HttpClient
  ) { }
  getsignInfoQuery(query: SignQuery): Observable<PageList<VolunteerSignInfo>> {
    const params = Object.keys(query).reduce((param, key) => {
      return param.set(key, query[key]);
    }, new HttpParams());
    return this.http.get(`${this.officeApi}/signInfoQuery`, {
      params
    }).pipe(map(value => {
      return JSON.parse(JSON.stringify(value));
    }));
  }

  getOfficeType(): Observable<OfficeType[]> {
    return this.http.get(`${this.officeApi}/officeType`)
      .pipe(map(value =>
        JSON.parse(JSON.stringify(value)
        )));
  }

  checkOfficeState(parms: CheckState): Observable<boolean> {
    return this.http.post(`${this.officeApi}/checkState`, parms)
      .pipe( map( value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
