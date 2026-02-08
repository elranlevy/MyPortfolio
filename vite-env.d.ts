/// <reference types="vite/client" />

// Figma Make asset imports resolved by the custom Vite plugin
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}
