import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QueryParameters } from '../../Model/Common/queryParams';
import { ActivitySignInfo } from '../Model/activitySignInfo';
import { PageList } from '../../Model/pageList';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityOptService {

  activityApi = `${environment.apis.volunteerApi}activity`;
  constructor(private http: HttpClient) { }

  getActivitySignInfoTable(query: QueryParameters): Observable<PageList<ActivitySignInfo>> {
    const params = Object.keys(query).reduce((param, key) => {
      return param.set(key, query[key]);
    }, new HttpParams());
    return this.http.get(`${this.activityApi}/activitySignInfo`, {
      params
    }).pipe( map( value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
