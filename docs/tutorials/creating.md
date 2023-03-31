
# Creating Unique Data

## Overview

This section will focus on creating and storing unique data on your web browser.

## Setup

1. Create a folder on your computer (the folder can have any name).
2. Open VSC.
3. On the top left corner of VSC, click on File > Open Folder, and select your newly created folder.
    <br> ![open-folder](/images/creating/open-folder.png)

4. Create an HTML file by clicking on File > New File..., and name it index.html.
    <br> ![create-file](/images/creating/create-file.png)

5. Create a Javascript file using file > new file; name it index.js (**NOTE:** it is recommended to name this file the same as your HTML file).

    !!! note "Info"
        You can name the JavaScript file any valid filename, however it is convention to name it with the same name as the HTML file you plan to link it to.

## Creating and Storing Data

1. Open the HTML file by double clicking it on the explorer menu. If the menu is not visible, click on view > explorer.
2. Let Visual Studio Code autofill the HTML file using ‘!’ and enter
3. In the HTML document head, insert a blank line after line 7.
4. Link your JavaScript script to your HTML file using the script tag.

    ```html
    <script src='index.js'></script>
    ```

5. Create an input tag within the body of the HTML file. Give it an **id** attribute ‘createInput’.
6. Create a button tag right below your input tag. Give it an **id** attribute ‘createButton’, and put any text inside it.

    ```html
    <button id=’createButton’ onClick=’submitInput’> Click here! </button>
    ```

7. In your JavaScript file, create a function with the following code block:

    ```js
    function submitInput() {
    var input = document.getElementById("createInput").value;
    localStorage.setItem(input, JSON.stringify(input));
    }
    ```

8. Open your HTML file by dragging it onto a compatible browser.
9. Type something into the input box.
10. Hit the button to submit the unique data into the browser’s local storage.

## Conclusion

by the end of this section, you will have successfully created and stored data on your web browsers local storage.
