package tech.archdev.portfolio.domains;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import tech.archdev.portfolio.repositories.ProjectRepository;

@Component
public class DataLoader implements ApplicationRunner {

    private ProjectRepository projectRepository;

    @Autowired
    public DataLoader(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public void run(ApplicationArguments args) {
        for (int i = 0; i <= 6; i++){
            Project project = new Project();
            switch (i){
                case 1:
                    project.setName("Hope Just Found");
                    project.setDescription("This is the project description!");
                    project.setImageLocation("hopeJustFound.png");
                    projectRepository.save(project);
                    System.out.println("A new project was created!");
                    break;
                case 2:
                    project.setName("Door To Door Sales App");
                    project.setDescription("This is the project description!");
                    project.setImageLocation("doorToDoor.png");
                    projectRepository.save(project);
                    System.out.println("A new project was created!");
                    break;
                case 3:
                    project.setName("BlackJack");
                    project.setDescription("This is the project description!");
                    project.setImageLocation("blackjack.png");
                    projectRepository.save(project);
                    System.out.println("A new project was created!");
                    break;
                case 4:
                    project.setName("Gallery From JSON");
                    project.setDescription("This is the project description!");
                    project.setImageLocation("CMA.png");
                    projectRepository.save(project);
                    System.out.println("A new project was created!");
                    break;
                case 5:
                    project.setName("Commandline Vending Machine");
                    project.setDescription("This is the project description!");
                    project.setImageLocation("vendingMachine.png");
                    projectRepository.save(project);
                    System.out.println("A new project was created!");
                    break;
                case 6:
                    project.setName("Arch Dev");
                    project.setDescription("This is the project description!");
                    project.setImageLocation("archDev.png");
                    projectRepository.save(project);
                    System.out.println("A new project was created!");
                    break;
                default:
                    break;
            }
        }
    }
}
