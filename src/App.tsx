import React, {useEffect, useMemo, useState} from 'react'

import './App.css';


import ItemService from "./API/ItemService";
import ItemSingle from "./components/ItemSingle";
import Loader from "./UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount} from "./utils/pages";
import {createPages} from "./utils/pagesCreators";
import {IItem} from "./types/IItem";
import {uniqueIdForStrings, uniqueIdForObjects} from "./utils/unique_array";
import ItemsList from "./components/ItemsList";
import {getAPI_KEY} from "./utils/API_KEY";


function App() {
    const [data, setData] = useState<string[]>([])
    const [totalPageNumber, setTotalPageNumber] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [currentItems, setCurrentItems] = useState<IItem[]>([])
    const pages: number[] = []


    createPages(pages, totalPageNumber, currentPage)


    const [fetchingAllIds, idsIsLoading, idsError] =
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


    useEffect(() => {
        fetchingAllIds()
    }, []);


    useMemo(() => {
        if (data.length > 0) {
            fetchingProdInfo()
        }
    }, [data, currentPage])


    return (

        <div className="App">


            {idsError && <h1 style={{color: 'red', textAlign: 'center'}}>Произошла ошибка!</h1>}


            {idsIsLoading || itemIsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}><Loader/></div>
                :
                <div>
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
