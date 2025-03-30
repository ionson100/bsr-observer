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
     private mapAction:Map<string,(propertyName?:string)=>void>
     constructor(){
        this.mapAction = new Map<string, (propertyName?:string) => void>();

     }
     public OnPropertyChanged(propertyName?:string){
        this.mapAction.forEach((value) => {
            value.apply(propertyName);
        })
     }
        ___addAction(a:(propertyName?:string)=>void):string{
       const id = getRandomStrings(10);
       this.mapAction.set(id,a)
         return id;
     }
      ___removeAction(id:string):boolean{
       return  this.mapAction.has(id)?this.mapAction.delete(id):false
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
export function CreateObserverForClass<T extends INotifyPropertyChanged>(o:T, callback:(propertyName?:string)=>void){
    return o.___addAction(()=>{callback()});
}
export function DeleteObserverForClass<T extends INotifyPropertyChanged>(o:T, id:string){
    return o.___removeAction(id);
}

