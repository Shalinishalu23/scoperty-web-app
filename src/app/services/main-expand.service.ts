import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../config/app-settings.config';

@Injectable({
  providedIn: 'root',
})
export class MainExpandService {
  constructor(public http: HttpClient, public configuration: Configuration) {}

  addMainExpandedForm(values) {
    return this.http.post(this.configuration.addMainExpandedForm, values);
  }
}
