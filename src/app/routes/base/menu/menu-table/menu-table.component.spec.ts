import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTableComponent } from './menu-table.component';

describe('MenuTableComponent', () => {
  let component: MenuTableComponent;
  let fixture: ComponentFixture<MenuTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
