# Express.js: Note Taker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

The Note Taker application is a comprehensive note management system that allows users to write, save, delete, and manage their notes efficiently. It uses an Express.js back end to store and retrieve note data from a JSON file, ensuring smooth integration with the front end. Key features include the ability to create, view, save, and delete notes, each identified by a unique ID. The application is deployed to Render, a cloud platform for hosting web applications. This project is designed to help small business owners and individuals organize their tasks and thoughts effectively, providing a reliable solution for keeping notes in order.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [API Documentation](#api-documentation)
- [Contribution](#contribution)
- [Credits](#credits)
- [Deliverables](#deliverables)
- [Questions](#questions)
- [License](#license)

## Installation

To install the Note Taker application, follow these steps:

1. **Clone the Repository**: First, clone the repository from GitHub to your local machine using the following command:
   ```bash
   git clone git@github.com:ngojohn2002/11-Express-js-Note-Taker.git
   ```

2. **Navigate to the Project Directory**: Change your current working directory to the project directory:
   ```bash
   cd 11-Express-js-Note-Taker
   ```

3. **Install Dependencies**: Install the required dependencies using npm:
   ```bash
   npm install
   ```

4. **Start the Server**: Start the Express.js server:
   ```bash
   npm start
   ```
   The server will start running, and you should see output indicating that the server is listening on a specific port (typically port 3001).

[Back to Table of Contents](#table-of-contents)

## Usage

Using the Note Taker application is straightforward. Follow these steps:

1. **Open the Application**: 
   - If running locally, open your web browser and go to `http://localhost:3001`.
   - If deployed, visit the URL provided by Render where your application is hosted.

2. **Landing Page**: 
   - You will be presented with a landing page. Click the link or button to navigate to the notes page.

3. **Notes Page**:
   - **Viewing Notes**: On the notes page, you will see a list of existing notes in the left-hand column. Click on any note to view its contents in the right-hand column.
   - **Creating a New Note**: To create a new note, click the "New Note" button in the navigation bar. This will clear the fields in the right-hand column.
   - **Entering Note Details**: Enter the title and content of your new note in the respective fields.
   - **Saving a Note**: Once you have entered the note title and content, a "Save" button will appear in the navigation bar. Click it to save your note. The note will be added to the list in the left-hand column with a unique ID.
   - **Clearing the Form**: If you want to clear the fields without saving, click the "Clear Form" button in the navigation bar.

4. **Managing Notes**:
   - **Viewing Existing Notes**: Click on any note in the list on the left to view its details on the right. This allows you to see and edit the contents of your notes.
   - **Deleting a Note**: Click the delete button next to each note in the list to remove the note. The note will be deleted from the JSON file and the list will update accordingly.

[Back to Table of Contents](#table-of-contents)

## Tests

Testing the Note Taker application involves verifying that all its functionalities work as expected. Follow these steps to thoroughly test the application:

### 1. **Setup Testing Environment**
Ensure you have followed the installation instructions and have the application running either locally or on the deployed Render URL.

### 2. **Test User Interface**

#### Landing Page
- **Open the Application**: Navigate to the URL where your application is running (e.g., `http://localhost:3001` or the deployed Render URL).
- **Verify Navigation**: Click the link/button to go to the notes page. Ensure it navigates correctly.

#### Notes Page
- **Viewing Notes**: 
  - Verify that the existing notes are listed in the left-hand column.
  - Click on an existing note and check if its content appears in the right-hand column.
  
- **Creating a New Note**:
  - Click the "New Note" button. Verify that the input fields for title and content are empty.
  - Enter a new note title and content.
  - Click the "Save" button. Ensure that the new note appears in the left-hand column with a unique ID.

- **Clearing the Form**:
  - Click the "Clear Form" button after entering text. Verify that the form fields are cleared.

- **Deleting a Note**:
  - Click the delete button next to an existing note in the list.
  - Verify that the note is removed from the list and no longer appears in the JSON file.

### 3. **Test Back-End API**

#### Using a Tool like Postman or Insomnia:
- **GET /api/notes**:
  - Send a GET request to `/api/notes`.
  - Verify that it returns a JSON array of all notes.

- **POST /api/notes**:
  - Send a POST request to `/api/notes` with a JSON body containing a note's title and content.
  - Verify that the new note is saved and returned with a unique ID.
  - Confirm that the new note appears when you send a subsequent GET request to `/api/notes`.

- **DELETE /api/notes/:id**:
  - Send a DELETE request to `/api/notes/:id` with the ID (:id) of a note to delete.
  - Verify that the note is removed.
  - Confirm that the note no longer appears in the list when you send a GET request to `/api/notes`.

### 4. **Check for Console Errors**
- Monitor the browser console and server logs for any errors during the above interactions. Address any errors that appear to ensure smooth functionality.

### 5. **Cross-Browser Testing**
- Test the application in different browsers (Chrome, Firefox, Edge, Safari) to ensure compatibility and consistent behavior across different environments.

### 6. **Mobile Responsiveness**
- Open the application on a mobile device or use the browser’s developer tools to simulate a mobile viewport. Ensure that the UI is responsive and functional on smaller screens.

[Back to Table of Contents](#table-of-contents)

## API Documentation

The Note Taker application utilizes the following API endpoints:

- **GET /api/notes**:
  - Retrieves all notes stored in the application as a JSON array.
  - **Example Request**:
    ```bash
    curl -X GET http://localhost:3001/api/notes
    ```
  - **Example Response**:
    ```json
    [
      {
        "id": "1",
        "title": "Sample Note",
        "text": "This is a sample note."
      }
    ]
    ```

- **POST /api/notes**:
  - Saves a new note to the application. Requires a JSON body with `title` and `text` fields.
  - **Example Request**:
    ```bash
    curl -X POST http://localhost:3001/api/notes -H "Content-Type: application/json" -d '{"title":"New Note","text":"This is a new note."}'
    ```
  - **Example Response**:
    ```json
    {
      "id": "2",
      "title": "New Note",
      "text": "This is a new note."
    }
    ```

- **DELETE /api/notes/:id**:
  - Deletes a note from the application based on the provided `id` parameter.
  - **Example Request**:
    ```bash
    curl -X DELETE http://localhost:3001/api/notes/2
    ```
  - **Example Response**:
    ```json
    {
      "message": "Note deleted successfully."
    }
    ```

[Back to Table of Contents](#table-of-contents)

## Contribution

We welcome contributions from the community! Here's how you can get involved:

### 1. Fork the Repository

Fork the repository to your GitHub account to create a personal copy.

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```sh
git clone git@github.com:your-repo/repo-name.git
```

### 3. Create a Branch

From the newly cloned project directory, create a new branch for your changes with a descriptive name:

```sh
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

Make necessary changes, following project coding standards and best practices.

### 5. Commit Your Changes

Commit changes with a clear, concise message:

```sh
git add .
git commit -m "Add feature/fix description"
```

### 6. Push Your Changes

Push changes to your forked repository:

```sh
git push origin feature/your-feature-name
```

### 7. Open a Pull Request

Go to the original repository on GitHub, open a pull request, and explain your changes:

1. Navigate to the [original repository](https://github.com/your-repo/repo-name).
2. Click "Pull requests."
3. Click "New pull request."
4. Select your branch from the "Compare" dropdown.
5. Click "Create pull request."

### 8. Participate in Code Review

Respond to feedback and questions from maintainers. Make additional changes as needed.

### 9. Wait for Approval and Merge

Once approved, your pull request will be merged into the main branch.

### Contribution Guidelines

- **Code of Conduct:** Follow the [GitHub Community Code of Conduct](https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct).
- **Style Guide:** Adhere to [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
- **Testing:** Write and execute tests for changes, including unit tests where appropriate.
- **Documentation:** Update documentation to reflect changes made.

Thank you for contributing!

[Back to Table of Contents](#table-of-contents)

## Credits

This project was made possible with the help of [ChatGPT](https://chatgpt.com/).

[Back to Table of Contents](#table-of-contents)

## Deliverables

### Mock-Up

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo.gif)

### Deployed Render URL

The URL of the functional, deployed application.

### GitHub Link

https://github.com/ngojohn2002/11-Express-js-Note-Taker

[Back to Table of Contents](#table-of-contents)

## Questions

For any questions or feedback, please reach out to me:

- **Email**: [ngojohn2002@yahoo.com](mailto:ngojohn2002@yahoo.com)  
- **GitHub**: [https://github.com/ngojohn2002](https://github.com/ngojohn2002)

[Back to Table of Contents](#table-of-contents)

## License

This project is licensed under the [MIT](./LICENSE) license.

[Back to Table of Contents](#table-of-contents)

---

Copyright &copy; 2024 - All Rights Reserved.
