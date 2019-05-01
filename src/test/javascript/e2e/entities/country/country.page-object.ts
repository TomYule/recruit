import { element, by, promise, ElementFinder } from 'protractor';

export class CountryComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-country div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CountryUpdatePage {
    pageTitle = element(by.id('jhi-country-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    countryNameInput = element(by.id('field_countryName'));
    regionSelect = element(by.id('field_region'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setCountryNameInput(countryName): promise.Promise<void> {
        return this.countryNameInput.sendKeys(countryName);
    }

    getCountryNameInput() {
        return this.countryNameInput.getAttribute('value');
    }

    regionSelectLastOption(): promise.Promise<void> {
        return this.regionSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    regionSelectOption(option): promise.Promise<void> {
        return this.regionSelect.sendKeys(option);
    }

    getRegionSelect(): ElementFinder {
        return this.regionSelect;
    }

    getRegionSelectedOption() {
        return this.regionSelect.element(by.css('option:checked')).getText();
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
