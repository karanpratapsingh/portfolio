export const StringIsNumber = (value: any) => isNaN(Number(value)) === true;

export function enumToArray<T>(object: any): T[] {
  return Object.keys(object).filter(StringIsNumber).map(key => object[key]);
}