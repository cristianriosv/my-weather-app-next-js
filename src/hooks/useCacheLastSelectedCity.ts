import useLocalStorage from "./useLocalStorage";
import { LOCAL_STORAGE_KEY_SELECTED_CITY } from "@/constants/general";

const useCacheLastSelectedCity = () => {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const lastSelectedCity = getLocalStorage(LOCAL_STORAGE_KEY_SELECTED_CITY) || '';

    const updateLastSelectedCity = (city: string) => {
        setLocalStorage(LOCAL_STORAGE_KEY_SELECTED_CITY, city);
    };

    return { lastSelectedCity, updateLastSelectedCity };
};

export default useCacheLastSelectedCity;
