Companies Directory – React Frontend Assignment

A simple, responsive React application that displays a list of companies with filtering, sorting, and pagination.
The app fetches company data from a mock API (companies.json) and presents it in a clean UI.

 Live Demo

🔗 https://companies-directory-mu.vercel.app

Features

Search companies by name

Filter by location

Filter by industry

Sort by company name (A–Z / Z–A)

Pagination with dynamic page size (5 / 10 / 20)

Fully responsive layout

Clean UI built using React + Vite

Data loaded from a mock API (JSON)

 Tech Stack

React.js

Vite

JavaScript (ES6)

CSS (custom styling)

Vercel (Deployment)

 Project Structure
src/
 ├── components/
 │    ├── CompanyTable.jsx
 │    ├── CompanyFilters.jsx
 │    └── Pagination.jsx
 ├── hooks/
 │    └── useCompanies.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
public/
 └── companies.json  (mock API)

 How to Run Locally
# Clone the repository
git clone https://github.com/AtulDwibhashi/companies-directory.git

# Navigate into the folder
cd companies-directory

# Install dependencies
npm install

# Start development server
npm run dev


App will run at:

 http://localhost:5173/