export const log = (info: any, show?: boolean) => {
  if (show == true || show == undefined) console.log(JSON.stringify(info, undefined, 2));
};
export const error = (info: any) => console.error(JSON.stringify(info, undefined, 2));
export const warn = (info: any) => console.warn(JSON.stringify(info, undefined, 2));
