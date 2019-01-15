import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";
import {Project} from "./models/project";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl = 'http://localhost:8080/api/projects';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ProjectService: fetched projects');
    return this.http.get<Project[]>(this.projectUrl).pipe(
      tap(_ => this.log('fetched projects')),
      catchError(this.handleError('getProjects', []))
    );
  }
  getProject(id: number): Observable<Project> {
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(_ => this.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getProject id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`ProjectService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
