import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../constants/api';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = "courses"


  constructor(private http: HttpClient) { }

  private getUrl() {
    return `${API.local}/${this.model}`
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl}/${id}`
  }

  all() {
    return this.http.get(this.getUrl())
  }

  find(id: string) {
    return this.http.get(this.getUrlWithId(id))
  }

  create(course: Course) {
    return this.http.post(this.getUrl(), course)
  }

  update(course: Course) {
    return this.http.put(this.getUrlWithId(course.id), course)
  }

  delete(id: string) {
    return this.http.delete(this.getUrlWithId(id))
  }

}
