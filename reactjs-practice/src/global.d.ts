// global.d.ts 또는 declarations.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
