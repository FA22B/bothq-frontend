import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginSettingsComponent } from './plugin-settings.component';

describe('PluginSettingsComponent', () => {
  let component: PluginSettingsComponent;
  let fixture: ComponentFixture<PluginSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PluginSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
