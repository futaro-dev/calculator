# Futaro's Calculator

Futaro's Calculator is a simple, user-friendly calculator built with **React** and **TypeScript**. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The design and functionality were inspired by the `CASIO fx-85GT CW` model, with features and behaviour closely modeled after it.

## Features

- Perform basic arithmetic operations: **addition**, **subtraction**, **multiplication**, and **division**.
- Built with modern technologies: **React** and **TypeScript**.
- Well-tested to ensure reliable performance.

---

## Getting Started

Follow the steps below to set up the calculator on your local machine.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or later)
- **Yarn** or **npm**

---

### Installation

1. **Clone the Repository**:

```bash
git clone https://github.com/futaro-dev/futaro-calculator.git
```

2. **Navigate to the Project Directory**

```bash
cd futaro-calculator
```

3. **Navigate to the Frontend Directory**

```bash
cd frontend
```

4. **Install Dependencies**:

   Using `npm`:

   ```bash
   npm install
   ```

   Or using `yarn`:

   ```bash
   yarn install
   ```

---

### Running the Application

To start the development server:

Use `npm`:

```bash
npm run dev
```

Or use `yarn`:

```bash
yarn dev
```

The application will be accessible at `http://localhost:3000` (or another port if specified).

---

### Running Tests

To run unit tests:

Use `npm`:

```bash
npm run test
```

Or use `yarn`:

```bash
yarn test
```

This will run all unit tests and display the results in the console.

---

## Project Structure

Here’s an overview of the project's directory structure:

```
futaro-calculator/
├── frontend/
│   ├── src/            # Source files
│   ├── public/         # Static files
│   └── package.json    # Frontend dependencies
└── README.md           # Project documentation
```

---

## Assumptions

- The calculator accepts inputs as individual button presses.
- The input order matters; there's no support for reordering or editing the expression directly.
- The calculator handles inputs and results with a fixed preicsion (up to 14 decimal places).
- Division by zero is handled by outputting `Infinity`.
- It the user presses the Equals (=) button without entering any input, the calculator assumes `0` as the result.
- The app is designed to run in a modern browser or development server with support for React and TypeScript.

---

## Limitations

- No cursor feature to edit the display
- No differentiation between syntax errors and other types of errors
- No history of calculations is provided to the user
- Users cannot type directly into the display area; input must be provided via button presses.

---

## Contact

For questions or support, feel free to reach out:

- **GitHub**: [@futaro-dev](https://github.com/futaro-dev)
