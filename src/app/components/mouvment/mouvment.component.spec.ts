import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvmentComponent } from './mouvment.component';

describe('MouvmentComponent', () => {
  let component: MouvmentComponent;
  let fixture: ComponentFixture<MouvmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouvmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouvmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
