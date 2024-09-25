import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const ChartSection = ({ Id, MarketCap, priceChange24, TotVol, Circulating, twitterF }) => {
    const [chartData, setChartData] = useState({
        Price: {
            options: {
                chart: { id: 'area-datetime' },
                grid: { show: false },
                title: {
                    text: "Market Price (USD)",
                    style: { fontSize: '14px', fontWeight: 'bold', color: "#fcdf03" }
                },
                stroke: { curve: 'smooth' },
                xaxis: { type: "datetime" },
                dataLabels: { enabled: false },
                yaxis: { show: false },
                colors: ["#fcdf03"],
                tooltip: {
                    y: {
                        formatter: (value) => value.toFixed(2)
                    },
                    theme: "dark"
                },
                selection: 365,
            },
            series: [{ name: 'Market Price', data: [[1645837250522, 39804.53519937617]] }]
        },
        Market_Cap: {
            options: {
                grid: { show: false },
                title: {
                    text: "Market Cap (USD)",
                    style: { fontSize: '14px', fontWeight: 'bold', color: '#ff69f5' }
                },
                stroke: { curve: 'smooth' },
                xaxis: { type: "datetime" },
                dataLabels: { enabled: false },
                yaxis: { show: false },
                colors: ["#ff69f5"],
                tooltip: {
                    y: {
                        formatter: (value) => value.toFixed(2)
                    },
                    theme: "dark"
                }
            },
            series: [{ name: 'Market Cap (USD)', data: [[1645837250522, 39804.53519937617]] }]
        },
        Tot_Vol: {
            options: {
                grid: { show: false },
                title: {
                    text: "Market Volume",
                    style: { fontSize: '14px', fontWeight: 'bold', color: "#00ffea" }
                },
                stroke: { curve: 'smooth' },
                xaxis: { type: "datetime" },
                dataLabels: { enabled: false },
                yaxis: { show: false },
                colors: ["#00ffea"],
                tooltip: {
                    y: {
                        formatter: (value) => value.toFixed(2)
                    },
                    theme: "dark"
                }
            },
            series: [{ name: "Market Volume", data: [[1645837250522, 39804.53519937617]] }]
        }
    });

    const [prevId, setPrevId] = useState(Id);
    const [selection, setSelection] = useState(chartData.Price.options.selection);

    const fetchData = async () => {
        const url = `https://api.coingecko.com/api/v3/coins/${Id}/market_chart?vs_currency=usd&days=${selection}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-fjnJc5cKGrhZxJqFeNBWz3ZR' // Use your own API key
            }
        };

        try {
            let response = await fetch(url, options);
            let jsonChartData = await response.json();
            
            setChartData(prevState => ({
                ...prevState,
                Price: {
                    options: prevState.Price.options,
                    series: [{ name: 'Market Price', data: jsonChartData.prices }]
                },
                Market_Cap: {
                    options: prevState.Market_Cap.options,
                    series: [{ name: 'Market Cap (USD)', data: jsonChartData.market_caps }]
                },
                Tot_Vol: {
                    options: prevState.Tot_Vol.options,
                    series: [{ name: 'Market Volume', data: jsonChartData.total_volumes }]
                }
            }));
        } catch (err) {
            console.error('Error fetching data: ' + err);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, [Id, selection]);

    const handleSelectionChange = (days) => {
        setSelection(days);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col" style={{ maxWidth: '610px' }}>
                        <div id="chart">
                            <div className="toolbar">
                                <button id="one_month" onClick={() => handleSelectionChange(1)}>1D</button>
                                &nbsp;
                                <button id="six_months" onClick={() => handleSelectionChange(7)}>1W</button>
                                &nbsp;
                                <button id="one_year" onClick={() => handleSelectionChange(30)}>1M</button>
                                &nbsp;
                                <button id="ytd" onClick={() => handleSelectionChange(182)}>6M</button>
                                &nbsp;
                                <button id="all" onClick={() => handleSelectionChange(365)}>1Y</button>
                            </div>
                            <Chart
                                options={chartData.Price.options}
                                series={chartData.Price.series}
                                type="area"
                                height='400'
                                width='600'
                            />
                        </div>
                    </div>
                    <div className="col" style={{ maxWidth: '200px' }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Market Cap </h6>
                            <p className="card-text fw-bold" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                                $ {MarketCap}
                            </p>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Price Change 24hrs </h6>
                            <p className="card-text fw-bold" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                                $ {priceChange24}
                            </p>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Total Volume </h6>
                            <p className="card-text fw-bold" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                                $ {TotVol}
                            </p>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Circulating Supply</h6>
                            <p className="card-text fw-bold" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                                {Circulating}
                            </p>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Twitter Followers</h6>
                            <p className="card-text fw-bold" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                                {twitterF}
                            </p>
                        </div>
                    </div>
                    <div className="col" style={{ maxWidth: '310px' }}>
                        <div>
                            <Chart
                                options={chartData.Market_Cap.options}
                                series={chartData.Market_Cap.series}
                                type="line"
                                height='200'
                                width='300'
                            />
                        </div>
                        <div>
                            <Chart
                                options={chartData.Tot_Vol.options}
                                series={chartData.Tot_Vol.series}
                                type="line"
                                height='200'
                                width='300'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartSection;
