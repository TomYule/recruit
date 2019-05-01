import { element, by, promise, ElementFinder } from 'protractor';

export class EmployeeComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-employee div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class EmployeeUpdatePage {
    pageTitle = element(by.id('jhi-employee-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    firstNameInput = element(by.id('field_firstName'));
    lastNameInput = element(by.id('field_lastName'));
    emailInput = element(by.id('field_email'));
    phoneNumberInput = element(by.id('field_phoneNumber'));
    hireDateInput = element(by.id('field_hireDate'));
    salaryInput = element(by.id('field_salary'));
    commissionPctInput = element(by.id('field_commissionPct'));
    departmentSelect = element(by.id('field_department'));
    managerSelect = element(by.id('field_manager'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setFirstNameInput(firstName): promise.Promise<void> {
        return this.firstNameInput.sendKeys(firstName);
    }

    getFirstNameInput() {
        return this.firstNameInput.getAttribute('value');
    }

    setLastNameInput(lastName): promise.Promise<void> {
        return this.lastNameInput.sendKeys(lastName);
    }

    getLastNameInput() {
        return this.lastNameInput.getAttribute('value');
    }

    setEmailInput(email): promise.Promise<void> {
        return this.emailInput.sendKeys(email);
    }

    getEmailInput() {
        return this.emailInput.getAttribute('value');
    }

    setPhoneNumberInput(phoneNumber): promise.Promise<void> {
        return this.phoneNumberInput.sendKeys(phoneNumber);
    }

    getPhoneNumberInput() {
        return this.phoneNumberInput.getAttribute('value');
    }

    setHireDateInput(hireDate): promise.Promise<void> {
        return this.hireDateInput.sendKeys(hireDate);
    }

    getHireDateInput() {
        return this.hireDateInput.getAttribute('value');
    }

    setSalaryInput(salary): promise.Promise<void> {
        return this.salaryInput.sendKeys(salary);
    }

    getSalaryInput() {
        return this.salaryInput.getAttribute('value');
    }

    setCommissionPctInput(commissionPct): promise.Promise<void> {
        return this.commissionPctInput.sendKeys(commissionPct);
    }

    getCommissionPctInput() {
        return this.commissionPctInput.getAttribute('value');
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

    managerSelectLastOption(): promise.Promise<void> {
        return this.managerSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    managerSelectOption(option): promise.Promise<void> {
        return this.managerSelect.sendKeys(option);
    }

    getManagerSelect(): ElementFinder {
        return this.managerSelect;
    }

    getManagerSelectedOption() {
        return this.managerSelect.element(by.css('option:checked')).getText();
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
