import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Department } from 'app/shared/model/department.model';
import { DepartmentService } from './department.service';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentUpdateComponent } from './department-update.component';
import { DepartmentDeletePopupComponent } from './department-delete-dialog.component';
import { IDepartment } from 'app/shared/model/department.model';

@Injectable({ providedIn: 'root' })
export class DepartmentResolve implements Resolve<IDepartment> {
    constructor(private service: DepartmentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((department: HttpResponse<Department>) => department.body);
        }
        return Observable.of(new Department());
    }
}

export const departmentRoute: Routes = [
    {
        path: 'department',
        component: DepartmentComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.department.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'department/:id/view',
        component: DepartmentDetailComponent,
        resolve: {
            department: DepartmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.department.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'department/new',
        component: DepartmentUpdateComponent,
        resolve: {
            department: DepartmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.department.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'department/:id/edit',
        component: DepartmentUpdateComponent,
        resolve: {
            department: DepartmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.department.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const departmentPopupRoute: Routes = [
    {
        path: 'department/:id/delete',
        component: DepartmentDeletePopupComponent,
        resolve: {
            department: DepartmentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'recruitApp.department.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
