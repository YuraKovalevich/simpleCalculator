# Calculator Project
# Link https://s1mplecalculator.netlify.app/
## TASK
Link to the document: https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0

## How to Run
1. Clone the repository:
```bash
git clone <repository-url>
```
2. Install Husky as a development dependency:
```bash
npm install --save-dev husky
npm run prepare
```
3. Install dependencies:
```bash
npm install
```
4. In the `.husky` folder, open the `pre-commit` file and replace its content with:
```bash
#!/usr/bin/env sh
"$(dirname "$0")/_/husky.sh"
npx lint-staged
```
5. Run development server:
```bash
npm run start
```
6. Build for production:
```bash
npm run build
```
7. Open `dist/index.html` in your browser.

## Project Structure
```
project-root/
├─ src/
│  ├── core/          # Core business logic modules
│  ├── ui/            # User interface components
│  ├── utils/         # Utility functions and helpers
│  ├─ styles/         # CSS files for styling the calculator
│  ├─ index.html      # Main HTML file
│  └─ main.js         # Main JS file 
├─ .husky/             # Git hooks (pre-commit)
├─  package.json        # NPM scripts, dependencies, and project metadata
├─ .eslintrc.js        # ESLint configuration for code quality
├─ .prettierrc         # Prettier configuration for consistent formatting
├── webpack.config.js  # Webpack build configuration
```

### Notes
- This project uses **Husky** for git hooks, **ESLint** for code quality, **Prettier** for formatting, and **Webpack** for bundling and building the application.
- The calculator allows number input, basic operations (`+`, `-`, `*`, `/`, `%`,`+/-`), percentage, sign toggle (`+/-`), clear (`AC`), delete (`DEL`), and theme switching.


