import { useEffect, useState } from "react";
import useRequest from "./useRequest";
import { convertIpGeolocationToLocationDataProps } from "@/shared/utils/convertExternalServicesDataToClientProps";
import { IP_LOCATION_CHECK_API_URL } from "@/shared/constants/externalApi";

const useCurrentLocationFromIP = () => {
    const [IPCurrentLocation, setIPCurrentLocation] = useState<LocationDataProps | null>(null); 
    const { getData, data, error } = useRequest();

    useEffect(() => {
        if (!data && !error) {
            getData(IP_LOCATION_CHECK_API_URL);
        } else if (data) {
            setIPCurrentLocation(convertIpGeolocationToLocationDataProps(data));
        }
    }, [data, error]);

    return { IPCurrentLocation };
};

export default useCurrentLocationFromIP;