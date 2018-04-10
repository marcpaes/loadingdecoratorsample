import { LoadIndicatorService } from './load-indicator-service';
import { PublicInjector } from './public-injector';

export function LongTask(
    target: PublicInjector, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<(...p: any[]) => Promise<any>>
) {
    const originalMethod = descriptor.value;

    descriptor.value = async function() {
        const injector = this.injector;
        const loadingService = injector.get(LoadIndicatorService);
        try {
            loadingService.showLoading();
            var ret = await originalMethod.apply(this);
            loadingService.dismissLoading();
            return ret;
        } catch (err) {
            loadingService.dismissLoading();
            throw err;
        }
    };

    return descriptor;
}
