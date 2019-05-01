import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Job } from 'app/shared/model/job.model';
import { JobService } from './job.service';
import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail.component';
import { JobUpdateComponent } from './job-update.component';
import { JobDeletePopupComponent } from './job-delete-dialog.component';
import { IJob } from 'app/shared/model/job.model';

@Injectable({ providedIn: 'root' })
export class JobResolve implements Resolve<IJob> {
    constructor(private service: JobService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((job: HttpResponse<Job>) => job.body);
        }
        return Observable.of(new Job());
    }
}

export const jobRoute: Routes = [
    {
        path: 'job',
        component: JobComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'recruitApp.job.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'job/:id/view',
        component: JobDetailComponent,
        resolve: {
            job: JobResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.job.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'job/new',
        component: JobUpdateComponent,
        resolve: {
            job: JobResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.job.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'job/:id/edit',
        component: JobUpdateComponent,
        resolve: {
            job: JobResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.job.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const jobPopupRoute: Routes = [
    {
        path: 'job/:id/delete',
        component: JobDeletePopupComponent,
        resolve: {
            job: JobResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.job.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
