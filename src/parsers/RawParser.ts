import { IRegexpHelper } from '../interfaces';
import { OUTLOOK_DELIMETER } from './constants';
import { RegexpHelper } from './RegexpHelper';

export class RawParser {
  private regex: IRegexpHelper;

  constructor() {
    this.regex = RegexpHelper;
  }

  public parse(text: string): string {
    // Attempt to cut forwarded part, will return original if no matches
    let res = text.split('---------- Forwarded message ---------')[0];
    let delimeter;
    delimeter = this.oHeadMatch(res);
    if (delimeter) {
      res = res.split(delimeter)[0];
      delimeter = undefined;
    }
    delimeter = this.gDateMatch(res);
    if (delimeter) {
      res = res.split(delimeter)[0];
      delimeter = undefined;
    }
    res = res.trim();
    return res;
  }

  /**
   * Attempt to match google styled message
   */
  private gDateMatch(text: string): string | null {
    const { weekdays, months, date, mail } = this.regex;
    const reg = `On ${weekdays}, ${months} ${date} (.+) <${mail}> wrote:`;
    const matches = text.match(new RegExp(reg, 'm'));
    if (!matches) {
      return null;
    }
    return matches[0];
  }

  /**
   * Attempt to match MS outlook styled message
   */
  private oHeadMatch(text: string): string | null {
    const { weekdays, months, mail, eol, literal } = this.regex;
    const reg =
      `^${literal('F')} .+ <${mail}>${eol}` +
      `${literal('S')} ${weekdays}.+, ${months}.+${eol}` +
      `${literal('T')} ${mail}.+<${mail}>${eol}` +
      `${literal('Sub')}.+${eol}`;
    const matches = text.match(
      new RegExp(`^${OUTLOOK_DELIMETER}${eol}${reg.slice(1, reg.length)}`, 'm'),
    );
    if (!matches) {
      const withoutDel = text.match(new RegExp(reg, 'm'));
      if (!withoutDel) {
        return null;
      }
      return withoutDel[0];
    }
    return matches[0];
  }
}
