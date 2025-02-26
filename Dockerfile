# Use a Maven image with Java 23 to build the Spring Boot app
FROM eclipse-temurin:21-jdk AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml and maven wrapper
COPY mvnw ./
COPY .mvn/ .mvn/

# Ensure the maven wrapper is executable
RUN chmod +x mvnw

# Copy the pom.xml and install dependencies
COPY pom.xml ./
RUN ./mvnw dependency:go-offline

# Copy the source code and build the application
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Use a Java 23 runtime image to run the application
FROM eclipse-temurin:21-jre

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
