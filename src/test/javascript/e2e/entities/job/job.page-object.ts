import { element, by, promise, ElementFinder } from 'protractor';

export class JobComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-job div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class JobUpdatePage {
    pageTitle = element(by.id('jhi-job-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    jobTitleInput = element(by.id('field_jobTitle'));
    minSalaryInput = element(by.id('field_minSalary'));
    maxSalaryInput = element(by.id('field_maxSalary'));
    employeeSelect = element(by.id('field_employee'));
    taskSelect = element(by.id('field_task'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setJobTitleInput(jobTitle): promise.Promise<void> {
        return this.jobTitleInput.sendKeys(jobTitle);
    }

    getJobTitleInput() {
        return this.jobTitleInput.getAttribute('value');
    }

    setMinSalaryInput(minSalary): promise.Promise<void> {
        return this.minSalaryInput.sendKeys(minSalary);
    }

    getMinSalaryInput() {
        return this.minSalaryInput.getAttribute('value');
    }

    setMaxSalaryInput(maxSalary): promise.Promise<void> {
        return this.maxSalaryInput.sendKeys(maxSalary);
    }

    getMaxSalaryInput() {
        return this.maxSalaryInput.getAttribute('value');
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

    taskSelectLastOption(): promise.Promise<void> {
        return this.taskSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    taskSelectOption(option): promise.Promise<void> {
        return this.taskSelect.sendKeys(option);
    }

    getTaskSelect(): ElementFinder {
        return this.taskSelect;
    }

    getTaskSelectedOption() {
        return this.taskSelect.element(by.css('option:checked')).getText();
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
