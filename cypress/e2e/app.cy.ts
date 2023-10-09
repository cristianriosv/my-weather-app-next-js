import { DEFAULT_LOCATIONS } from "../../src/features/currentWeather/constants/locations";
import { CURRENT_WEATHER_LABELS } from "../../src/features/currentWeather/constants/labels"

describe('Weather app', () => {
  it('should navigate to the main page and see the current weather section with current ip location and current weather', () => {
    cy.visit('/')
    const mainContainer = cy.get('main');
    mainContainer.should('contain.text', CURRENT_WEATHER_LABELS.SECTION_TITLE);
    mainContainer.should('contain.text', CURRENT_WEATHER_LABELS.CURRENT_LOCATION);
    mainContainer.should('contain.text', CURRENT_WEATHER_LABELS.FEELS_LIKE);
    mainContainer.should('contain.text', CURRENT_WEATHER_LABELS.HUMIDITY);
    mainContainer.should('contain.text', CURRENT_WEATHER_LABELS.WIND);
    mainContainer.should('contain.text', CURRENT_WEATHER_LABELS.PREASSURE);
  })
  it('should fetch a different location and see the current weather', () => {
    cy.visit('/');
    const selectField = cy.get('select');
    const LOCATION_INDEX_TO_SELECT = DEFAULT_LOCATIONS[DEFAULT_LOCATIONS.length - 1];
    const LOCATION_LABEL_TO_SELECT = `${LOCATION_INDEX_TO_SELECT.cityName}, ${LOCATION_INDEX_TO_SELECT.stateName}, ${LOCATION_INDEX_TO_SELECT.countryName}`;
    const LOCATION_VALUE_TO_SELECT = `${LOCATION_INDEX_TO_SELECT.cityName},${LOCATION_INDEX_TO_SELECT.stateCode},${LOCATION_INDEX_TO_SELECT.countryCode}`;
    selectField.select(LOCATION_LABEL_TO_SELECT);
    selectField.should('have.value', LOCATION_VALUE_TO_SELECT);
    cy.get('main').should('contain.text', CURRENT_WEATHER_LABELS.FEELS_LIKE);
  });
})