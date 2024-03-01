import {useState} from "react";

type FetchingReturnType = [() => Promise<void>, boolean, string];
export const useFetching = (callback:any):FetchingReturnType => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetching = async () => {
        try {
            setIsLoading(true)

            await callback()
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setIsLoading(false)

        }

    }

    return [fetching, isLoading, error]


}