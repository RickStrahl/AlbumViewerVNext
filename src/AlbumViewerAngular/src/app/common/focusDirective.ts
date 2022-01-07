import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
	selector : '[focus]'  // [focus]="true|false"
})
export class FocusDirective implements OnChanges {
	@Input() focus : boolean;

	constructor(private element : ElementRef) {
		
	}
	
	ngOnChanges() {
		if (this.focus)
			setTimeout( ()=> this.element.nativeElement.focus() ,200);
	}
}