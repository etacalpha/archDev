package tech.archdev.portfolio.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.archdev.portfolio.domains.Project;
import tech.archdev.portfolio.repositories.ProjectRepository;

import java.util.List;


@Service
public class ProjectService {

    private ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getById(Long id){
        return projectRepository.findById(id).get();
    }
}