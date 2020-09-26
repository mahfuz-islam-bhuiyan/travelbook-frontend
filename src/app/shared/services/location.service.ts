import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LocationService {
  private baseUrl = 'location/';

  constructor(private httpClient: HttpClient, @Inject('BASE_API_URL') private baseApiUrl: string) {
  }


}
