import { HighlightDirective } from './highlight.directive';
import { async, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  const elMock = HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: elMock }
      ]
    }).compileComponents();
  }));

  it('should create an instance', () => {
    const directive = TestBed.createComponent(HighlightDirective);
    expect(directive).toBeTruthy();
  });
});
