import { browser, protractor } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { EmployeeComponentsPage, EmployeeUpdatePage } from './employee.page-object';

describe('Employee e2e test', () => {
    let navBarPage: NavBarPage;
    let employeeUpdatePage: EmployeeUpdatePage;
    let employeeComponentsPage: EmployeeComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Employees', () => {
        navBarPage.goToEntity('employee');
        employeeComponentsPage = new EmployeeComponentsPage();
        expect(employeeComponentsPage.getTitle()).toMatch(/recruitApp.employee.home.title/);
    });

    it('should load create Employee page', () => {
        employeeComponentsPage.clickOnCreateButton();
        employeeUpdatePage = new EmployeeUpdatePage();
        expect(employeeUpdatePage.getPageTitle()).toMatch(/recruitApp.employee.home.createOrEditLabel/);
        employeeUpdatePage.cancel();
    });

    it('should create and save Employees', () => {
        employeeComponentsPage.clickOnCreateButton();
        employeeUpdatePage.setFirstNameInput('firstName');
        expect(employeeUpdatePage.getFirstNameInput()).toMatch('firstName');
        employeeUpdatePage.setLastNameInput('lastName');
        expect(employeeUpdatePage.getLastNameInput()).toMatch('lastName');
        employeeUpdatePage.setEmailInput('email');
        expect(employeeUpdatePage.getEmailInput()).toMatch('email');
        employeeUpdatePage.setPhoneNumberInput('phoneNumber');
        expect(employeeUpdatePage.getPhoneNumberInput()).toMatch('phoneNumber');
        employeeUpdatePage.setHireDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(employeeUpdatePage.getHireDateInput()).toContain('2001-01-01T02:30');
        employeeUpdatePage.setSalaryInput('5');
        expect(employeeUpdatePage.getSalaryInput()).toMatch('5');
        employeeUpdatePage.setCommissionPctInput('5');
        expect(employeeUpdatePage.getCommissionPctInput()).toMatch('5');
        employeeUpdatePage.departmentSelectLastOption();
        employeeUpdatePage.managerSelectLastOption();
        employeeUpdatePage.save();
        expect(employeeUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
