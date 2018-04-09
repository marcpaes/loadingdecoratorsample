import { BaseComponent } from "./basecomponent";

export function LongTask(
    target: BaseComponent, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<(...p: any[]) => Promise<any>>
) {
    let originalMethod = descriptor.value;


    descriptor.value = async function() {
        try {
            this.showLoading(propertyKey);
            var ret = await originalMethod.apply(this);
            this.dismissLoading();
            return ret;
        } catch (err) {
            this.dismissLoading();
            throw err;
        }
    };

    return descriptor;
}
