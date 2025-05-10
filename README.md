# bsr-observer

> React observer

[![NPM](https://img.shields.io/npm/v/bsr-observer.svg)](https://www.npmjs.com/package/bsr-observer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bsr-observer
```

## Usage

```tsx

import {INotifyPropertyChanged,CreateObserver,GetRandomStrings} from "bsr-observer"
import './App.css'
import {useEffect, useState} from "react";
import * as React from "react";

class MSettings extends INotifyPropertyChanged {
    public count=0;
    increment(){
        this.count++
        this.OnPropertyChanged("increment")
    }
}
const settings=new MSettings()
const useSettings=CreateObserver(settings)

export default function App() {
    const mSettings:MSettings = useSettings()

    return (
        <>
            <div className="card">
                <button onClick={() => mSettings.increment()}>+1
                    count is {mSettings.count}
                </button>
            </div>
        </>
    )
}

export  function App1() {
    const [, setUpdate] = useState("")
    useEffect(()=>{
        const  id=settings.___addAction((s:string|undefined)=>{
            console.log(`func ${s}`);
            setUpdate(GetRandomStrings(10))
        });
        return () => {settings.___removeAction(id)}
    },[])

    return (
        <>
            <div className="card">
                <button onClick={() => settings.increment()}>+1
                    count is {settings.count}
                </button>
            </div>
        </>
    )
}
export class App2 extends React.Component {
    private mSettings=settings
    private id=''

    componentDidMount() {
        this.id= this.mSettings.___addAction((s:string|undefined)=>{
            console.log(`class ${s}`);
            this.setState({id:GetRandomStrings(10)})
        })
    }
    componentWillUnmount() {
        this.mSettings.___removeAction(this.id)
    }
    render() {
        return (
            <>
                <div className="card">
                    <button onClick={() => this.mSettings.increment()}>+1
                        count is {this.mSettings.count}
                    </button>
                </div>
            </>
        );
    }
}

```

## License

MIT © [ionson100](https://github.com/ionson100)



[Examples, Help pages](https://ionson100.github.io/wwwroot/index.html#page=30-2).
