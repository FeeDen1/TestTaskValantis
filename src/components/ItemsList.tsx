import React, {FC} from 'react';
import {IItem} from "../types/IItem";
import ItemSingle from "./ItemSingle";

interface ItemsListProps {
    items: IItem[];
}
const ItemsList:FC<ItemsListProps> = (items) => {
    return (
        <div>
            {items.items.map((item,index) =>
                <ItemSingle key={item.id} item={item} index={index + 1}/>
            )}
        </div>
    );
};

export default ItemsList;