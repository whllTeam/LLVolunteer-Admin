import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrganizationInfo } from '../Model/Organizations/organizationInfo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PageList } from '../Model/pageList';
import { QueryParameters } from '../Model/Common/queryParams';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private orgInfoApi = `${environment.apis.volunteerApi}organization`;

  constructor(
    private http: HttpClient
  ) { }

  getOrgInfo(): Observable<OrganizationInfo[]> {
    return this.http.get(`${this.orgInfoApi}`)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
  getOrgInfoQuery(query: QueryParameters): Observable<PageList<OrganizationInfo>> {
    const params = Object.keys(query).reduce((param, key) => {
      return param.set(key, query[key]);
    }, new HttpParams());
    return this.http.get(`${this.orgInfoApi}/query`, {
      params
    }).pipe(map( value => {
      return JSON.parse(JSON.stringify(value));
    }));
  }
    delOrgInfo(id: number, type: number) {
      return this.http.delete(`${this.orgInfoApi}/${id}/${type}`)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
  modifyOrgInfo(parms: OrganizationInfo): Observable<boolean> {
    return this.http.put(`${this.orgInfoApi}/${parms.id}`, parms)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
  addOrgInfo(parms: OrganizationInfo): Observable<boolean> {
    return this.http.post(`${this.orgInfoApi}`, parms)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
