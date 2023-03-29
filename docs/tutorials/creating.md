
# Creating Unique Data

## Overview

This section will focus on creating, and storing unique data on your web browser.

## Setup

1. Create a folder on your computer (folder can have any name)
2. Open the folder on VSC
3. Create an HTML file using file > new file; name it index.js
4. Create a Javascript file using file > new file; name it index.js (**NOTE:** it is recommended to name this file the same as your HTML file)

## Creating and Storing Data

1. Open the HTML file by double clicking it on the explorer menu. If the menu is not visible, click on view > explorer.
2. Let Visual Studio Code autofill the HTML file using ‘!’ and enter
3. In the HTML document head, insert a blank line after line 7.
4. Link your JavaScript script to your HTML file using the script tag.
5. Create an input tag within the body of the HTML file. Give it an id attribute ‘createInput’.
6. Create a button tag right below your input tag. Give it an id attribute ‘createButton’, and put any text inside it.
7. In your JavaScript file, create a function with the following code block:

    ```js
    function submitInput() {
    var input = document.getElementById(‘createInput’).value;
    localStorage.setItem(input, JSON.stringify(input));
    }
    ```

8. Open your HTML file by dragging it onto a compatible browser.
9. Type something into the input box.
10. Hit the button to submit the unique data into the browser’s local storage.

## Conclusion

by the end of this section, you will have successfully created and stored data on your web browser.
