import React from 'react';

const CardSection = ({
    coinName,
    mCap24,
    ath,
    atl,
    sentiment,
    high24,
    low24,
    currentPrice
}) => {
    return (
        <div>
            <div
                className="fs-1 fw-bold m-3 text-Capitalize"
                style={{
                    fontFamily: 'NHaasGroteskDSPro-65Md',
                    marginTop: '3px !important',
                    marginBottom: '0px !important'
                }}
            >
                {coinName}
            </div>
            <section className="row m-3 mb-0" style={{ marginTop: '2px !important' }}>
                {[
                    { title: 'Market Cap 24Hrs', value: `${mCap24} %` },
                    { title: 'All Time High', value: `$${ath}` },
                    { title: 'All Time Low', value: `$${atl}` },
                    { title: 'Positive Sentiments', value: `${sentiment} %` },
                    { title: 'High 24Hrs', value: `$${high24}`, color: 'rgb(51, 255, 0)' },
                    { title: 'Low 24Hrs', value: `$${low24}`, color: 'rgb(255, 32, 32)' }
                ].map(({ title, value, color }, index) => (
                    <div
                        key={index}
                        className="card text-white text-center m-3"
                        style={{
                            width: '11rem',
                            backgroundColor: 'rgb(43, 43, 43)',
                            marginTop: '0px !important'
                        }}
                    >
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>
                                {title}
                            </h6>
                            <p
                                className="card-text fw-bold fs-5"
                                style={{ color: color || '#fcdf03' }}
                            >
                                {value}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
            <div>
                <div
                    className="text-white text-center"
                    style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md',
                        overflow: 'visible',
                        height: '2px',
                        marginTop: '1%'
                    }}
                >
                    Current Price
                </div>
                <div
                    style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md',
                        fontSize: '90px',
                        fontWeight: '700',
                        color: '#fcdf03',
                        textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}
                >
                    ${currentPrice}
                </div>
            </div>
        </div>
    );
};

export default CardSection;
