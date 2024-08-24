# **Blue Sky Digitals**

**Blue Sky Digitals** is a modern, interactive website designed to showcase digital services, including web development, graphic designing, and social media marketing. The website offers an engaging user experience with a clean design, smooth animations, and a responsive layout.

---

## **1. Introduction**

Welcome to the Blue Sky Digitals project! This README provides comprehensive information on the project's features, tech stack, setup instructions, build and deployment process, and more.

---

## **2. Project Overview**

### **2.1 Features and Functionalities**

- **Frontend:**
  - **Interactive Design**
  - **Service Sections**
  - **Portfolio Carousel**
  - **Contact Form**
  - **Social Media Links**

- **Backend:**
  - **Form Submission Handling**

- **Third-Party Services, Libraries, or APIs:**
  - **Axios**
  - **Formspree**
  - **Tailwind CSS**
  - **React Router**

---

## **3. Tech Stack**

- **Languages:** JavaScript (ES6+), HTML, CSS
- **Frameworks and Libraries:**
  - **React**
  - **Tailwind CSS**
  - **Vite**
  - **PostCSS**
- **Hosting/Deployment Platforms:**
  - **Vercel**

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
  - Add environment-specific variables:
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
   - Check the `dist` or `build` directory.

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

- **Content Management:** Modify React components in the `src/components` folder.
- **Adding New Features:** Implement new components or pages.

### **6.2 Key Pages and User Flows**

- **Home Page**
- **Services Page**
- **Portfolio Page**
- **Contact Page**

---

## **7. Customization/Extensibility**

### **7.1 Modifying Existing Content**

- **Text Content:** Edit JSX in relevant components.
- **Images:** Update images in `src/assets`.

### **7.2 Adding New Features**

- **New Components:** Create and integrate new components.
- **Routing:** Update routes in `App.js` or `Router.js`.

### **7.3 Customizing Existing Components**

- **Styling:** Modify CSS or Tailwind classes.
- **Interactivity:** Add state management or event handling.

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
