import { Component, Injector } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';

export function LongTask(
  target: BaseComponent, // The prototype of the class
  propertyKey: string, // The name of the method
  descriptor: TypedPropertyDescriptor<(... p:any[]) => Promise<any>>
  ) {
    let originalMethod = descriptor.value;
    descriptor.value =  async function() {
      try {
        target.showLoading();
        var ret = await originalMethod();
        target.dismissLoading();
        return ret;
      } catch (err) {
        target.dismissLoading();
        throw(err);
      }
    }
    return descriptor;
}

export abstract class BaseComponent {
  private loading: Loading;
  public navCtrl: NavController;
  public loadingCtrl: LoadingController;

  constructor(injector: Injector) {
    this.navCtrl = injector.get(NavController);
    this.loadingCtrl = injector.get(LoadingController);
  }

  public showLoading = () => {
    console.log(this);
    if (this.loading == null) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      this.loading.present();
    }
  }

  public dismissLoading() {
    if (this.loading != null) {
      this.loading.dismiss();
      this.loading = null;
    }
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseComponent{

  constructor(injector: Injector) {
      super(injector);
  }

  async ionViewDidEnter(){

  }

  @LongTask
  public async reload () {
    await this.loadData();
  }

  public loadData () {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    });
  }

}
