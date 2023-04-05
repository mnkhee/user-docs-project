# Deleting Data

## Overview

This section will go focus on deleting data from your browser's local storage.

## Setup

1. Create a button tag below the previous button tag in your HTML file. Give it an **id** attribute 'removeItem', an **onClick** event attribute 'removeItem()', and put any text inside.

    At this point, you should have this in your HTML file.

    ```html hl_lines="17"
    <!DOCTYPE html>

    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="index.js"></script>
    </head>

    <body>
        <input id="createInput">
        <button id="createButton" onClick="submitInput()">Click me!</button>
        <button id="displayData" onClick="displayOutput()">Display data</button>
        <button id="removeItem" onClick="removeItem()">Delete Data</button>
    </body>

    </html>
    ```

2. Create a function called 'removeItem()' in your javascript file.

    ```js
    function removeItem() {

    }
    ```

## Delete Data from your Browser's Local Storage

1. Inside the function you created in the setup, removeItem(), create a variable called 'item' and use the document.getElementById() method to retrieve data and store it in the 'item' variable.

    ```{.js hl_lines="2"}
    function removeItem() {
        var item = document.getElementById('createInput');
    }
    ```

2. Remove data by using localStorage.removeItem().

    ```{.js hl_lines="3"}
    function removeItem() {
        var item = document.getElementById('createInput');
        localStorage.removeItem(item);
    }
    ```

3. Reload the window by using window.location.reload().

    ```{.js hl_lines="4"}
    function removeItem() {
        var item = document.getElementById('createInput');
        localStorage.removeItem(item);
        window.location.reload();
    }
    ```

4. Open your HTML by dragging it onto a compatible browser.
5. Open developer tools, and navigate to Application.
    <br> ![application](/images/deleting/application.png)
6. Click on your local host address under 'Local Storage' tab.
    <br> ![application-continued](/images/deleting/application-continued.png)
    At this point, you will see key value pairs. This represents the data stored on your browser's local storage.
7. Enter the key of the data you want to remove into the input box.
    <br> ![deleting-data](/images/deleting/deleting-data.png)
8. Press the 'Delete Data' button.

    At this point, your browser will reload and the data will be deleted.

## Conclusion

By the end of this section, you will be able to delete data from your browser's local storage.
