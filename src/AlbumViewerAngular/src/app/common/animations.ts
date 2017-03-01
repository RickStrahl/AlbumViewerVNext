import { trigger, state, style, transition, animate } from '@angular/core';

export const slideIn = trigger('slideIn', [
  state('*', style({
    transform: 'translateX(100%)',
  })),
  state('in', style({
    transform: 'translateX(0)',
  })),
  state('out',   style({
    transform: 'translateX(-100%)',
  })),
  transition('* => in', animate('400ms ease-in')),
  transition('in => out', animate('400ms ease-out'))
]);

export const slideInLeft = trigger('slideInLeft', [
  state('*', style({
    transform: 'translateX(-100%)',
  })),
  state('in', style({
    transform: 'translateX(0)',
  })),
  state('out',   style({
    transform: 'translateX(100%)',
  })),
  transition('* => in', animate('300ms ease-in')),
  transition('in => out', animate('300ms ease-out'))
]);
