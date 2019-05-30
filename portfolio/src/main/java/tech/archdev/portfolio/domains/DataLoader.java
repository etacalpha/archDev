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
        for (int i = 0; i <= 9; i++){
            Project project = new Project();
            switch (i){
                case 1:
                    project.setName("Hope Just Found");
                    project.setTech("Java 8, Spring Boot, Spring Hibernate/JPA, Lombok, Jhipster," +
                            " JWT Authentication, h2 in mem database, Postgres database, Angular 7," +
                            " CSS Grid, Bootstrap");
                    project.setDescription("This app is for the Hue Jackson Foundation. It's purpose " +
                            "is to allow individuals/non-profits to list donations they have. Any verified" +
                            "non-profit can search through the listed donations for anything they need. If they" +
                            "find an item for donation they need they can view the contact information for the " +
                            "entity responsible for listing that donation. If the non-profit can not find anything" +
                            "they need, they can then make a listing for donation needed. Non-profits are verified" +
                            "by EIN. All users must create an account that has a verified email address. *** This app " +
                            "is currently under development, the current plan is to deploy on Digital Ocean with Docker.");
                    project.setImageLocation("hopeJustFound.png");
                    project.setDataLocation("https://github.com/etacalpha/HopeJustFound");
                    projectRepository.save(project);
                    break;
                case 2:
                    project.setName("Door To Door Sales App");
                    project.setTech("Java 8, JDBC, Postgres database, JSP, Spring Hibernate, Spring Security");
                    project.setDescription("This app allows door to door sales managers to track salesman by location. " +
                            "Salesman/Supervisors can plot houses and plan routes. House details allow users to track orders " +
                            "and notes from a house call.");
                    project.setImageLocation("doorToDoor.png");
                    project.setDataLocation("https://github.com/etacalpha/techElevatorCapstones/tree/master/team-hat-8");
                    projectRepository.save(project);
                    break;
                case 3:
                    project.setName("BlackJack");
                    project.setTech("Python");
                    project.setDescription("This app is a game to play BlackJack.");
                    project.setImageLocation("blackjack.png");
                    project.setDataLocation("https://github.com/etacalpha/learningApps/tree/master/python/games");
                    projectRepository.save(project);
                    break;
                case 4:
                    project.setName("Gallery From JSON");
                    project.setTech("Angular 7, Bootstrap 4");
                    project.setDescription("This app takes a JSON file and parses it in order to display images, ordered by department. " +
                            "There is a detail view that displays additional information from the JSON file.");
                    project.setImageLocation("CMA.png");
                    project.setDataLocation("https://github.com/etacalpha/CMA-developer-code-test");
                    projectRepository.save(project);
                    break;
                case 5:
                    project.setName("Commandline Vending Machine");
                    project.setTech("Java 8");
                    project.setDescription("This is a command line app that mimics the operation of a vending machine to " +
                            "include giving change with minimal coins.");
                    project.setImageLocation("vendingMachine.png");
                    project.setDataLocation("https://github.com/etacalpha/techElevatorCapstones/tree/master/java-module-1-capstone-steven");
                    projectRepository.save(project);
                    break;
                case 6:
                    project.setName("Arch Dev");
                    project.setTech("Java 11, Spring Boot, Spring Hibernate/JPA, Lombok, h2 in memory database," +
                            "Angular 7, CSS Grid, Bootstrap, Docker, Docker-Compose, NGINX, Node.js, Digital Ocean, Ubuntu/Arch Linux,");
                    project.setDescription("This the app you are using.");
                    project.setImageLocation("archDev.png");
                    project.setDataLocation("https://github.com/etacalpha/archDev");
                    projectRepository.save(project);
                    break;
                case 7:
                    project.setName("Location API");
                    project.setTech("Java 11, Spring Boot, Spring Hibernate/JPA, Lombok, h2 in memory database, Postgres database," +
                            "Swagger-UI, Bootstrap, Docker, Docker-Compose, AWS(EC2), CentOS/Arch Linux,");
                    project.setDescription("This API returns location information about cities in the U.S. There are three " +
                            "endpoints to limit the amount of data returned.");
                    project.setImageLocation("locationapi.png");
                    project.setDataLocation("https://github.com/etacalpha/locationAPI");
                    projectRepository.save(project);
                    break;
                case 8:
                    project.setName("Cities Map");
                    project.setTech("D3js, HTML, CSS, AWS(S3), CentOS/Arch Linux,");
                    project.setDescription("This is a map with all the cities plotted by geolocation using D3js. The " +
                            "information for the cities is pulled from an API.");
                    project.setImageLocation("citiesMap.png");
                    project.setDataLocation("https://github.com/etacalpha/learningApps/tree/master/d3js/US_Cities");
                    projectRepository.save(project);
                    break;
                default:
                    break;
            }
        }
        System.out.println("All projects created!");
    }
}
