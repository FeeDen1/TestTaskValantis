import React, {FC} from 'react';
import {IItem} from "../types/IItem";


interface SingleItemProps {
    item: IItem;
    index: number;
}


const ItemSingle:FC<SingleItemProps> = ({item, index}) => {
    return (
        <div style={{display: "flex"}}>
            <p>{index}</p>
            <p>{item.id}</p>
            <h1>{item.product}</h1>
            <p>{item.brand}</p>
            <p>{item.price}</p>
        </div>
    );
};

export default ItemSingle;