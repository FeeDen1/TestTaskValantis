import {IItem} from "../types/IItem";

export const uniqueIdForStrings = (array:string[]) => {
    return array.filter((value,index,self) => {
        return self.indexOf(value) === index;
    })
}

export const uniqueIdForObjects = (array:IItem[], getField: (item: IItem) => any) => {

    return array.filter((value, index, self) => {
        const fieldValue = getField(value);
        return self.findIndex(item => getField(item) === fieldValue) === index;
    });
}

