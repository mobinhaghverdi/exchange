import React, { useEffect, useState } from 'react';
import Nav from '../common/Nav';
import { getData } from '../services/API';
import Currency from './Currency';

const Market = () => {

    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [LIMIT, setLIMIT] = useState(7)
    const [message, setMessage] = useState("Show More...")

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await getData();
            setData(data)
            setList(data)
            // console.log(data);
        }
        fetchData()
            .catch(err => console.log(err))

        
    }, [])




    const handleLimitation = () => {
        if (LIMIT <= data.length) {
            setLIMIT(LIMIT + 7)
        } else {
            setMessage("There Is No More!")
        }
    }


    const handleChangeList = async (text) => {

        const filtered = list.filter(pr => pr.id.startsWith(text))
        setData(filtered)
    }



    return (
        <div>
            <Nav />
            <div className="container">
                <div className="market">
                    <div className="search-box">
                        <label htmlFor="name"><i className='fas fa-search'></i></label>
                        <input autoComplete='off' onChange={(e) => handleChangeList(e.target.value)} placeholder='Search...' type="text" id='name' />
                    </div>
                    <div className="market-list">
                        <div className="table-head">
                            <div>Currency</div>
                            <div>Last Price</div>
                            <div>24H Change</div>
                            <div>Amount (24h)</div>
                        </div>
                        <div className="table-body">

                            {data.slice(0, LIMIT).map(part => (
                                <Currency key={part.id} price={part.current_price} image={part.image} name={part.id} priceper={part.price_change_percentage_24h} status={part.price_change_percentage_24h.toString().charAt(0)} price24={part.market_cap_change_24h} />
                            ))}
                            <div className={data.length <= 7 ? 'table-child more-table d-none' : 'table-child more-table'} onClick={handleLimitation}>
                                <div>{message}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Market;