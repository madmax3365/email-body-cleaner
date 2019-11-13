# email-body-cleaner

Module designed to extract latest message from email body.<br >
Currently guaranteed working if sender's mail client is `GMail` or `Outlook` <br >

**Note** Module still in development, and not tested properly, so use it at your own risk 🙃

## Installation
Just type <br >
`npm i email-body-cleaner` <br >

## Usage example
```javascript
import { parseRaw } from 'email-body-cleaner'; // commonJs style
const parser = require('email-body-cleaner'); // standard require style


const exampleBody = `Understood! Thanks mate !

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

const result = parseRaw(exampleBody); // parser.parseRaw(exampleBody);

console.log(result); // Will print: Understood! Thanks mate !

```

## Contributing

If you're interested in helping me to improve / add functionality, I'm kindly welcome you 🤗 <br >
Please feel free to send PR - s with your awesome code.
