import { RawParser } from './parsers/RawParser';

export = {
  parseRaw: (body: string): string => {
    const parser = new RawParser();
    return parser.parse(body);
  },
};
