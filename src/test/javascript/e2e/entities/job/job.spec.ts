import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { JobComponentsPage, JobUpdatePage } from './job.page-object';

describe('Job e2e test', () => {
    let navBarPage: NavBarPage;
    let jobUpdatePage: JobUpdatePage;
    let jobComponentsPage: JobComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Jobs', () => {
        navBarPage.goToEntity('job');
        jobComponentsPage = new JobComponentsPage();
        expect(jobComponentsPage.getTitle()).toMatch(/recruitApp.job.home.title/);
    });

    it('should load create Job page', () => {
        jobComponentsPage.clickOnCreateButton();
        jobUpdatePage = new JobUpdatePage();
        expect(jobUpdatePage.getPageTitle()).toMatch(/recruitApp.job.home.createOrEditLabel/);
        jobUpdatePage.cancel();
    });

    it('should create and save Jobs', () => {
        jobComponentsPage.clickOnCreateButton();
        jobUpdatePage.setJobTitleInput('jobTitle');
        expect(jobUpdatePage.getJobTitleInput()).toMatch('jobTitle');
        jobUpdatePage.setMinSalaryInput('5');
        expect(jobUpdatePage.getMinSalaryInput()).toMatch('5');
        jobUpdatePage.setMaxSalaryInput('5');
        expect(jobUpdatePage.getMaxSalaryInput()).toMatch('5');
        jobUpdatePage.employeeSelectLastOption();
        // jobUpdatePage.taskSelectLastOption();
        jobUpdatePage.save();
        expect(jobUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
