import React from 'react';
import { HiShoppingBag } from "react-icons/hi2";

const Logo = () => {
    return (
        <span className='lg flex'><HiShoppingBag style={{ fontSize: '35px' }} />
            <p className='font-extrabold mt-2 ml-1'><b>SwiftShop</b></p></span>
    )
}

export default Logo

