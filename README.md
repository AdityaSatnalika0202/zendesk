This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Starting the Project

To start the appliction, run the following commands

npm install \
npm start

## Project URLS
Git Repo for React App - https://github.com/AdityaSatnalika0202/zendesk \
UI Deployed Link - https://zendesk.pages.dev/ \
Backend Deployment Link Health Check- https://eflask-app-zendesk.herokuapp.com/ \
Backend Deployment Get Ticket Data- https://eflask-app-zendesk.herokuapp.com/getData \



## Project Description

The Project has 2 components front-end (made in React) and back-end (made in python flask) \
The react app is deployed on Cloudfare and the Flask app is Deployed on Heroku 

1. The Flask API\
   The flask app has end point to fetch the tickets from Zendesk server using the API mentioned in the documentation 
   the endpoint is then exposed using heroku so that the UI can fetch the details. \
   We had to do this because CORS is blocked from JS, so we need to create a back end which could supply us the data


Q. Why did I chose python as my backend not java or golang or any other framework ? \
Ans. Two possible explainations , python is flexible and if we want to add more feature we can add (and also I am more comfortable in 
python than in java :P)
\
\
The other reason is the deployment process for python app is easy and I have build a complete pipeline of end to end deployment 
it means, I commit changes and it gets deployed in cloud 

\
but in java we have to create the war / jar package and deploy and the error which occurs in deployment arealso a bit difficult to figure
out as some bean is missing or env variable is not set etc.
\
So the logical answer was python :) and its easy to deploy on heroku 


2. The React App \
   The react app simply calls a fetch api to heroku servers and gets the data and displays it.\
   the app has 3 components , the ag grid , the ticket Details and the Header\
   \
   The ag grid component displays the select columns and has a on double click functionality which poulated the other\
   component i.e. the ticket Details\
\
   The header Component simply render a header\
\
   The ticket details component display all the fields of a ticket \\

Q. Why react ? \\
Ans. Because its good and more recently after react hooks its more felxible and scalable , why Ag Grid -> it can handle lots of data, has inbuilt customization , data & error handling 


    
