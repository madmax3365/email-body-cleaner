export interface IRegexpHelper {
  readonly weekdays: string;
  readonly months: string;
  readonly mail: string;
  readonly date: string;
  readonly time: string;
  readonly eol: string;
  literal: (name: Literal) => string;
}

export type WeekDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type Month =
  | 'Jan'
  | 'Mar'
  | 'May'
  | 'Jul'
  | 'Sep'
  | 'Sept'
  | 'Nov'
  | 'Feb'
  | 'Apr'
  | 'Jun'
  | 'Aug'
  | 'Oct'
  | 'Dec';

type Literal = 'S' | 'F' | 'T' | 'Sub';
