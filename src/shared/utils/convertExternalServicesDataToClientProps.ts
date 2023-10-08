export const convertIpGeolocationToLocationDataProps = (ipLocation: IpGeolocation): LocationDataProps => (
    {
        cityName: ipLocation.city,
        latitude: ipLocation.latitude,
        longitude: ipLocation.longitude,
        countryName: ipLocation.country_name,
        stateName: ipLocation.region_name,
        countryCode: ipLocation.country_code,
        stateCode: ipLocation.region_code
    }
);
