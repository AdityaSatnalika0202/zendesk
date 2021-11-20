This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the Project

To start the appliction, run the following commands

npm install \
npm start

## Project Description

The Project has 2 components front-end (made in React) and back-end (made in python flask) \
The react app is deployed on Cloudfare and the Flask app is Deployed on Heroku 

1. The Flask API\
   The flask app has end point to fetch the tickets from Zendesk server using the API mentioned in the documentation 
   the endpoint is then exposed using heroku so that the UI can fetch the details. \
   We had to do this because CORS is blocked from JS, so we need to create a back end which could supply us the data
2. The React App \
   The react app simply calls a fetch api to heroku servers and gets the data and displays it.\
   the app has 3 components , the ag grid , the ticket Details and the Header\
   \
   The ag grid component displays the select columns and has a on double click functionality which poulated the other\
   component i.e. the ticket Details\
\
   The header Component simply render a header\
\
   The ticket details component display all the fields of a ticket


    