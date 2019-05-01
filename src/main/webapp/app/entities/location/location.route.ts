import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Location } from 'app/shared/model/location.model';
import { LocationService } from './location.service';
import { LocationComponent } from './location.component';
import { LocationDetailComponent } from './location-detail.component';
import { LocationUpdateComponent } from './location-update.component';
import { LocationDeletePopupComponent } from './location-delete-dialog.component';
import { ILocation } from 'app/shared/model/location.model';

@Injectable({ providedIn: 'root' })
export class LocationResolve implements Resolve<ILocation> {
    constructor(private service: LocationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((location: HttpResponse<Location>) => location.body);
        }
        return Observable.of(new Location());
    }
}

export const locationRoute: Routes = [
    {
        path: 'location',
        component: LocationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.location.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'location/:id/view',
        component: LocationDetailComponent,
        resolve: {
            location: LocationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.location.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'location/new',
        component: LocationUpdateComponent,
        resolve: {
            location: LocationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.location.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'location/:id/edit',
        component: LocationUpdateComponent,
        resolve: {
            location: LocationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.location.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const locationPopupRoute: Routes = [
    {
        path: 'location/:id/delete',
        component: LocationDeletePopupComponent,
        resolve: {
            location: LocationResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.location.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
