export const getValueStringFromLocation = (location: LocationDataProps): string => {
    return `${location.cityName},${location.stateCode ? location.stateCode + ',' : ''}${location.countryCode}`
}

export const convertLocationPropsToSelectFieldOptionItem = (location: LocationDataProps): SelectFieldOptionItemProps => ({
    label:`${location.cityName}, ${location.stateName ? location.stateName + ', ' : ''}${location.countryName}`,
    value: getValueStringFromLocation(location)
});
