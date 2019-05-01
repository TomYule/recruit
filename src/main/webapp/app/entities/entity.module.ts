import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RecruitRegionModule } from './region/region.module';
import { RecruitCountryModule } from './country/country.module';
import { RecruitLocationModule } from './location/location.module';
import { RecruitDepartmentModule } from './department/department.module';
import { RecruitTaskModule } from './task/task.module';
import { RecruitEmployeeModule } from './employee/employee.module';
import { RecruitJobModule } from './job/job.module';
import { RecruitJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        RecruitRegionModule,
        RecruitCountryModule,
        RecruitLocationModule,
        RecruitDepartmentModule,
        RecruitTaskModule,
        RecruitEmployeeModule,
        RecruitJobModule,
        RecruitJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecruitEntityModule {}
