import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IRegion } from 'app/shared/model/region.model';
import { RegionService } from './region.service';

@Component({
    selector: 'jhi-region-update',
    templateUrl: './region-update.component.html'
})
export class RegionUpdateComponent implements OnInit {
    private _region: IRegion;
    isSaving: boolean;

    constructor(private regionService: RegionService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ region }) => {
            this.region = region;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.region.id !== undefined) {
            this.subscribeToSaveResponse(this.regionService.update(this.region));
        } else {
            this.subscribeToSaveResponse(this.regionService.create(this.region));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IRegion>>) {
        result.subscribe((res: HttpResponse<IRegion>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get region() {
        return this._region;
    }

    set region(region: IRegion) {
        this._region = region;
    }
}
