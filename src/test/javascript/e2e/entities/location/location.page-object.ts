import { element, by, promise, ElementFinder } from 'protractor';

export class LocationComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-location div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class LocationUpdatePage {
    pageTitle = element(by.id('jhi-location-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    streetAddressInput = element(by.id('field_streetAddress'));
    postalCodeInput = element(by.id('field_postalCode'));
    cityInput = element(by.id('field_city'));
    stateProvinceInput = element(by.id('field_stateProvince'));
    countrySelect = element(by.id('field_country'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setStreetAddressInput(streetAddress): promise.Promise<void> {
        return this.streetAddressInput.sendKeys(streetAddress);
    }

    getStreetAddressInput() {
        return this.streetAddressInput.getAttribute('value');
    }

    setPostalCodeInput(postalCode): promise.Promise<void> {
        return this.postalCodeInput.sendKeys(postalCode);
    }

    getPostalCodeInput() {
        return this.postalCodeInput.getAttribute('value');
    }

    setCityInput(city): promise.Promise<void> {
        return this.cityInput.sendKeys(city);
    }

    getCityInput() {
        return this.cityInput.getAttribute('value');
    }

    setStateProvinceInput(stateProvince): promise.Promise<void> {
        return this.stateProvinceInput.sendKeys(stateProvince);
    }

    getStateProvinceInput() {
        return this.stateProvinceInput.getAttribute('value');
    }

    countrySelectLastOption(): promise.Promise<void> {
        return this.countrySelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    countrySelectOption(option): promise.Promise<void> {
        return this.countrySelect.sendKeys(option);
    }

    getCountrySelect(): ElementFinder {
        return this.countrySelect;
    }

    getCountrySelectedOption() {
        return this.countrySelect.element(by.css('option:checked')).getText();
    }

    save(): promise.Promise<void> {
        return this.saveButton.click();
    }

    cancel(): promise.Promise<void> {
        return this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
