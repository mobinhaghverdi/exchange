import React from 'react';


const Currency = ({ price, image, name, priceper, price24, status }) => {




    return (
        <div className="table-child">
            <div className='d-flex'><div className='cr-icon'><img src={image} alt="" /></div> {name}</div>
            <div className={status === "-" ? 'dump' : 'pump'}> <i className={status === "-" ? 'fas fa-arrow-down' : 'fas fa-arrow-up'}></i> {price} USD</div>
            <div className={status === "-" ? 'dump' : 'pump'}><span>{status === "-" ? null : '+'}</span>{priceper}</div>
            <div>{price24}</div>
        </div>
    );
}

export default Currency;