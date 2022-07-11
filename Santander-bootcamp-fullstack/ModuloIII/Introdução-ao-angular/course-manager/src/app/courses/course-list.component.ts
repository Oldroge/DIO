import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
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
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'xps-8796',
                duration: 120,
                rating: 4.4,
                releaseDate: 'december, 02, 2019',
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: 'assets/images/http.png',
                price: 45.99,
                code: 'lkl-1094',
                duration: 80,
                rating: 4.8,
                releaseDate: 'November, 04, 2019'

            }
        ]
    }





}
