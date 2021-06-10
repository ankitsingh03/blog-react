# Getting Started with Create React App

### To this before runing this project
- create json-server
- `https://www.youtube.com/watch?v=59z1_3-vTOk` follow this link to create json-server
- here I have added the step also:
- create folder run this command in dir
- `npm init --yes`
- `npm install --save json-server`
- change the script text in package.json with this 
"scripts": {
    "start":"json-server -p 3006 -w db.json"
  },
  
- `npm start`

- In db.json add the below code.
- user id and password for login are there you add more login and password.
`{
  "blogs": [],
  "users": [
    {
      "user": "ankit",
      "password": "ankit",
      "id": 1
    },
    {
      "user": "pradeep",
      "password": "pradeep",
      "id": 2
    }
  ]
}`

### open you project dir
- `cd into project dir`
- `npm install`
- `npm start`
- Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

