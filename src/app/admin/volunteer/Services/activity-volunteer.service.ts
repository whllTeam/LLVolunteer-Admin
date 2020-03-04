import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QueryParameters } from '../../Model/Common/queryParams';
import { Observable } from 'rxjs';
import { ActivitySignInfoQuery } from '../Model/activitySignInfoQuery';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PageList } from '../../Model/pageList';

@Injectable({
  providedIn: 'root'
})
export class ActivityVolunteerService {

  private activityApi = `${environment.apis.volunteerApi}activity`;
  constructor(
    private http: HttpClient
  ) { }

  getActivitySignInfoQuery(query: QueryParameters): Observable<PageList<ActivitySignInfoQuery>> {
    return this.http.get(`${this.activityApi}/signInfoQuery`)
      .pipe( map( value => {
        return JSON.parse(JSON.stringify(value));
      }));
  }
}
