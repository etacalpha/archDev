FROM openjdk:11-jre-slim
COPY ./target/portfolio-1.0.jar /usr/src/portfolio/
WORKDIR /usr/src/portfolio
EXPOSE 8080
CMD [ "java", "-jar", "portfolio-1.0.jar"]