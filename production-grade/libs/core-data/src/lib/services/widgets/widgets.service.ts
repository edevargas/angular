import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  model = 'widgets';

  constructor(private http: HttpClient, @Inject('apiEndpoint') private apiEndpoint: string) {}

  all() {
    return this.http.get<Widget[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Widget>(this.getUrlWithId(id));
  }

  create(widget: Widget) {
    return this.http.post<any>(this.getUrl(), widget);
  }

  update(widget: Widget) {
    return this.http.put(this.getUrlWithId(widget.id), widget);
  }

  delete(widget: Widget) {
    return this.http.delete(this.getUrlWithId(widget.id));
  }

  private getUrl() {
    return `${this.apiEndpoint}/${this.model}`;
  }

  private getUrlWithId(id: string | null) {
    return `${this.getUrl()}/${id}`;
  }
}
