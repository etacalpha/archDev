package tech.archdev.portfolio.web;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import tech.archdev.portfolio.domains.Project;
import tech.archdev.portfolio.services.ProjectService;


@RestController
@CrossOrigin(origins = "http://localhost:80")
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
