import { Loading, NavController, LoadingController } from "ionic-angular";
import { Injector } from "@angular/core";
import { LoadIndicatorService } from "./loading";

export abstract class BaseComponent {
    private loadingService: LoadIndicatorService;
    private loading: Loading;
    public navCtrl: NavController;
    public loadingCtrl: LoadingController;

    constructor(injector: Injector) {
        this.navCtrl = injector.get(NavController);
        this.loadingService = injector.get(LoadIndicatorService);
    }

    public showLoading(msg: string) {
        this.loadingService.showLoading();
    }

    public dismissLoading() {
        this.loadingService.dismissLoading();
    }
}
