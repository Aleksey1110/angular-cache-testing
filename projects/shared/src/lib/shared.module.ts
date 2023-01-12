import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { UiComponent } from './ui/ui.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
	declarations: [
		SharedComponent,
		UiComponent,
		BannerComponent
	],
	imports: [],
	exports: [
		SharedComponent,
		BannerComponent
	]
})
export class SharedModule {}
