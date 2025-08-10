## 🧪 Week 6 MERN Testing & Debugging — Assignment


![Test Coverage](https://img.shields.io/badge/Coverage-85%25-brightgreen)
![Jest](https://img.shields.io/badge/Tested_with-Jest-blue)
![MongoDB Memory Server](https://img.shields.io/badge/DB-Memory_Server-yellow)


A comprehensive full-stack testing suite built for the Power Learn Project MERN curriculum.  
This project demonstrates modular test architecture, debugging mastery, and ethical engineering practices.

---

### 🧬 Project Structure

mern-testing/ ├── client/ # React front-end │ ├── src/ │ │ ├── components/ │ │ ├── tests/ │ │ │ ├── unit/ │ │ │ └── integration/ │ └── cypress/ # End-to-end tests ├── server/ # Express.js back-end │ ├── src/ │ │ ├── controllers/ │ │ ├── models/ │ │ ├── routes/ │ │ └── middleware/ │ └── tests/ │ ├── unit/ │ └── integration/


---


## 🧪 Testing Strategy

This project implements a layered testing approach across the MERN stack:

- **Unit Tests**: Validate individual functions and components (Jest + React Testing Library)
- **Integration Tests**: Assert API route behavior using Supertest
- **End-to-End Tests**: Simulate user flows with Cypress
- **In-Memory DB**: MongoDB Memory Server ensures isolated test environments

---

## Environment Setup

Create a `.env` file in the `server/` directory based on `.env.example`:


cp server/.env.example server/.env


---

🧰 Tools Used markdown
## 🛠 Tools & Libraries

- **Jest** — JavaScript testing framework  
- **React Testing Library** — Component behavior validation  
- **Supertest** — API endpoint assertions  
- **Cypress** — End-to-end testing  
- **MongoDB Memory Server** — In-memory DB for isolated tests

---

## 📊 Test Coverage Screenshots

Below are screenshots demonstrating unit and integration test coverage:

### ✅ Unit Test Coverage
- `errorHandler.test.js` — 100% coverage
- Screenshot: `screenshots/jest-errorHandler-passed.png`

### ❌ Integration Test Setup
- `posts.test.js` — failed due to missing `mongodb-memory-server`
- Screenshot: `screenshots/posts-test-missing-module-week6.png`

> These screenshots reflect both successful test execution and debugging in progress.


---


## 🧠 Debugging Reflections

Throughout this assignment, I applied debugging techniques such as:

- Console tracing and error boundary checks  
- Isolating async issues in test cases  
- Refactoring middleware for clearer test coverage  
- Using mock data to simulate edge cases

---

### 📈 Assignment Goals

- Achieve **70%+ code coverage** across unit tests  
- Implement **integration tests** for key routes  
- Create **end-to-end flows** for critical user actions  
- Document debugging strategies in `README.md`  
- Include **screenshots** of coverage reports

---

### 🔗 Explore the Repo

- 🐙 GitHub → [week-6-test-debug-assignment-leonardphokane](https://github.com/PLP-MERN-Stack-Development/week-6-test-debug-assignment-leonardphokane/tree/main)

---




<section id="contact">
  <h2>Contact</h2>
   <!-- 👤 Profile Image -->
  <img src="assets/leonard.png" alt="Leonard Phokane" style="width:120px; height:auto; border-radius:8px; margin-bottom:10px;" />
  <p><strong>Author:</strong> Leonard Phokane</p>
  <p><strong>Email:</strong> leonardphokane1@gmail.com</p>
  <p><strong>Phone:</strong> +27 72 350 7514</p>

  <!-- 🌐 Personal Website Link -->
  <p><strong>Personal Website:</strong> 
    <a href="https://leonardphokane.github.io/hackathon-portfolio/" target="_blank">
    
    </a>
  </p>
</section>

---

### 🧠 Reflection

> “Testing isn’t just validation — it’s storytelling through resilience. Every bug fixed is a lesson learned.” — Leonard Phokane

--


## 🏷 Community Tags

`#PowerLearnProject` `#PLPCommunity` `#1MillionDevs4Africa`





