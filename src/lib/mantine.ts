import * as _ from 'lodash-es';

import { type MantineThemeColors } from '@mantine/core';

import colors from '../../tailwind.color';

type Tuple<T, N extends number> = N extends N ? (number extends N ? T[] : _TupleOf<T, N, []>) : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;

// type TailwindColor = {
//   25?: string;
//   50: string;
//   100: string;
//   200: string;
//   300: string;
//   400: string;
//   500: string;
//   600: string;
//   700: string;
//   800: string;
//   900: string;
//   950?: string;
// };

type CustomColors = keyof typeof colors;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 10>>;
  }
}

const mantineColors = Object.fromEntries(
  Object.entries(colors)
    .filter(([, v]) => typeof v !== 'string')
    .map(([k, v]) => {
      const filteredColors = _.pick(v, [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);

      return [k, Object.values(filteredColors)];
    })
) as unknown as MantineThemeColors;

export { mantineColors };
