import { RawParser } from './parsers/RawParser';

export = {
  parseRaw: (body: string): string => {
    const parser = new RawParser();
    return parser.parse(body);
  },
};

`Understood! Thanks mate !

------------------------------
*From:* somename lastname <somemail@gmail.com>
*Sent:* Tuesday, November 12, 2019 6:07 PM
*To:* anothermail@outlook.com <anothermail@outlook.com>
*Subject:* Fwd: Urgent thing



---------- Forwarded message ---------
From: *anothername anotherlastname* <anotherdude@gmail.com>
Date: Tue, Nov 12, 2019 at 1:10 PM
Subject: Re: Another urgent thing
To: <somemail@gmail.com>

Burning deadline

On Tue, Nov 12, 2019 at 11:51 anothername anotherlastname <anotherdude@gmail.com> wrote:`;
