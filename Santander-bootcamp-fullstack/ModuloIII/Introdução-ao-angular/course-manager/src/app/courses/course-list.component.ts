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

    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    
    _filterBy: string;
    
    constructor(private courseService: CourseService) {
        
    }
    
    // O ngOnInit é um local para colocar o código logo após que a classe for instanciada
    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
        
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }





}
