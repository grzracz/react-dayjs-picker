# react-dayjs-picker

> Simple date picker and calendar made for React and Day.js

[![NPM](https://img.shields.io/npm/v/react-dayjs-picker.svg)](https://www.npmjs.com/package/react-dayjs-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License](https://img.shields.io/npm/l/react-dayjs-picker)](https://www.npmjs.com/package/react-dayjs-picker)

## Demo/Documentation

[Demo and API docs are available here!](https://grzracz.github.io/react-dayjs-picker/)


## Install

```bash
npm install --save react-dayjs-picker
```
or
```bash
yarn add react-dayjs-picker
```

## Usage

```tsx
import React, { FC, useState } from 'react'

import { DatePicker } from 'react-dayjs-picker'
import 'react-dayjs-picker/dist/index.css'

export const Example: FC = () => {
    const [open, setOpen] = useState(false)

    return <DatePicker isOpen={open} setIsOpen={setOpen} />
}
```

## License

MIT © [grzracz](https://github.com/grzracz)
