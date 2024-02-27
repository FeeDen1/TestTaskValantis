import React, {useEffect, useState} from 'react'

import './App.css';


import PostService from "./API/PostService";
import ItemSingle from "./components/ItemSingle";
import Loader from "./UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
import {uniqueArray} from "./utils/unique_array";


function App() {
    const {fetching, isLoading, error} =
        useFetching(async () => {
             const response = await PostService.getIDs({
                        action: 'get_ids',

                    }
                )
            }
        )

    useEffect(() => {
      fetching()
    },[])



    return (
        <div className="App">
            {error && <h1 style={{color: 'red'}}>Произошла ошибка!</h1>}

            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}><Loader/></div>
                : <ItemSingle item={{
                    id: '11',
                    brand: 'fdsfds',
                    price: '111.2',
                    product: 'fdfsd'
                }} index={1}/>
            }

        </div>
    );
}

export default App;
