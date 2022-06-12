import React, { useState, useEffect } from 'react';

const DataStockVal = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [stockData, setData] = useState([]);

    useEffect(() => {
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <ul>
                    {
                        stockData.map(value => (
                            <li key={value["Meta Data"]}> {value["1. Information"]}</li>
                        ))
                    }
                </ul>
              

            </div>)
      


    }

}

export default DataStockVal;