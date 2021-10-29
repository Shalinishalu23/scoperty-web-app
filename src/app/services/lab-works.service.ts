import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/config/app-settings.config';

@Injectable({
  providedIn: 'root',
})
export class LabWorksService {
  constructor(public http: HttpClient, public configuration: Configuration) {}

  getRequestedBy() {
    return this.http.get(this.configuration.getRequestedBy, { observe: 'response' });
  }

  getUpdate() {
    return this.http.get(this.configuration.getUpdate, { observe: 'response' });
  }
  getEngineer() {
    return this.http.get(this.configuration.getEngineer, { observe: 'response' });
  }
  getTechnicians() {
    return this.http.get(this.configuration.getTechnicians, { observe: 'response' });
  }

  getAllLabRequest() {
    return this.http.get(this.configuration.addLabRequest, {
      observe: 'response',
    });
  }

  addLabRequest(values) {
    return this.http.post(this.configuration.addLabRequest, values);
  }
  updateLabRequest(values) {
    return this.http.put(this.configuration.updateLabRequest, values);
  }
  deleteLabRequest(values) {
    return this.http.delete(this.configuration.deleteLabRequest + values);
  }
}
