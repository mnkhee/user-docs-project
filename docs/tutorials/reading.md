# Reading Data

## Overview

This section will focus on reading and displaying data from your web browser's local storage.
!!! tip "Pre-requisites"
    This tutorial is a continuation on the [**creating tutorial**](creating.md). If you have not completed it, you will need to have setup data inside your browser's local storage on your own.
    <br> **There is no guarantee that the data you have entered on your own will be compatible with our code**. Continue at your own risk!

## Setup

1. Create a button tag below the previous button tag in your HTML file.

2. Give it an id attribute 'displayData', an onClick event attribute 'displayOutput', and put any text inside it.

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
    </body>

    </html>
    ```

3. Define a function called 'displayOutput' in your Javascript file.

    ```js
    function displayOutput() {
        
    }
    ```

## Display All Local Storage Data to the Console

These set of instructions will go over how to display everything saved to your browser's local storage.

1. Inside the function you created in the tutorial setup, displayOutput, insert the following code block.

    ```js
    function displayOutput() {
        for (var i = 0; i < localStorage.length; i++) {

        }
    }
    ```

    This is a loop that will let you access every variable inside your local storage.

2. Add the following 2 lines into the for-loop.

    ```js
    var key = localStorage.key(i);
    var data = localStorage.getItem(key);
    ```

    This code, in tandem with the for-loop, lets you reference piece of data that you currently have stored in your browser's local storage.

3. Add this line after the "var data..." line that will allow you to view the data later on in the browser's Developer Tools console.

    ```js
    console.log(data);
    ```

    At this point, your JavaScript file contains the following:

    ```js
    function submitInput() {
    var input = document.getElementById("createInput").value;
    localStorage.setItem(input, JSON.stringify(input));
    }

    function displayOutput() {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var data = localStorage.getItem(key);
            console.log(data);
        }
    }
    ```

4. Open your HTML by dragging it onto a compatible browser.
5. Hit the 'Display data' button.
6. Right click on the webpage. This will open up a menu.
    <br> ![right-click](/images/reading/right-click.png)
6. Open your browser's Developer Tools by clicking 'Inspect', or your browser's equivalent.
    <br> ![access-developer-tools](/images/reading/access-developer-tools.png)
7. Navigate to the console tab.
    <br> ![access-console](/images/reading/access-console.png)
    At this point, you will see all data stored in your browser's local storage.
    <br> ![console-log](/images/reading/console-log.png)

    !!! warning "Warning"
        If your local storage data was wiped, or you have not completed our creating tutorial, the data may not display. If this is the case, please enter some new data and try again.

## Conclusion

Congratulations! If you made it to the end of this section with no issues, you have successfully read data on your web browser's local storage and displayed it using the browser's console.
