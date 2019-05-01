import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Region } from 'app/shared/model/region.model';
import { RegionService } from './region.service';
import { RegionComponent } from './region.component';
import { RegionDetailComponent } from './region-detail.component';
import { RegionUpdateComponent } from './region-update.component';
import { RegionDeletePopupComponent } from './region-delete-dialog.component';
import { IRegion } from 'app/shared/model/region.model';

@Injectable({ providedIn: 'root' })
export class RegionResolve implements Resolve<IRegion> {
    constructor(private service: RegionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((region: HttpResponse<Region>) => region.body);
        }
        return Observable.of(new Region());
    }
}

export const regionRoute: Routes = [
    {
        path: 'region',
        component: RegionComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.region.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'region/:id/view',
        component: RegionDetailComponent,
        resolve: {
            region: RegionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.region.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'region/new',
        component: RegionUpdateComponent,
        resolve: {
            region: RegionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.region.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'region/:id/edit',
        component: RegionUpdateComponent,
        resolve: {
            region: RegionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.region.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const regionPopupRoute: Routes = [
    {
        path: 'region/:id/delete',
        component: RegionDeletePopupComponent,
        resolve: {
            region: RegionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.region.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
