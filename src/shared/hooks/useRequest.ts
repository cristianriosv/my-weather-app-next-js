import { useState } from "react";
import axios from "axios";

const useRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>();
    const [data, setData] = useState<any>();

    const getData = (url: string): void => {
        setIsLoading(true);
        setError(undefined);
        axios.get(url)
            .then((response) => {
                setIsLoading(false);
                setData(response.data);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
                setData(undefined);
            });
    };

    return {
        getData,
        isLoading,
        error,
        data
    }
};

export default useRequest;