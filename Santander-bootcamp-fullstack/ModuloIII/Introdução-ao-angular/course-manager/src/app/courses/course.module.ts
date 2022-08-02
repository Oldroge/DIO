import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { replacePipe } from "../shared/pipe/replace.pipe";
import { starModule } from "../shared/component/star/star.module";
import { courseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { appPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponent,
        courseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        starModule,
        appPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
              },
              {
                path: 'courses/info/:id', component: courseInfoComponent
              },
        ])
    ]
})

export class courseModule {

}