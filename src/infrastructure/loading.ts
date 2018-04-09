import { Loading, LoadingController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class LoadIndicatorService {
    private loadingCount = 0;
    private loading: Loading = null;

    constructor(private loadingCtrl: LoadingController) {}

    public showLoading = function() {
        if (this.loading == null) {            
            this.loading = this.loadingCtrl.create({
                content: "Aguarde..."
            });

            this.loading.present();
        }

        this.loadingCount++;
    };

    public dismissLoading = function() {
        if (this.loading != null) {
            if (this.loadingCount == 1) {
                this.loading.dismiss();
                this.loading = null;
            }
        }

        this.loadingCount--;
    };
}
