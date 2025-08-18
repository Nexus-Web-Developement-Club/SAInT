# SAInT
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Nexus-Web-Developement-Club/SAInT)

This repository contains the source code for the official website of **SAInT (Student Association of Information Technology)**, developed by the Nexus Web Development Club. The application serves as a comprehensive dashboard to showcase the association's activities, member clubs, updates, and gallery.

## ✨ Features

*   **Centralized Dashboard:** A responsive single-page application with a persistent sidebar for seamless navigation between sections.
*   **Club Directory:** An organized view of all clubs under the SAInT umbrella, such as Nexus, Cyberbort, AI Club, and more.
*   **Detailed Activity View:** Each club has a dedicated section listing its activities, which can be filtered by academic year.
*   **Member Showcase:** A page dedicated to displaying the profiles of club members, including their roles and links to their GitHub and LinkedIn profiles.
*   **Dynamic Sections:** Separate, detailed pages for general updates, activities, and a photo gallery.
*   **Modern Tech Stack:** Built with React, TypeScript, and Vite for a fast and modern development experience.
*   **Custom Styling:** A clean and visually appealing user interface styled with Tailwind CSS.

## 🛠️ Tech Stack

*   **Framework:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Linting:** [ESLint](https://eslint.org/)

## 🚀 Getting Started

To run this project locally, follow the steps below.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or later) installed on your system.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Nexus-Web-Developement-Club/SAInT.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd SAInT
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:
```sh
npm run dev
```
The application will be available at `http://localhost:5173` (or the next available port).

## 📂 Project Structure

The main source code is located in the `src` directory.

```
└── src/
    ├── App.tsx             # Main app component, handles routing logic
    ├── main.tsx            # Application entry point
    ├── index.css           # Tailwind CSS directives
    └── components/         # Reusable React components
        ├── Sidebar.tsx     # Navigation sidebar
        ├── LandingPage.tsx # Home page
        ├── Clubs.tsx       # Component for displaying all clubs and their activities
        ├── Activities.tsx  # General activities page
        ├── Updates.tsx     # News and announcements page
        ├── Members.tsx     # Club members list
        └── Gallery.tsx     # Photo gallery
```

## 📜 Available Scripts

The `package.json` file includes the following scripts:

*   `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
*   `npm run build`: Compiles and bundles the application for production.
*   `npm run lint`: Lints the source code using ESLint.
*   `npm run preview`: Serves the production build locally to preview it.