import md5 from 'md5'


export const getAPI_KEY = () => {
    const getMonths = () => {
        if (new Date().getMonth() < 10) {
            return `0${(new Date().getMonth() + 1).toString()}`
        } else {
            return (new Date().getMonth() + 1).toString()
        }
    }
    const getDay = () => {
        const day = new Date().getUTCDate()
        if (day < 10) {
            return `0${new Date().getUTCDate()}`
        }
    }
    const currentDate: string = new Date().getUTCFullYear() + getMonths() + getDay()

    return {
        "X-Auth": md5(`Valantis_${currentDate}`),
        'Content-Type': 'application/json'
    }
}
