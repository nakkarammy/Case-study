import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentMarksService {

  constructor(private httpClient: HttpClient) { }

  public getStdentMarks():Observable<any>{
    return this.httpClient.get('/assets/data/student-marks.json');
  }

}
