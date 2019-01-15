package tech.archdev.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableAsync
public class PortfolioApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/email").allowedOrigins("*");
				registry.addMapping("/api/projects").allowedOrigins("*");
				registry.addMapping("/api/projects/1").allowedOrigins("*");
				registry.addMapping("/api/projects/2").allowedOrigins("*");
				registry.addMapping("/api/projects/3").allowedOrigins("*");
				registry.addMapping("/api/projects/4").allowedOrigins("*");
				registry.addMapping("/api/projects/5").allowedOrigins("*");
				registry.addMapping("/api/projects/6").allowedOrigins("*");



			}
		};
	}
}
