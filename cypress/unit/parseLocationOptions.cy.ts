import { getValueStringFromLocation, getLabelStringFromLocation } from '../../src/features/currentWeather/utils/parseLocationOptions';

describe('parseLocationOptions', () => {
    const locationWithState: LocationDataProps = {
        cityName: 'city',
        stateCode: 'state',
        countryCode: 'country',
        latitude: 0,
        longitude: 0,
        stateName: 'state',
        countryName: 'country'
    };
    const locationWithoutState: LocationDataProps = {
        cityName: 'city',
        countryCode: 'country',
        latitude: 0,
        longitude: 0,
        countryName: 'country'
    };

    it('should return the correct string value for a location with a state code', () => {
        const expectedValue = `${locationWithState.cityName},${locationWithState.stateCode},${locationWithState.countryCode}`;
        expect(getValueStringFromLocation(locationWithState)).equals(expectedValue);
    })
    it('should return the correct string value for a location without a state code', () => {
        const expectedValue = `${locationWithoutState.cityName},${locationWithoutState.countryCode}`;
        expect(getValueStringFromLocation(locationWithoutState)).equals(expectedValue);
    })
    it('should return the correct string label for a location with a state name', () => {
        const expectedValue = `${locationWithState.cityName}, ${locationWithState.stateName}, ${locationWithState.countryName}`;
        expect(getLabelStringFromLocation(locationWithState)).equals(expectedValue);
    })
    it('should return the correct string label for a location without a state name', () => {
        const expectedValue = `${locationWithoutState.cityName}, ${locationWithoutState.countryName}`;
        expect(getLabelStringFromLocation(locationWithoutState)).equals(expectedValue);
    })
});