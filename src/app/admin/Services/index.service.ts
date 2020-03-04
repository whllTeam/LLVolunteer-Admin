import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QueryParameters } from '../Model/Common/queryParams';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageInfo } from '../Model/Essay/pageInfo';
import { PageList } from '../Model/pageList';
import { map } from 'rxjs/operators';
import { OrganizationInfo } from '../Model/Organizations/organizationInfo';
import { UploadFileInfo } from '../upload-file/Model/uploadFileInfo';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private pageInfoApi = `${environment.apis.volunteerApi}pageInfo/`;

  constructor(
    private http: HttpClient
  ) { }

  getPageInfo(query: QueryParameters): Observable<PageList<PageInfo>> {
    const params = Object.keys(query).reduce((param, key) => {
      return param.set(key, query[key]);
    }, new HttpParams());
    return this.http.get(`${this.pageInfoApi}`, {
      params
    }).pipe(map(value =>
      JSON.parse(JSON.stringify(value)))
    );
  }
  modifyPageInfo(parms: PageInfo): Observable<boolean> {
    return this.http.put(`${this.pageInfoApi}${parms.id}`, parms)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
  addPageInfo(parms: PageInfo): Observable<boolean> {
    return this.http.post(`${this.pageInfoApi}`, parms)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
  delPage(id: number, type: number): Observable<boolean> {
    return this.http.delete(`${this.pageInfoApi}${id}/${type}`)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
  getFileList(id: number): Observable<UploadFileInfo[]> {
    return this.http.get(`${this.pageInfoApi}file/${id}`)
      .pipe( map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
