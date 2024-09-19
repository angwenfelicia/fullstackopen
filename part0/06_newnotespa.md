## Exercise 0.6 New note in Single page app diagram

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: access the page


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.html
    activate server
    server-->>browser: get spa.html
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: get the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: get the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: get data.json
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server-->>browser: 404 Not Found
    deactivate server

    user->>browser: inputs text in text box
    user->>browser: clicks save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa.json
    activate server
    server-->>browser: [{ "content": "testing",  "date": "2024-09-19T22:20:47.955Z"}]
    deactivate server
    Note right of browser: server to browser: Status Code 201 Created
    browser->>browser: list updated without page reload
```