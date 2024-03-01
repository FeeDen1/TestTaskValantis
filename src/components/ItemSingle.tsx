import React, {FC} from 'react';
import {IItem} from "../types/IItem";


interface SingleItemProps {
    item: IItem;
    index: number;
}


const ItemSingle:FC<SingleItemProps> = ({item, index}) => {
    return (
        <div style={{display: "flex", border: '1px solid green', justifyContent:'space-between', alignItems:'center', gap:'20'}}>
            <div style={{display:'flex', alignItems: 'center', gap: 10}}>
                <h2>{index}.</h2>
                <h2>{item.id}:</h2>
                <h2>{item.product}</h2>

            </div>
            <div style={{display: 'flex', gap:20}}>
                {item.brand && <h2>Brand:{item.brand}</h2>}
                <h2 style={{marginRight: '20px'}}>{item.price}</h2>
            </div>

        </div>
    );
};

export default ItemSingle;