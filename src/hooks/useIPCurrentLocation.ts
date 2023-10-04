import { useEffect, useState } from "react";
import useRequest from "./useRequest";
import { convertIpLocationToLocationDataProps } from "@/utils/convertIpLocationToLocationDataProps";

const useIPCurrentLocation = () => {
    const [IPCurrentLocation, setIPCurrentLocation] = useState<LocationDataProps | null>(null);
    const { getData } = useRequest();

    useEffect(() => {
        getData('http://api.ipstack.com/check?access_key=c60d00663af0a51d1d07c175284e5c3b')
            .then((data) => {
                setIPCurrentLocation(convertIpLocationToLocationDataProps(data));
            })
    }, []);

    return { IPCurrentLocation };
};

export default useIPCurrentLocation;