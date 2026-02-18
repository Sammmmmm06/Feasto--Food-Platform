# 🍽️ Feasto Platform – Food Ordering and Delivery System

## 📌 Project Overview

Feasto Platform is a full-stack food ordering and delivery application that allows users to browse restaurants, place orders, make payments, and track deliveries in real time. It also supports restaurant management, delivery partner operations, loyalty programs, notifications, and reviews.

This system provides a scalable and secure backend using Spring Boot and an interactive frontend built with modern web technologies.

---

## 🚀 Key Features

### 👤 User Features

* User registration and login
* Browse restaurants and menus
* Add items to cart
* Place food orders
* Online payment integration
* View order history
* Submit reviews and ratings
* Receive notifications

### 🍴 Restaurant Features

* Restaurant profile management
* Menu management
* Order management
* View customer reviews

### 🚚 Delivery Partner Features

* Delivery partner registration
* Order assignment
* Delivery status tracking

### 💳 Payment Features

* Secure payment processing
* Payment status tracking

### 🔔 Notification System

* Real-time notifications
* Order status updates

### 🎁 Loyalty System

* Loyalty points management
* Reward tracking

---

## 🛠️ Technologies Used

### Backend (Feasto-be)

* Java 17
* Spring Boot
* Spring Data JPA (Hibernate)
* REST APIs
* MySQL Database
* Maven
* Swagger (API documentation)
* WebSocket (Real-time communication)

### Frontend (Feasto-fe)

* React.js
* JavaScript
* HTML
* CSS
* Vite
* Axios (API integration)

### Tools

* Git & GitHub
* Postman (API Testing)
* Maven
* IntelliJ / VS Code

---

## 📂 Project Structure

```
feasto-platform/
│
├── Feasto-be/                 # Backend (Spring Boot)
│   ├── controller/            # REST Controllers
│   ├── service/               # Business Logic
│   ├── repository/            # Database Layer
│   ├── entity/                # Database Entities
│   ├── dto/                   # Data Transfer Objects
│   ├── config/                # Configuration Files
│   └── pom.xml
│
├── Feasto-fe/                 # Frontend (React)
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup Instructions

### Prerequisites

* Java 17 installed
* MySQL installed
* Maven installed

### Steps

1. Navigate to backend folder:

```
cd Feasto-be
```

2. Configure database in application.properties:

```
spring.datasource.url=jdbc:mysql://localhost:3306/feasto_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
```

3. Run the backend:

```
mvn spring-boot:run
```

Backend will start at:

```
http://localhost:8080
```

---

## 💻 Frontend Setup Instructions

### Prerequisites

* Node.js installed

### Steps

1. Navigate to frontend folder:

```
cd Feasto-fe
```

2. Install dependencies:

```
npm install
```

3. Run frontend:

```
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

## 📡 API Modules

### User APIs

* Register User
* Login User
* Update User
* Get User Details

### Restaurant APIs

* Add Restaurant
* Update Restaurant
* Get Restaurant List

### Order APIs

* Create Order
* Update Order Status
* Get Order Details

### Payment APIs

* Process Payment
* Payment Status

### Review APIs

* Add Review
* View Reviews

### Delivery APIs

* Assign Delivery
* Update Delivery Status

---

## 🔗 API Testing

Use Postman to test APIs:

Example:

```
GET http://localhost:8080/api/users
POST http://localhost:8080/api/orders
```

---

## 📊 System Architecture

Frontend (React) → REST API → Spring Boot Backend → MySQL Database

---

## 🎯 Use Cases

* Online food ordering system
* Restaurant management system
* Delivery tracking system
* Learning full-stack development

---

## 👨‍💻 Author

Sam
GitHub: https://github.com/Sammmmmm06

---

## ⭐ Future Enhancements

* JWT authentication
* Admin dashboard
* Payment gateway integration
* Mobile app integration

---

## 📌 Conclusion

Feasto Platform is a complete food delivery system demonstrating full-stack development using Spring Boot and React. It follows clean architecture, REST principles, and scalable design patterns suitable for real-world applications.
