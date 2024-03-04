

import {getAPI_KEY} from "../utils/API_KEY";
import {uniqueIdForStrings} from "../utils/unique_array";



export default class ItemService {
    static async getIDs(params:object = {action: 'get_ids'}):Promise<string[]> {
        const response = await fetch("https://api.valantis.store:41000/", {
            method: 'POST',
            headers: getAPI_KEY(),
            body: JSON.stringify(params),
        })
        const data = await response.json();
        return uniqueIdForStrings(data.result);
    };
    static async getItems(params:object) {
        const response = await fetch("https://api.valantis.store:41000/", {
            method: 'POST',
            headers: getAPI_KEY(),
            body: JSON.stringify(params)
        })
        const idInfo = await response.json();
        return idInfo;

    };

}