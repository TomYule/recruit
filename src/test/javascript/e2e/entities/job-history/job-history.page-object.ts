import { element, by, promise, ElementFinder } from 'protractor';

export class JobHistoryComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-job-history div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class JobHistoryUpdatePage {
    pageTitle = element(by.id('jhi-job-history-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    startDateInput = element(by.id('field_startDate'));
    endDateInput = element(by.id('field_endDate'));
    languageSelect = element(by.id('field_language'));
    jobSelect = element(by.id('field_job'));
    departmentSelect = element(by.id('field_department'));
    employeeSelect = element(by.id('field_employee'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setStartDateInput(startDate): promise.Promise<void> {
        return this.startDateInput.sendKeys(startDate);
    }

    getStartDateInput() {
        return this.startDateInput.getAttribute('value');
    }

    setEndDateInput(endDate): promise.Promise<void> {
        return this.endDateInput.sendKeys(endDate);
    }

    getEndDateInput() {
        return this.endDateInput.getAttribute('value');
    }

    setLanguageSelect(language): promise.Promise<void> {
        return this.languageSelect.sendKeys(language);
    }

    getLanguageSelect() {
        return this.languageSelect.element(by.css('option:checked')).getText();
    }

    languageSelectLastOption(): promise.Promise<void> {
        return this.languageSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }
    jobSelectLastOption(): promise.Promise<void> {
        return this.jobSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    jobSelectOption(option): promise.Promise<void> {
        return this.jobSelect.sendKeys(option);
    }

    getJobSelect(): ElementFinder {
        return this.jobSelect;
    }

    getJobSelectedOption() {
        return this.jobSelect.element(by.css('option:checked')).getText();
    }

    departmentSelectLastOption(): promise.Promise<void> {
        return this.departmentSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    departmentSelectOption(option): promise.Promise<void> {
        return this.departmentSelect.sendKeys(option);
    }

    getDepartmentSelect(): ElementFinder {
        return this.departmentSelect;
    }

    getDepartmentSelectedOption() {
        return this.departmentSelect.element(by.css('option:checked')).getText();
    }

    employeeSelectLastOption(): promise.Promise<void> {
        return this.employeeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    employeeSelectOption(option): promise.Promise<void> {
        return this.employeeSelect.sendKeys(option);
    }

    getEmployeeSelect(): ElementFinder {
        return this.employeeSelect;
    }

    getEmployeeSelectedOption() {
        return this.employeeSelect.element(by.css('option:checked')).getText();
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
