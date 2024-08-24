
# **Blue Sky Digitals**

**Blue Sky Digitals** is a modern, interactive website designed to showcase digital services such as web development, graphic designing, and social media marketing. The website offers a clean and engaging user experience with smooth animations and a responsive layout.

---

## **Table of Contents**

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
   - [Features and Functionalities](#features-and-functionalities)
3. [Tech Stack](#tech-stack)
4. [Setup Instructions](#setup-instructions)
   - [Local Setup](#local-setup)
   - [Environment Setup](#environment-setup)
5. [Build and Deployment Process](#build-and-deployment-process)
   - [Build the Website](#build-the-website)
   - [Deploy the Website](#deploy-the-website)
   - [CI/CD Setup](#cicd-setup)
6. [Usage Instructions](#usage-instructions)
   - [Managing the Website](#managing-the-website)
   - [Key Pages and User Flows](#key-pages-and-user-flows)
7. [Customization/Extensibility](#customizationextensibility)
   - [Modifying Existing Content](#modifying-existing-content)
   - [Adding New Features](#adding-new-features)
   - [Customizing Existing Components](#customizing-existing-components)
   - [Extending Functionality](#extending-functionality)
8. [Common Issues and Solutions](#common-issues-and-solutions)
9. [References](#references)

---

## **1. Introduction**

Welcome to the Blue Sky Digitals project! This README provides detailed information on the project's features, tech stack, setup instructions, build and deployment processes, and more.

---

## **2. Project Overview**

### **2.1 Features and Functionalities**

- **Frontend:**
  - **Interactive Design:** Engaging UI with animations and responsive layout.
  - **Service Sections:** Detailed descriptions of digital services with clickable service cards.
  - **Portfolio Carousel:** Displays previous work or projects.
  - **Contact Form:** Allows users to submit inquiries or requests.
  - **Social Media Links:** Connects to platforms like Facebook, Instagram, and GitHub.

- **Backend:**
  - **Form Submission Handling:** Manages form data submission.

- **Third-Party Services, Libraries, or APIs:**
  - **Axios:** For making HTTP requests.
  - **Formspree:** For handling form submissions.
  - **Tailwind CSS:** For styling with a utility-first CSS framework.
  - **React Router:** For client-side routing.

---

## **3. Tech Stack**

- **Languages:** JavaScript (ES6+), HTML, CSS
- **Frameworks and Libraries:**
  - **React:** JavaScript library for building user interfaces.
  - **Tailwind CSS:** Utility-first CSS framework.
  - **Vite:** Build tool for faster development.
  - **PostCSS:** Tool for transforming CSS with JavaScript plugins.
- **Hosting/Deployment Platforms:**
  - **Vercel:** For deployment and hosting of the website.

---

## **4. Setup Instructions**

### **4.1 Local Setup**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Okashanadeem/blue-sky-digitals
   cd blue-sky-digitals
   ```

2. **Install Dependencies:**
   ```bash
   yarn install # or npm install
   ```

3. **Run the Development Server:**
   ```bash
   yarn dev # or npm run dev
   ```

4. **Open the Application:**
   - Navigate to `http://localhost:3000` in your web browser.

### **4.2 Environment Setup**

- **Create a `.env` File:**
  - Add environment-specific variables, for example:
    ```
    REACT_APP_API_URL=https://api.example.com
    ```

---

## **5. Build and Deployment Process**

### **5.1 Build the Website**

1. **Build Command:**
   ```bash
   yarn build # or npm run build
   ```

2. **Verify the Build:**
   - Check the `dist` or `build` directory for the built files.

### **5.2 Deploy the Website**

- **Vercel Deployment:**
  1. Push your code to GitHub.
  2. Connect your GitHub repository to Vercel.
  3. Vercel will automatically build and deploy the project.

- **Netlify Deployment:**
  1. Push your code to GitHub.
  2. Connect your GitHub repository to Netlify.
  3. Configure build settings and deploy.

### **5.3 CI/CD Setup**

- **GitHub Actions Example:**
  ```yaml
  name: Deploy

  on:
    push:
      branches:
        - main

  jobs:
    build:
      runs-on: ubuntu-latest

      steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '16'

        - name: Install dependencies
          run: yarn install

        - name: Build
          run: yarn build

        - name: Deploy
          uses: Vercel/action@v2
          with:
            vercel-token: ${{ secrets.VERCEL_TOKEN }}
            vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
            vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
  ```

---

## **6. Usage Instructions**

### **6.1 Managing the Website**

- **Content Management:** Update text and images by modifying React components in the `src/components` folder.
- **Adding New Features:** Implement new components or pages and integrate them with the existing routing.

### **6.2 Key Pages and User Flows**

- **Home Page:** Provides an overview of services and introductory content.
- **Services Page:** Displays detailed descriptions of services with links to the contact form.
- **Portfolio Page:** Features a carousel showcasing previous work or projects.
- **Contact Page:** Includes a form for users to submit inquiries.

---

## **7. Customization/Extensibility**

### **7.1 Modifying Existing Content**

- **Text Content:** Edit JSX in components like `About.js`, `Services.js`, etc.
- **Images:** Update images in the `src/assets` folder and adjust paths in components.

### **7.2 Adding New Features**

- **New Components:** Create new files in the `src/components` folder and import them where needed.
- **Routing:** Update routes in `App.js` or `Router.js`.

### **7.3 Customizing Existing Components**

- **Styling:** Modify CSS or Tailwind classes in component files.
- **Interactivity:** Add state management or event handling as needed.

### **7.4 Extending Functionality**

- **APIs:** Integrate new APIs by creating or updating service files.
- **New Features:** Implement new features as separate components or modules.

---

## **8. Common Issues and Solutions**

- **Build Errors:** Check error messages, reinstall dependencies, and verify configurations.
- **Styling Issues:** Ensure correct class names and Tailwind configuration.
- **Routing Issues:** Verify router setup and path accuracy.
- **API Integration Issues:** Check endpoints, handle errors, and verify CORS settings.
- **Deployment Issues:** Review deployment logs and ensure correct configuration.
- **Form Submission Issues:** Verify form action and backend service.

---

## **9. References**

- **React Documentation:** [React Documentation](https://reactjs.org/docs/getting-started.html)
- **Tailwind CSS Documentation:** [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- **Vite Documentation:** [Vite Documentation](https://vitejs.dev/)
- **PostCSS Documentation:** [PostCSS Documentation](https://postcss.org/)
- **Git Documentation:** [Git Documentation](https://git-scm.com/doc)
- **GitHub Docs:** [GitHub Docs](https://docs.github.com/)
- **Vercel Documentation:** [Vercel Documentation](https://vercel.com/docs)
- **Netlify Documentation:** [Netlify Documentation](https://docs.netlify.com/)
- **Axios Documentation:** [Axios Documentation](https://axios-http.com/docs/intro)
- **Formspree Documentation:** [Formspree Documentation](https://formspree.io/docs/)
- **MDN Web Docs:** [MDN Web Docs](https://developer.mozilla.org/)
- **TypeScript Documentation:** [TypeScript Documentation](https://www.typescriptlang.org/docs/)
