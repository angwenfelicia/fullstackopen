## Exercise 0.5 Single Page App Diagram

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
    Note right of browser: server to browser: Status Code 304
    deactivate server
```