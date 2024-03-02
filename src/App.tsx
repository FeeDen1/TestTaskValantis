import React, {useEffect, useMemo, useState} from 'react'

import './App.css';


import ItemService from "./API/ItemService";
import Loader from "./UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount} from "./utils/pages";
import {createPages} from "./utils/pagesCreators";
import {IItem} from "./types/IItem";
import {uniqueIdForObjects} from "./utils/unique_array";
import ItemsList from "./components/ItemsList";
import FilterInputs from "./components/FilterInputs";


function App() {
    const [data, setData] = useState<string[]>([])
    const [totalPageNumber, setTotalPageNumber] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItems, setCurrentItems] = useState<IItem[]>([])
    const pages: number[] = []
    const [sortValue, setSortValue] = useState<string | number>('')
    const [sortType, setSortType] = useState<string>('')


    createPages(pages, totalPageNumber, currentPage)


    const [fetchingIds, idsIsLoading, idsError] =
        useFetching(async () => {
                const response = await ItemService.getIDs({
                        action: 'get_ids',
                    }
                )
                setData(response)
                let totalCount = getPageCount(response.length, 50)
                setTotalPageNumber(totalCount)


            }
        )


    const [fetchingProdInfo, itemIsLoading, itemError] =
        useFetching(async () => {
            const responseInfo = await ItemService.getItems({
                    action: 'get_items',
                    params: {
                        "ids": data.slice(50 * (currentPage - 1), 50 * currentPage)
                    }
                }
            )
            setCurrentItems(uniqueIdForObjects(responseInfo.result, (item) => item.id))
        })
    const [fetchingFilteredIds, filteredIdsLoading, filteredIdsError] =
        useFetching(async () => {
                const response = await ItemService.getIDs({
                        action: 'filter',
                        params: {[sortType]: sortValue}
                    }
                )
                setData(response)
                let totalCount = getPageCount(response.length, 50)
                setTotalPageNumber(totalCount)
            }
        )


    useEffect(() => {
        fetchingIds()
    }, []);


    useMemo(() => {
        if (data.length > 0) {
            fetchingProdInfo()
        }
    }, [data, currentPage])

    useMemo(() => {
        if (sortValue && sortType) {
            fetchingFilteredIds()
        }
        setSortType('')
    }, [sortType]);


    return (
        <div className="App">
            {idsIsLoading || itemIsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}><Loader/></div>
                :
                (idsError || filteredIdsError)
                    ?
                    <div style={{textAlign: 'center'}}>
                        <h1 className='error'>Произошла ошибка!</h1>
                        <button className='btn' onClick={fetchingIds}>
                            Повторить запрос
                        </button>
                    </div>
                    :
                    itemError
                        ?

                        <div style={{textAlign: 'center'}}>
                            <h1 className='error'>Произошла ошибка с загрузкой страницы!</h1>
                            <button className='btn' onClick={fetchingProdInfo}>
                                Повторить запрос
                            </button>
                        </div>
                        :
                        <div>

                            <FilterInputs sortValue={sortValue} setSortValue={setSortValue} setSortType={setSortType}/>
                            <h1 style={{textAlign: 'center'}}>Список товаров</h1>
                            <ItemsList items={currentItems}/>
                            <div className='pages'>
                                {pages.length !== 1 && pages.map((index) =>
                                        <span
                                            key={index}
                                            className={currentPage === index ? "current-page" : "page"}
                                            onClick={() => setCurrentPage(index)}
                                        >
                                    {index}
                            </span>
                                )}
                            </div>
                        </div>
            }
        </div>
    );
}

export default App;
