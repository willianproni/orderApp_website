import type { Theme } from '../styles/theme'
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- module augmentation requires interface extends
  export interface DefaultTheme extends Theme {}
}
