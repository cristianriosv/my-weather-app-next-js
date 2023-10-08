import useLocalStorage from "@/shared/hooks/useLocalStorage";
import { LOCAL_STORAGE_KEY_SELECTED_LOCATION } from "@/shared/constants/general";

const useCacheLastSelectedLocation = () => {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const lastSelectedLocation = getLocalStorage(LOCAL_STORAGE_KEY_SELECTED_LOCATION) || '';

    const updateLastSelectedLocation = (selectedLocation: string) => {
        setLocalStorage(LOCAL_STORAGE_KEY_SELECTED_LOCATION, selectedLocation);
    };

    return { lastSelectedLocation, updateLastSelectedLocation };
};

export default useCacheLastSelectedLocation;
