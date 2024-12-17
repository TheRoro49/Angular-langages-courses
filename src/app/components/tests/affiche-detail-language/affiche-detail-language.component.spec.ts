import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDetailLanguageComponent } from './affiche-detail-language.component';

describe('AfficheDetailLanguageComponent', () => {
  let component: AfficheDetailLanguageComponent;
  let fixture: ComponentFixture<AfficheDetailLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficheDetailLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheDetailLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
