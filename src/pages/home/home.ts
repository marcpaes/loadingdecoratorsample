import { Component, Injector } from "@angular/core";
import { NavController, LoadingController, Loading } from "ionic-angular";
import { BaseComponent } from "../../infrastructure/basecomponent";
import { LongTask } from "../../infrastructure/longtask";

@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage extends BaseComponent {
    constructor(injector: Injector) {
        super(injector);
    }

    ionViewDidEnter() {}

    @LongTask
    public async reload() {
        console.log(this);
        await this.loadData();
    }

    @LongTask
    public loadData() {
        console.log(this);
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        });
    }
}
