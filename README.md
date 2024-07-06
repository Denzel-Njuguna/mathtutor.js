# Math CLI Application

A command-line interface (CLI) application in Node.js that performs basic math operations and saves results to a file.

## Features

- Randomly generates two numbers.
- Prompts for a math operation (addition, subtraction, multiplication, division).
- Evaluates the user's answer.
- Saves the result to `answer.txt`.

## Installation

1. Clone the repository or download the files.
2. Navigate to the project directory and install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the application:
    ```sh
    node path/to/your/script.js
    ```
2. Follow the prompts to select an operation and input your answer.
3. Results are saved in `answer.txt`.

## Code Overview

### `math` Class

- **Constructor**: Initializes the readline interface.
    ```javascript
    constructor() {
        this.setinterface();
    }
    ```

- **Methods**:
    - `quiz()`: Generates random numbers.
    - `setinterface()`: Sets up the readline interface.
    - `chooseoperation()`: Prompts for an operation.
    - `handleaddition()`, `handlesubtraction()`, `handlemultiplication()`, `handledivision()`: Handles the respective operations.
    - `printtofile(result)`: Writes results to `answer.txt`.


