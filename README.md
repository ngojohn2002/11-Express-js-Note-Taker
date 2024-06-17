# Express.js: Note Taker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Current Capabilities](#current-capabilities)
- [Limitations](#limitations)
- [Future Growth Potential](#future-growth-potential)
- [Learning Journey and Skills Demonstrated](#learning-journey-and-skills-demonstrated)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [API Documentation](#api-documentation)
- [Contribution](#contribution)
- [Credits](#credits)
- [Deliverables](#deliverables)
- [Questions](#questions)
- [License](#license)
- [Additional Resources](#additional-resources)

## Description

The [Note Taker](https://ngojohn2002-express-js-note-taker.onrender.com) application is a basic note management system that allows users to create, save, and manage their notes. The user-friendly front end enables easy creation, viewing, and management of notes, while the back end uses Express.js to store and retrieve note data from a JSON file, ensuring seamless integration. Each note is uniquely identified, facilitating precise data management. Deployed on [Render](https://render.com), this project serves as a functional prototype for individuals to organize their tasks and thoughts.

[Back to Table of Contents](#table-of-contents)

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

[Back to Table of Contents](#table-of-contents)

## Acceptance Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

[Back to Table of Contents](#table-of-contents)

## Current Capabilities

- **Add Notes**: Users can create new notes with a title and content.
- **View Notes**: Users can view a list of existing notes and their details.
- **Delete Notes**: Users can delete notes, which are removed from the JSON file.

[Back to Table of Contents](#table-of-contents)

## Limitations

- **Single JSON File Storage**: All notes from different users are stored in the same JSON file, meaning any user can see all notes.
- **No User Authentication**: The app does not have a system for user accounts or log-in profiles, which limits privacy and personalized note management.

[Back to Table of Contents](#table-of-contents)

## Future Growth Potential

- **User Authentication**: Implementing user log-in profiles to store notes securely and privately.
- **Database Integration**: Transitioning from JSON file storage to a database (e.g., MongoDB, PostgreSQL) for better scalability and data management.
- **Installer Packaging**: Providing a simple installer for users to quickly download, install, and use the app on their local machines.
- **Enhanced Features**: Adding functionalities such as note modification, categorization, search capabilities, and cloud synchronization.

[Back to Table of Contents](#table-of-contents)

## Learning Journey and Skills Demonstrated

Building this Note Taker application has been an invaluable learning experience. Here are the technologies and skills I have developed:

- **Front-End Development**: Created a user-friendly interface using HTML, CSS, and JavaScript.
- **Back-End Development**: Utilized Express.js to handle server-side operations and manage note data.
- **Data Management**: Implemented JSON file storage for handling note data, with plans to transition to more scalable database solutions.
- **Deployment**: Deployed the application on Render, gaining experience in cloud hosting and deployment processes.
- **Version Control**: Managed the project using Git and GitHub, following best practices for version control and collaboration.

As a newcomer to these technologies, I am continuously learning and improving. This project showcases my potential to contribute effectively to a development team or pursue a freelance career. I am eager to leverage my growing skill set to become a valuable asset to potential employers or clients.

[Back to Table of Contents](#table-of-contents)

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
   - If running locally, follow the steps in section [Installation](#installation) above to start your server on port 3001, then open your web browser and go to `http://localhost:3001`.
   - Alternatively, you can visit the live deployed app on Render's website by clicking on [https://ngojohn2002-express-js-note-taker.onrender.com](https://ngojohn2002-express-js-note-taker.onrender.com). 

      > **Note: Monitoring and Potential Delays**  
      The application is hosted on Render's free tier, which may cause delays of up to 50 seconds after periods of inactivity. To minimize this, I use [UptimeRobot](https://uptimerobot.com/) and [Better Uptime](https://betteruptime.com/) for regular monitoring. However, occasional delays may still occur. Thank you for your understanding and patience as I work to improve this experience.

2. **Landing Page**: 
   - You will be presented with a landing page. Click the link or button to navigate to the notes page.

3. **Notes Page**:
   - **Viewing Notes**: On the notes page, you will see a list of existing notes in the left-hand column. Click on any note to view its contents in the right-hand column.
   - **Creating a New Note**: To create a new note, click the "New Note" button in the navigation bar. This will clear the fields in the right-hand column.
   - **Entering Note Details**: Enter the title and content of your new note in the respective fields.
   - **Saving a Note**: Once you have entered the note title and content, a "Save" button will appear in the navigation bar. Click it to save your note. The note will be added to the list in the left-hand column with a unique ID.
   - **Clearing the Form**: If you want to clear the fields without saving, click the "Clear Form" button in the navigation bar.

4. **Managing Notes**:
   - **Viewing Existing Notes**: Click on any note in the list on the left to view its details on the right. This allows you to see the contents of your notes.
   - **Deleting a Note**: Click the delete button next to each note in the list to remove the note. The note will be deleted from the JSON file and the list will update accordingly.

[Back to Table of Contents](#table-of-contents)

## Tests

Testing the Note Taker application involves verifying that all its functionalities work as expected. Follow these steps to thoroughly test the application:

### 1. **Setup Testing Environment**
Ensure you have followed the installation instructions and have the application running either locally or on the deployed Render URL.

### 2. **Test User Interface**

#### Landing Page
- **Open the Application**: Navigate to the URL where your application is running (e.g., `http://localhost:3001` or the deployed Render URL [https://ngojohn2002-express-js-note-taker.onrender.com/](https://ngojohn2002-express-js-note-taker.onrender.com/)).
- **Verify Navigation**: Click the `Get Started` button to go to the notes page and `Note Taker` button on the top left corner to go back. Ensure it navigates correctly.

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

I welcome contributions from the community! Here's how you can get involved:

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

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-Express-js-Note-Taker-demo.gif)

### Link to Execution Video

Alternatively, you can also view the execution video by clicking on the following link:

[https://drive.google.com/file/d/1ZrvsjOM2tcjmqTQw5p41lWkyo7WKVKl1/view?usp=sharing](https://drive.google.com/file/d/1ZrvsjOM2tcjmqTQw5p41lWkyo7WKVKl1/view?usp=sharing)

### Link to Deployed Render URL

To test it out yourself, here is the link to the Note Taker app deployed on Render: 

[https://ngojohn2002-express-js-note-taker.onrender.com](https://ngojohn2002-express-js-note-taker.onrender.com).

### Link to GitHub Repository

Find the source code and further details on the GitHub repository: 

[https://github.com/ngojohn2002/11-Express-js-Note-Taker](https://github.com/ngojohn2002/11-Express-js-Note-Taker)

[Back to Table of Contents](#table-of-contents)

## Questions

For any questions or feedback, please reach out to me:

- **Email**: [ngojohn2002@yahoo.com](mailto:ngojohn2002@yahoo.com)  
- **GitHub**: [https://github.com/ngojohn2002](https://github.com/ngojohn2002)

[Back to Table of Contents](#table-of-contents)

## License

This project is licensed under the [MIT](./LICENSE) license.  
![License](https://img.shields.io/badge/License-MIT-blue.svg)

[Back to Table of Contents](#table-of-contents)

## Additional Resources

For further reading and resources to help you develop similar applications, consider the following:

- **Express.js Documentation**: [Express.js](https://expressjs.com/)
- **Node.js Documentation**: [Node.js](https://nodejs.org/)
- **Render Documentation**: [Render](https://render.com/docs)
- **Markdown Guide**: [Markdown Guide](https://www.markdownguide.org/)
- **Postman**: [Postman](https://www.postman.com/) - A powerful tool for API testing

These resources have been instrumental in developing this project and can provide valuable insights and tools for your own projects.

[Back to Table of Contents](#table-of-contents)

---

Copyright &copy; 2024 - All Rights Reserved.

