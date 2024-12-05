# Project Structure

```
/PROJECTS/FRONTEND/
│
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   └── app.js
└── README.md
```

# How to Use HTML, CSS, and JS Files

1. **HTML**: The main structure of your web page is defined in `index.html`.
2. **CSS**: Styles for your web page are defined in `styles/style.css`. Link it in your HTML file:
    ```html
    <link rel="stylesheet" href="styles/style.css">
    ```
3. **JavaScript**: Add interactivity using `scripts/app.js`. Link it in your HTML file:
    ```html
    <script src="scripts/app.js"></script>
    ```

# Using Axios for API Requests

1. **Install Axios**:
    ```html
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    ```

2. **Making a GET Request**:
    ```javascript
    axios.get('https://api.example.com/data')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    ```

3. **Making a POST Request**:
    ```javascript
    axios.post('https://api.example.com/data', {
        key1: 'value1',
        key2: 'value2'
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
    ```

# Free APIs to Use

1. **JSONPlaceholder**: Fake Online REST API for Testing and Prototyping.
    ```javascript
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data);
      });
    ```

2. **OpenWeatherMap**: Weather Data API.
    ```javascript
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
      .then(response => {
        console.log(response.data);
      });
    ```

# Handling LeetCode APIs with Proxy

To avoid CORS issues, you can use a proxy server. Here is an example using a simple Node.js proxy:

1. **Set up a Proxy Server**:
    ```javascript
    const express = require('express');
    const axios = require('axios');
    const app = express();
    const port = 3000;

    app.get('/leetcode', (req, res) => {
      axios.get('https://leetcode.com/api/problems/all/')
        .then(response => {
          res.json(response.data);
        })
        .catch(error => {
          res.status(500).send('Error fetching data');
        });
    });

    app.listen(port, () => {
      console.log(`Proxy server running at http://localhost:${port}`);
    });
    ```

2. **Fetch Data from Proxy**:
    ```javascript
    axios.get('http://localhost:3000/leetcode')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from proxy:', error);
      });
    ```
