import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ICountry } from 'app/shared/model/country.model';
import { CountryService } from './country.service';
import { IRegion } from 'app/shared/model/region.model';
import { RegionService } from 'app/entities/region';

@Component({
    selector: 'jhi-country-update',
    templateUrl: './country-update.component.html'
})
export class CountryUpdateComponent implements OnInit {
    private _country: ICountry;
    isSaving: boolean;

    regions: IRegion[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private countryService: CountryService,
        private regionService: RegionService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ country }) => {
            this.country = country;
        });
        this.regionService.query({ filter: 'country-is-null' }).subscribe(
            (res: HttpResponse<IRegion[]>) => {
                if (!this.country.region || !this.country.region.id) {
                    this.regions = res.body;
                } else {
                    this.regionService.find(this.country.region.id).subscribe(
                        (subRes: HttpResponse<IRegion>) => {
                            this.regions = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.country.id !== undefined) {
            this.subscribeToSaveResponse(this.countryService.update(this.country));
        } else {
            this.subscribeToSaveResponse(this.countryService.create(this.country));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICountry>>) {
        result.subscribe((res: HttpResponse<ICountry>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackRegionById(index: number, item: IRegion) {
        return item.id;
    }
    get country() {
        return this._country;
    }

    set country(country: ICountry) {
        this._country = country;
    }
}
