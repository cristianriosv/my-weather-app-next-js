export const convertIpLocationToLocationDataProps = (ipLocation: IpGeolocation): LocationDataProps => (
    {
        cityName: ipLocation.city,
        latitude: ipLocation.latitude,
        longitude: ipLocation.longitude
    }
);
