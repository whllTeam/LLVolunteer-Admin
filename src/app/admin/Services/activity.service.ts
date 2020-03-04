import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import { PageList } from '../Model/pageList';
import { ActivityForOrganization } from '../Model/Organizations/activityForOrganization';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QueryParameters } from '../Model/Common/queryParams';
import { map } from 'rxjs/operators';
import { UploadFileInfo } from '../upload-file/Model/uploadFileInfo';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activityApi = `${environment.apis.volunteerApi}activity`;
  constructor(
    private http: HttpClient
  ) { }

  getActivities(query: QueryParameters): Observable<PageList<ActivityForOrganization>> {
    const params = Object.keys(query).reduce((param, key) => {
      return param.set(key, query[key]);
    }, new HttpParams());
    return this.http.get(`${this.activityApi}`, {
      params
    }).pipe(map(value => {
      return JSON.parse(JSON.stringify(value));
    }));
  }

  delActivity(id: number, type: number): Observable<boolean> {
    return this.http.delete(`${this.activityApi}/${id}/${type}`)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }

  addActivity(params: ActivityForOrganization): Observable<boolean> {
    return this.http.post(`${this.activityApi}`, params)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }

  modifyActivity(params: ActivityForOrganization): Observable<boolean> {
    return this.http.put(`${this.activityApi}/${params.id}`, params)
      .pipe(map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }

  getFileList(id: number): Observable<UploadFileInfo[]> {
    return this.http.get(`${this.activityApi}/file/${id}`)
      .pipe( map(value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
