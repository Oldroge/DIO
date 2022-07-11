import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";
// Dúvida
@Component({
    // O selector será a tag correspondente no arquivo HTML pai;
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
//                                          Dúvida
export class CourseListComponent implements OnInit {


    courses: Course[] = [];
    // O ngOnInit é um local para colocar o código logo após que a classe for instanciada

    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
        
    }





}
