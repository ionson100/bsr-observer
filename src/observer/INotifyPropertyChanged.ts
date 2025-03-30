import {useEffect, useState} from "react";

 export function getRandomStrings(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>?/|.[]@#!~`$%^&*()_-+=:"';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



export class INotifyPropertyChanged {
     private mapAction:Map<string,()=>void>
     constructor(){
        this.mapAction = new Map<string, () => void>();

     }
     public OnPropertyChanged(s?:string|unknown){
        this.mapAction.forEach((value) => {
            value.apply(s);
        })
     }
        ___addAction(a:()=>void):string{
       const id = getRandomStrings(10);
       this.mapAction.set(id,a)
         return id;
     }
      ___removeAction(id:string):boolean{
       return  this.mapAction.delete(id)
     }
}


export function  CreateObserver<T extends INotifyPropertyChanged>(o:T){
    return ()=>{

        const [, setOb] = useState(getRandomStrings(12))
        useEffect(()=>{

            const  id=o.___addAction(()=>{setOb(getRandomStrings(13))})
            return ()=>{
                o.___removeAction(id)
            }
        },[])


        return o
    }
}
export function CreateObserverForClass<T extends INotifyPropertyChanged>(o:T, callback:()=>void){
    return o.___addAction(()=>{callback()});
}
export function DeleteObserverForClass<T extends INotifyPropertyChanged>(o:T, id:string){
    return o.___removeAction(id);
}

