import { browser, protractor } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { JobHistoryComponentsPage, JobHistoryUpdatePage } from './job-history.page-object';

describe('JobHistory e2e test', () => {
    let navBarPage: NavBarPage;
    let jobHistoryUpdatePage: JobHistoryUpdatePage;
    let jobHistoryComponentsPage: JobHistoryComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load JobHistories', () => {
        navBarPage.goToEntity('job-history');
        jobHistoryComponentsPage = new JobHistoryComponentsPage();
        expect(jobHistoryComponentsPage.getTitle()).toMatch(/recruitApp.jobHistory.home.title/);
    });

    it('should load create JobHistory page', () => {
        jobHistoryComponentsPage.clickOnCreateButton();
        jobHistoryUpdatePage = new JobHistoryUpdatePage();
        expect(jobHistoryUpdatePage.getPageTitle()).toMatch(/recruitApp.jobHistory.home.createOrEditLabel/);
        jobHistoryUpdatePage.cancel();
    });

    it('should create and save JobHistories', () => {
        jobHistoryComponentsPage.clickOnCreateButton();
        jobHistoryUpdatePage.setStartDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(jobHistoryUpdatePage.getStartDateInput()).toContain('2001-01-01T02:30');
        jobHistoryUpdatePage.setEndDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(jobHistoryUpdatePage.getEndDateInput()).toContain('2001-01-01T02:30');
        jobHistoryUpdatePage.languageSelectLastOption();
        jobHistoryUpdatePage.jobSelectLastOption();
        jobHistoryUpdatePage.departmentSelectLastOption();
        jobHistoryUpdatePage.employeeSelectLastOption();
        jobHistoryUpdatePage.save();
        expect(jobHistoryUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
