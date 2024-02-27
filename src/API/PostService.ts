

import {getAPI_KEY} from "../utils/API_KEY";
import {uniqueArray} from "../utils/unique_array";


export default class PostService {
    static async getIDs(params:object = {action: 'get_ids'}) {
        await fetch("http://api.valantis.store:40000/", {
            method: 'POST',
            headers: getAPI_KEY(),
            body: JSON.stringify(params),
        }).then( res => {
            res.json().then(results =>
            {
                if (results !== undefined) {
                    console.log(uniqueArray(results.result))
                    return uniqueArray(results.result) // удаляю все повторяющиеся айдишники, оставляя только первые встречающиеся
                }
            })
        })
    }
}