import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGraphicsListComponent } from './products-graphics-list.component';

describe('ProductsGraphicsListComponent', () => {
  let component: ProductsGraphicsListComponent;
  let fixture: ComponentFixture<ProductsGraphicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsGraphicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGraphicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
