# Library Management System

This project is a Library Management System built using Vaadin and Spring Boot. It allows users to manage books in a library, including adding new books, editing existing ones, and issuing books.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get a local copy up and running, follow these steps (Spring boot + Vaadin):

### Prerequisites

- Java 21
- Maven 3.6+

### Clone the Repository

```sh
git clone https://github.com/bhupendrasambare/Library-Vaadin-Spring-boot.git
cd Library-Vaadin-Spring-boot
```

### Development Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies and build the project:
   ```sh
   mvn clean install
   ```

3. Run the application:
   ```sh
   mvn spring-boot:run
   ```

### Production Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies and build the project:
   ```sh
   mvn clean install -Pproduction
   ```

3. Run the application:
   ```sh
   java -jar ./target/library-1.0-SNAPSHOT.jar
   ```

## Usage

Open your browser and navigate to `http://localhost:8080` to access the application.

### Features

- Add new books to the library
- Add/Edit/Delete students

### Technologies Used

- **Backend**: Spring Boot, Java 17, Hibernate, MySQL
- **Frontend**: Vaadin, React.js, TypeScript, Bootstrap 5
- **Others**: Maven, npm, Webpack

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
