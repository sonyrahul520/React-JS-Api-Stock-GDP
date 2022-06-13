# Retail Spotlight Frontend Challenge


## Assumptions made in the Solution
From the Question, it was assumed that the solution needs to have homepage as well as GDP and Stock data of IBM are to be rendered in different web pages. 

For the weekly prices of the stock **IBM**, since the volume value was too high compared with the other four line graphs, it was visualized sqperately in a different graph for easy viewing. 

Several packages were installed as part of the project including 
1.  React-Router-dom at npm i -D react-router-dom@latest
2.  React Chart.js wrapper library npm i react-chartjs-2 chart.js
3. Chart.js npm install chart.js
4.  React-Material-UI for table npm install @mui/material @emotion/react @emotion/styled
5.  Moment library for changing the date format npm install moment --save  


![Screenshot 2022-06-13 103906](https://user-images.githubusercontent.com/39365623/173328195-ae0a12d8-8691-4d3e-a938-377a4c30db21.png)
![Web capture_13-6-2022_104029_localhost](https://user-images.githubusercontent.com/39365623/173328233-b5b42a7e-54f9-4755-957f-c8b45bff8416.jpeg)
![Web capture_13-6-2022_103955_localhost](https://user-images.githubusercontent.com/39365623/173328252-ab2ee934-5496-4683-977d-59e9b52e5ad7.jpeg)


## Brief

The goal of this assessment is to pull data from an api and render it in a way that informs the user what financial trends are happening in the market. 

The data plotted is Stock and GDP data from [Alphavantage](https://www.alphavantage.co/), documentation for their api can be found [here](https://www.alphavantage.co/documentation/). The APIKEY 'demo' can be used in all your requests for this exercise.


## Task One: 

1. Render the Economic Indicator of **GDP** in a table displaying the date and value in dollars. 
2. Render the weekly prices of the stock **IBM** in a table with date, open, high, low, close, and volume for each row.

For each of these tables, bear in mind the formatting of the data. Dates should be displayed in the format of 03/05/2022 and currency data should be rendered as money.  

## Task Two: 

1. Plot the Economic Indicator of **GDP** in a chart.
2. Plot the weekly prices of the stock **IBM** in a table with date, open, high, low, close, and volume as a time series.

## Bonus Task: 
This is a extra task that you should only undertake if you enjoying the challenge and are happy to spend the time.  

1. Add the ability to toggle on and off the various time series. For instance, I only want to see the opening price on the weekly price chart (rather than all 5 options).  
2. As you hover over rows in the table highlight like the corresponding plots of the chart to highlight and display the price information in the chart.    



## Prerequisites 
To undertake this challenge your computer will need the following installed: 

- Node v17.4.0
- NPM 8.3.1

## Getting Started
Clone this repo locally, once in the project directory, you can run:

- `npm install` : to install dependencies.
- `npm start` : to start the app in development mode. 

## Submitting your Solution
Uploaded to your personal github/bitbucket, make public and email us the link. 
