import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lession } from './lession';

describe('Lession', () => {
  let component: Lession;
  let fixture: ComponentFixture<Lession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
