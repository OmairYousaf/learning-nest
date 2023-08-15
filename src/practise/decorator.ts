export function CheckString(target: any, propertyKey: string) {
    let value: string;
  
    const getter = function () {
      return value;
    };
  
    const setter = function (newValue: any) {
      if (typeof newValue === 'string') {
        value = newValue;
      } else {
        throw new Error(`Property ${propertyKey} must be a string.`);
      }
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  }