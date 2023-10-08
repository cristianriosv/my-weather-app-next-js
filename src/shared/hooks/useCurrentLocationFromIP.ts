import { useEffect, useState } from "react";
import useRequest from "./useRequest";
import { convertIpLocationToLocationDataProps } from "@/shared/utils/convertExternalServicesDataToClientProps";
import { IP_LOCATION_CHECK_API_URL } from "@/shared/constants/externalApi";

const useCurrentLocationFromIP = () => {
    const [IPCurrentLocation, setIPCurrentLocation] = useState<LocationDataProps | null>(null);
    const { getData } = useRequest();

    useEffect(() => {
        getData(IP_LOCATION_CHECK_API_URL)
            .then((data) => {
                setIPCurrentLocation(convertIpLocationToLocationDataProps(data));
            })
    }, []);

    return { IPCurrentLocation };
};

export default useCurrentLocationFromIP;