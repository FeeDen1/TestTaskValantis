import React, {Dispatch, FC, SetStateAction} from 'react';

interface FilterInputsProps {
    sortValue: string | number;
    setSortValue: Dispatch<SetStateAction<string | number>>;
    setSortType: Dispatch<SetStateAction<string>>
}
const FilterInputs:FC<FilterInputsProps> = ({sortValue,setSortValue,setSortType}) => {
    const clickHandler = (type:string) => {
        setSortType(type)
    }
    return (
        <div style={{display: 'flex', justifyContent:'space-evenly', alignItems:'center', marginBottom: '5px'}}>
            <div>
                <input

                    onChange={event => setSortValue(event.target.value)}
                    type='text'
                    placeholder='Сортировка по названию'
                />
                <button className='btn'
                        type='button'
                        onClick={() => clickHandler('product')}
                >
                    Сортировка по названию
                </button>


            </div>

            <div>
                <input
                    onChange={event => setSortValue(event.target.value)}
                    type='text'
                    placeholder='Сортировка по брэнду'
                />
                <button className='btn'
                        type='button'
                        onClick={() => clickHandler('brand')}
                >
                    Сортировка по брэнду
                </button>


            </div>

            <div>
                <input
                    onChange={event => setSortValue(parseInt(event.target.value))}
                    type='number'
                    placeholder='Сортировка по цене'
                />
                <button className='btn'
                        type="button"
                        onClick={() => clickHandler('price')}
                >
                    Сортировка по цене
                </button>
            </div>
        </div>
    );
};

export default FilterInputs;