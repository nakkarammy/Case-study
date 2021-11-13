import { Component, OnInit } from '@angular/core';
import { StudentMarksService } from 'src/app/Servieces/student-marks.service';

@Component({
  selector: 'app-students-marks',
  templateUrl: './students-marks.component.html',
  styleUrls: ['./students-marks.component.css']
})
export class StudentsMarksComponent implements OnInit {

  public students: any = [];
  public studentsWithOutSort: any = [];
  public sortOrder: number = 0;
  public prevColumn: string = '';

  constructor(private studentMarksService: StudentMarksService) { 

    this.studentMarksService.getStdentMarks().subscribe(value=>{

      this.students = value;
      this.studentsWithOutSort = [...this.students];      

    })

  }

  ngOnInit(): void {
  }

  sort(column: any){

    if(this.prevColumn === column){
      this.increaseSortOrder();
    }
    else{
      this.sortOrder = 1
    }
    
    if(this.sortOrder === 3){
      this.students = this.studentsWithOutSort;
    }
    else{
      this.students.sort((a:any, b:any) => {
        if(this.sortOrder == 1){
          return <any>a[column] - <any>b[column];
        }
        else{
          return <any>b[column] - <any>a[column];
        }
      });  
    }

    this.prevColumn = column;

  }

  increaseSortOrder(){

    if(this.sortOrder != 3 ){
      this.sortOrder += 1;
    }
    else{
      this.sortOrder = 1;
    }

  }

}

