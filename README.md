# Frontend CI Pipeline Practice (GitHub Actions + Vite)

This repository is a **practice project** to learn and understand how to implement a **Continuous Integration (CI) pipeline** for a frontend application using **GitHub Actions**.

The focus of this project is not UI complexity, but **how CI works in real-world frontend development**.

## 🛠 Tech Stack

- **Vite** – Frontend build tool
- **React** – UI library
- **TypeScript** – Type safety
- **ESLint** – Code linting
- **Husky** – Pre commit & Pre Push check
- **GitHub Actions** – Continuous Integration (CI)

---

## 🎯 Project Purpose

This project is created to practice:

- Setting up a CI pipeline using GitHub Actions
- Running frontend build pipelines automatically
- Catching lint and build errors early
- Understanding how CI behaves on push and pull requests
- Learning how CI failures block pull request merges

---

## 🔁 CI Workflow Overview

The CI pipeline runs automatically when:

- Code is pushed to the `main` branch
- A pull request is opened or updated

### CI Steps

1. Checkout repository code
2. Setup Node.js environment
3. Install dependencies
4. Run ESLint
5. Build the project

If any step fails, the CI pipeline fails.
