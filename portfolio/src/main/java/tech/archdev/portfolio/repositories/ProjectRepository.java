package tech.archdev.portfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.archdev.portfolio.domains.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}
