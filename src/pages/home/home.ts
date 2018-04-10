import { Component, Injector } from "@angular/core";
import { NavController, LoadingController, Loading } from "ionic-angular";
import { BaseComponent } from "../../infrastructure/basecomponent";
import { LongTask } from "../../infrastructure/long-task-decorator";


@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage extends BaseComponent {
    constructor(injector: Injector) {
        super(injector);
    }

    ionViewDidEnter() {}

    
    public async reload() {
        await this.loadData();
        await this.loadData();
        await this.loadData();
    }

    @LongTask
    public loadData() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        });
    }
}
