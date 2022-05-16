# RetailSpotlight Frontend Challenge

## Brief

The goal of this assessment is to pull data from an api and render it in a way that informs the user what trends are happening. The data you will be plotting is Stock and GDP data from [Alphavantage](https://www.alphavantage.co/), documentation for their api can be found [here](https://www.alphavantage.co/documentation/), The APIKEY 'demo' can be used in all your requests for this exercise.

At Retailspotlight we use libraries to help us do [charting](https://www.chartjs.org/) and rendering of [tables](https://mui.com/material-ui/react-table/), feel free to use them or other libraries you are familiar with: 

## Task One: 
I'm interested in seeing various economic indicators visuallised to aid my understanding and would like the following features:

1. Render the Economic Indicator of **GDP** in a table displaying the date and value in pounds sterling. 
2. Render the weekly prices of the stock **IBM** in a table with date, open, high, low, close, and volume for each row.

For each of these tables bear in mind the formatting of the data. Dates should be displayed in the format of 03/05/2022 and currency data should be rendered as money.  

## Task Two: 
Now we have the data in tabular I'd like the data plotted visually to aid my understanding:

1. Plot the Economic Indicator of **GDP** in a chart.
2. Plot the weekly prices of the stock **IBM** in a table with date, open, high, low, close, and volume as a time series.

### Bonus Task: 
This is a extra task that you should only undertake if you enjoying the challenge and are below  
1. Add the ability to toggle on and off the various time series. For instance I only want to see the opening price on the weekly price chart.  
2. As you hover over rows in the table highlight like the corresponding plots of the chart to highlight and display the price information in the chart.    

## Prerequites 
To undertake this challenge your computer will need the following installed: 
- Node v17.4.0
- NPM 8.3.1

## Getting Started
Clone this repo locally, once in the project directory, you can run:

- `npm install` : to install dependencies.
- `npm start` : to start the app in development mode. 

## Submitting your Solution
Uploaded to your personal github/bitbucket, make public and email us the link. 
