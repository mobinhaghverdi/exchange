import React, { useEffect, useState } from 'react';
// import { InfinitySpin, Triangle } from 'react-loader-spinner';
import Nav from '../common/Nav';
import { getData } from '../services/API';
import Currency from './Currency';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Market = () => {

    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [LIMIT, setLIMIT] = useState(10)
    const [message, setMessage] = useState("Show More...")
    const [loader, setLoader] = useState(true)
    const [refresh, setRefresh] = useState(false)
    const [nothing, setNothing] = useState(false)
    useEffect(() => {
        setLoader(true)
        const fetchData = async () => {
            setLoader(true)

            return await getData()
        }
        fetchData()
            .then(res => {
                setLoader(false)
                setData(res.data)
                setList(res.data)
            })
            .catch(err => console.log(err))
    }, [refresh])




    const handleLimitation = () => {
        if (LIMIT <= data.length) {
            setLIMIT(LIMIT + 10)
        } else {
            setMessage("There Is No More!");
        }
    }


    const handleChangeList = (text) => {

        const filtered = list.filter(pr => pr.id.startsWith(text.toLowerCase()));

        setData(filtered);
        if (filtered.length === 0) {
            setNothing(true)
        } else {
            setNothing(false)
        }

    }


    const handleRefreshFeed = () => {
        setData([])
        setRefresh(!refresh)
    }
    return (
        <div>
            <Nav refreshFeed={handleRefreshFeed} />

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
                            {nothing ? <div className='warning'> <img src="./img/warn.png" alt="" /> <br /> There Is Not Such A Currency!!! </div> : null}
                            {data.slice(0, LIMIT).map(part => (

                                <Currency key={part.id} price={part.current_price} image={part.image} name={part.id} priceper={part.price_change_percentage_24h} status={part.price_change_percentage_24h.toString().charAt(0)} price24={part.market_cap_change_24h} />

                            ))}
                            {loader ? <Skeleton className='table-child' baseColor="#232931" highlightColor="#393E46" count={10} /> : null}

                            <div className={data.length <= 10 ? 'table-child more-table d-none' : 'table-child more-table'} onClick={handleLimitation}>
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