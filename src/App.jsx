import React, { useState, useEffect } from 'react';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Header from './components/Header';

const App = () => {
    const [id, setId] = useState("bitcoin");
    const [data, setData] = useState({});

    const fetchData = async () => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-fjnJc5cKGrhZxJqFeNBWz3ZR' // Use your own API key here
            }
        };
        try {
            let response = await fetch(url, options);
            let jsonData = await response.json();
            setData(jsonData);
        } catch (err) {
            console.error('Error fetching data: ' + err);
        }
    };

    const handleSubmit = async (event) => {
        const selectedId = event.target.value;
        setId(selectedId);
        fetchData();
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(() => fetchData(), 30000);
        return () => clearInterval(interval);
    }, [id]); // Dependency array includes id to refetch when it changes

    return (
        <div>
            <Header handle_Submit={handleSubmit} />
            <CardSection
                coinName={data.name}
                currentPrice={data.market_data ? data.market_data.current_price["usd"] : ""}
                mCap24={data.market_data ? data.market_data.market_cap_change_percentage_24h : ""}
                ath={data.market_data ? data.market_data.ath.usd : ""}
                atl={data.market_data ? data.market_data.atl.usd : ""}
                sentiment={data.sentiment_votes_up_percentage}
                high24={data.market_data ? data.market_data.high_24h["usd"] : ""}
                low24={data.market_data ? data.market_data.low_24h["usd"] : ""}
            />
            <ChartSection
                Id={id}
                priceChange24={data.market_data ? data.market_data.price_change_24h_in_currency.usd : ""}
                MarketCap={data.market_data ? data.market_data.market_cap.usd : ""}
                TotVol={data.market_data ? data.market_data.total_volume.usd : ""}
                Circulating={data.market_data ? data.market_data.circulating_supply : ""}
                twitterF={data.community_data ? data.community_data.twitter_followers : ""}
            />
        </div>
    );
};

export default App;
