import { NavController } from "ionic-angular";
import { Injector } from "@angular/core";
import { PublicInjector } from "./public-injector";

export abstract class BaseComponent implements PublicInjector {

    public navCtrl: NavController;

    constructor(public injector: Injector) {
        this.navCtrl = injector.get(NavController);        
    }
}
