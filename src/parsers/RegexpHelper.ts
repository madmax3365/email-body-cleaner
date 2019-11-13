import { IRegexpHelper } from '../interfaces';
import { MONTHS, WEEKDAYS } from './constants';

export const RegexpHelper: IRegexpHelper = {
  get weekdays(): string {
    return `(${WEEKDAYS.join('|')})`;
  },

  get months(): string {
    return `(${MONTHS.join('|')})`;
  },

  get mail(): string {
    return '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}';
  },

  get time(): string {
    return '\\d{2}:\\d{2}';
  },

  get date(): string {
    return `\\d{2}, \\d{4} at ${this.time}`;
  },
  get eol(): string {
    return '[\\n\\r]';
  },
  literal: (opt) => {
    switch (opt) {
      case 'F':
        return `\\*From:\\*`;
      case 'S':
        return `\\*Sent:\\*`;
      case 'T':
        return `\\*To:\\*`;
      case 'Sub':
        return `\\*Subject:\\*`;
    }
  },
};
