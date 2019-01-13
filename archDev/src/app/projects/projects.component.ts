import { Component, OnInit } from '@angular/core';
import {Projects} from "@angular/cli/lib/config/schema";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();

  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
