package tech.archdev.portfolio.web;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.archdev.portfolio.domains.Project;
import tech.archdev.portfolio.services.ProjectService;


@RestController
@CrossOrigin(origins = "http://archdev.tech")
@RequestMapping("/api/projects")
public class ProjectResource {

    @Autowired
    ProjectService projectService;

    @GetMapping("/")
    public List<Project> getProjects() {
        System.out.println("The projects api was hit");
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getOne(@PathVariable long id) {
        System.out.println("The projects/id was hit");
        return projectService.getById(id);
    }
}
