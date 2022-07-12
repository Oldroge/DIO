import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})

export class courseInfoComponent implements OnInit {
    
    courseId: number;
    
    constructor(private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
        // Outra maneira de se fazer a mesma busca
        // this.courseId = this.activatedRoute.snapshot.params['id'];
    }
}