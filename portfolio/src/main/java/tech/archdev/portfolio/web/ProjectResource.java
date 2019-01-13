package tech.archdev.portfolio.web;


import org.hibernate.annotations.Any;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.archdev.portfolio.domains.Project;
import tech.archdev.portfolio.services.ProjectService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectResource {

    @Autowired
    ProjectService projectService;

    @GetMapping("/api/projects")
    public List<Project> getProjects() {
        System.out.println("The projects api was hit");
        return projectService.getAllProjects();
    }


    @GetMapping("/api/projects/{id}")
    public Project getOne(@PathVariable long id) {
        System.out.println("The projects/id was hit");
        return projectService.getById(id);
    }
}
