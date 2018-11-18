package tech.archdev.portfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.archdev.portfolio.domains.About;

@SuppressWarnings("unused")
@Repository
public interface AboutRepository extends JpaRepository <About, Long> {
}
