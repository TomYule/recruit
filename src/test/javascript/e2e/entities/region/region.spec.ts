import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { RegionComponentsPage, RegionUpdatePage } from './region.page-object';

describe('Region e2e test', () => {
    let navBarPage: NavBarPage;
    let regionUpdatePage: RegionUpdatePage;
    let regionComponentsPage: RegionComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Regions', () => {
        navBarPage.goToEntity('region');
        regionComponentsPage = new RegionComponentsPage();
        expect(regionComponentsPage.getTitle()).toMatch(/recruitApp.region.home.title/);
    });

    it('should load create Region page', () => {
        regionComponentsPage.clickOnCreateButton();
        regionUpdatePage = new RegionUpdatePage();
        expect(regionUpdatePage.getPageTitle()).toMatch(/recruitApp.region.home.createOrEditLabel/);
        regionUpdatePage.cancel();
    });

    it('should create and save Regions', () => {
        regionComponentsPage.clickOnCreateButton();
        regionUpdatePage.setRegionNameInput('regionName');
        expect(regionUpdatePage.getRegionNameInput()).toMatch('regionName');
        regionUpdatePage.save();
        expect(regionUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
