# bsr-observer

> React observer

[![NPM](https://img.shields.io/npm/v/bsr-horizontal-menu.svg)](https://www.npmjs.com/package/bsr-horizontal-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bsr-observer
```

## Usage

```tsx
import {Menu, MenuItem} from "bsr-horizontal-menu";
import 'bsr-horizontal-menu/dist/index.css'

export default function App(){
    return(
        <Menu>
            <MenuItem  href={"#id-1"} content={'menu:1'}/>
            <MenuItem  content={'menu:2'}>
                <MenuItem content={'menu:2-1'}/>
                <MenuItem content={'menu:2-2'} dropPosition={'right'}>
                    <MenuItem content={'menu1'}/>
                    <MenuItem content={'menu2'}/>
                    <MenuItem href={"#id-2-2"} content={'menu3'}/>
                </MenuItem>
            </MenuItem>
        </Menu>
    )
}
```

## License

MIT © [ionson100](https://github.com/ionson100)



[Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#page=30-2).
