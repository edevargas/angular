import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './route/lazy-routing.module';
import { MaterialModule } from 'src/app/Application/material/material.module';
import { LazyModuleComponent } from './entry/lazy-module.component';

@NgModule({
    declarations: [LazyModuleComponent],
    imports: [CommonModule, MaterialModule, LazyRoutingModule],
})
export class LazyModule {}
