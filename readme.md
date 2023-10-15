# LeetCode Problem Collection

This Git repository is a collection of LeetCode problems, each solved using TypeScript and tested with Jest. It serves as a reference for practicing coding and improving algorithmic problem-solving skills.

## Table of Contents

- [LeetCode Problem Collection](#leetcode-problem-collection)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Visual Studio Code and Excalidraw Extension](#visual-studio-code-and-excalidraw-extension)
    - [Installation](#installation-1)
    - [Using Excalidraw Files](#using-excalidraw-files)
  - [Project Structure](#project-structure)
  - [Running Tests](#running-tests)
  - [Troubleshooting](#troubleshooting)
  - [Contribution Guidelines](#contribution-guidelines)
  - [License](#license)



## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): It comes with Node.js, so no need to install separately.

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Symphon-y/LeetCode-Problem-Collection.git
```
2. Navigate to the project directory:

```bash
cd leetcode
```
3. Install the project dependencies:
```bash
npm install
```

### Usage
Each LeetCode problem is organized in its own directory within the src folder, with separate TypeScript files for the problem solution and tests. To work on a specific problem, follow these steps:

1. Navigate to the problem directory
```bash
cd src/leetcode/problem-name
```
2. Open the solution.ts file and implement your solution.
3. Run the test suite to check if your solution is correct:
```bash
npm run test
```
4. You can also add custom test cases in the problem-name.test.ts file:

## Visual Studio Code and Excalidraw Extension

[Visual Studio Code (VSCode)](https://code.visualstudio.com/) is a popular code editor that provides a rich development environment for TypeScript and JavaScript projects. You can enhance your LeetCode problem-solving experience by using VSCode along with the Excalidraw extension to visualize and collaborate on solutions.

### Installation

1. **Visual Studio Code**: If you haven't already, download and install [Visual Studio Code](https://code.visualstudio.com/).

2. **Excalidraw Extension**: To work with Excalidraw files, you can use the [Excalidraw extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=excalidraw.excalidraw). You can install this extension from the VSCode marketplace by searching for "Excalidraw."

### Using Excalidraw Files

Excalidraw is a versatile tool for creating diagrams, sketches, and illustrations. You can use it to visualize and document your LeetCode problem solutions with flowcharts, diagrams, and other visual aids.

1. Open VSCode and navigate to the problem's directory within your project.

2. Create or open an Excalidraw file (with a .excalidraw extension) to sketch your solution. You can create a new Excalidraw file by right-clicking in the file explorer and selecting "New File."

3. Use the Excalidraw extension to create diagrams and flowcharts that explain your thought process and solution. You can easily draw boxes, arrows, and other shapes to illustrate your code's logic.

4. Save and manage your Excalidraw files directly from VSCode.

5. Consider adding a reference to your Excalidraw file in the problem's README to share your visual solution with others.

By using the Excalidraw extension in VSCode, you can enhance your problem-solving skills and communicate your solutions more effectively.


## Project Structure
The repository has the following structure:
```bash
|--leetcode/
|   |-- src/
|   |   |-- assets/
|   |   |   |-- problem-1/
|   |   |   |-- ...
|   |   |-- leetcode/
|   |   |   |-- problem-1/
|   |   |   |   |-- diagram.excalidraw
|   |   |   |   |-- solution.ts
|   |   |   |   |-- readme.md
|   |   |   |
|   |   |   |-- problem-2/
|   |   |   |   |-- diagram.excalidraw
|   |   |   |   |-- solution.ts
|   |   |   |   |-- readme.md
|   |   |   |
|   |   |   |-- ...
|   |   |-- scripts/
|   |   |-- tests/
|   |   |   |-- problem-1/
|   |   |   |   |-- problem-1.test.ts
|   |   |   |-- problem-2/
|   |   |   |   |-- problem-2.test.ts
|   |   |   |-- ...
|   |   |-- types/
|   |   |   |-- problem-1/
|   |   |   |-- ...
|   |   |-- utilities/
|   |   |   |-- problem-1/
|   |   |   |-- ...
|   |-- index.ts
|   |-- package.json
|   |-- jest.config.js
|   |-- tsconfig.json
|   |-- readme.md
|   |-- .gitignore

```

* src/: Contains directories for each LeetCode problem.
* package.json: Lists project dependencies and scripts for running tests.
* jest.config.js: Jest configuration for running tests.
* tsconfig.json: TypeScript configuration.
* README.md: The documentation you are currently reading.
* .gitignore: List of files and directories to be ignored by Git.

## Running Tests
To run the test suite for all problems in the repository, you can use the following command:
```bash
npm run test
```
To only run tests for a specific problem you may pass an argument to the test command
```bash
npm run test "[problem-name].test.ts"
```

## Troubleshooting
If you encounter an error when attempting `npm run test` that says something similar to `ts-node: command not found` make sure you've installed ts-node, and that the `ts-node` command is added to your PATH.

Some things you can try
1. install ts-node locally
```bash
npm install ts-node
```
2. install ts-node globally
```bash
npm install -g ts-node
```
3. Add this line to your .zshrc file. This will add the .nvm/bin directory to your PATH, which contains the ts-node command.
```bash
export PATH=$PATH:$HOME/.nvm/bin
```

## Contribution Guidelines
If you'd like to contribute to this project, feel free to submit a pull request. Please make sure to follow these guidelines:
1. Create a new directory for the LeetCode problem you want to add.
2. Write the TypeScript solution in the solution.ts file.
3. Add test cases in the problem-name.test.ts file.
4. Ensure that the tests pass by running npm test.
5. Update the README.md if necessary.

## License
This project is licensed under the MIT License

