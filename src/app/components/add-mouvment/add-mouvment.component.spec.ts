import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMouvmentComponent } from './add-mouvment.component';

describe('AddMouvmentComponent', () => {
  let component: AddMouvmentComponent;
  let fixture: ComponentFixture<AddMouvmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMouvmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMouvmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
