import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BsDropdownModule } from 'ngx-bootstrap';

import { ComponentsModule } from '../../../shared/components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { configureTestBed } from '../../../shared/unit-test-helper';
import { HostsComponent } from './hosts.component';

describe('HostsComponent', () => {
  let component: HostsComponent;
  let fixture: ComponentFixture<HostsComponent>;

  configureTestBed({
    imports: [
      SharedModule,
      HttpClientTestingModule,
      ComponentsModule,
      BsDropdownModule.forRoot(),
      RouterTestingModule
    ],
    declarations: [HostsComponent]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
