# Reading Data

## Overview

This section will focus on reading and displaying data from your web browser's local storage.
!!! tip "Pre-requisites"
    This tutorial is a continuation on the [**creating tutorial**](creating.md). If you have not completed it, you will need to have setup data inside your browser's local storage on your own.
    <br> *There is no guarantee that the data you have entered will be compatible with our code*. Continue at your own risk!

## Setup

1. Create a button tag below the previous button tag in your HTML file. Give it an id attribute 'displayData', an onClick event attribute 'displayOutput', and put any text inside.

    At this point, you should have this in your HTML file.

    ```html
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
        <div id="output"></div>
    </body>

    </html>
    ```

2. Define a function called 'displayOutput' in your Javascript file.

    ```js
    function displayOutput() {
        
    }
    ```

## Display Most Recently Stored Data to the Console

These set of instructions will go over how to display the most recent item saved to your browser's local storage.

1. Retrieve latest data from the browser's local storage by calling localStorage.getItem() inside the displayOutput function in your JavaScript file.

    ```js
    function displayOutput() {
        var data = JSON.parse(localStorage.getItem(document.getElementById("createInput").value));
    }
    ```

2. Display data to the console by using console.log.

    ```{.js .annotate hl_lines="3"}
    function displayOutput() {
        var data = JSON.parse(localStorage.getItem(document.getElementById("createInput").value));
        console.log(data);
    }
    ```

3. Open your HTML by dragging it onto a compatible browser.
4. Type something into the input box.
5. Hit the 'Click Here!' button to submit unique data into the browser's local storage.
6. Hit the 'Display data' button to display data to the console.
7. Open your browser's Developer Tools by pressing F12 or by right clicking at pressing 'Inspect'.
    <br> ![access-developer-tools](/images/reading/access-developer-tools.png)
8. Navigate to the console tab.
    <br> ![access-console](/images/reading/access-console.png)

    At this point, you will see the latest bit of data stored in your browser's local storage.

## Display All Local Storage Data to the Console

These set of instructions will go over how to display everything saved to your browsers local storage.

1. Insert the following code block inside the displayOutput function in your JavaScript file.

    ```js
    function displayOutput() {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var data = localStorage.getItem(key);
            console.log(data);
        }
    }
    ```

2. Open your HTML by dragging it onto a compatible browser.
3. Type something into the input box.
4. Hit the 'Click Here!' button to submit unique data into the browser's local storage.
5. Hit the 'Display data' button to display data to the console.
6. Open your browser's Developer Tools by pressing F12 or by right clicking at pressing 'Inspect'.
    <br> ![access-developer-tools](/images/reading/access-developer-tools.png)
7. Navigate to the console tab.
    <br> ![access-console](/images/reading/access-console.png)

    At this point, you will see all data stored in your browser's local storage.

## Conclusion

By the end of this section, you will be able to:

- Display most recently stored to the console
- Display all local storage data to the console
