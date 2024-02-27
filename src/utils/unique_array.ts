export const uniqueArray = (array:Array<string>) => {
    return array.filter((value,index,self) => {
        return self.indexOf(value) === index;
    })
}

