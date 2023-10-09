export const getValueStringFromLocation = (location: LocationDataProps): string => {
    return `${location.cityName},${location.stateCode ? location.stateCode + ',' : ''}${location.countryCode}`
}

export const getLabelStringFromLocation = (location: LocationDataProps): string => {
    return `${location.cityName}, ${location.stateName ? location.stateName + ', ' : ''}${location.countryName}`
}

export const convertLocationPropsToSelectFieldOptionItem = (location: LocationDataProps): SelectFieldOptionItemProps => ({
    label: getLabelStringFromLocation(location),
    value: getValueStringFromLocation(location)
});
