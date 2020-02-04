/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ZbpComponent } from './zbp.component';

let component: ZbpComponent;
let fixture: ComponentFixture<ZbpComponent>;

describe('zbp component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ZbpComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ZbpComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});