import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginCollapseComponent } from './plugin-collapse.component';

describe('PluginCollapseComponent', () => {
  let component: PluginCollapseComponent;
  let fixture: ComponentFixture<PluginCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginCollapseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PluginCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
