import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumItemssComponent } from './album-itemss.component';

describe('AlbumItemssComponent', () => {
  let component: AlbumItemssComponent;
  let fixture: ComponentFixture<AlbumItemssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumItemssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumItemssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
