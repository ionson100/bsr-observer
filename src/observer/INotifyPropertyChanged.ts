import {useEffect, useState} from "react";

 export function GetRandomStrings(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>?/|.[]@#!~`$%^&*()_-+=:"';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



export  class INotifyPropertyChanged {
     private mapAction=new Map<string, (propertyName?:string,userData?:any) => void>();


     public OnPropertyChanged(propertyName?:string,userData?:any){
        this.mapAction.forEach((value) => {
            setTimeout(()=>{
                value.apply(this,[propertyName,userData]);
            })

        })
     }
        ___addAction(a:(propertyName?:string,userData?:any)=>void):string{
       const id = GetRandomStrings(10);
       this.mapAction.set(id,a)
         return id;
     }
      ___removeAction(id:string):boolean{
       return  this.mapAction.has(id)?this.mapAction.delete(id):false
     }
}


export function  CreateObserver<T extends INotifyPropertyChanged>(o:T){
    return ()=>{

        const [, setOb] = useState(GetRandomStrings(10))
        useEffect(()=>{

            const  id=o.___addAction(()=>{setOb(GetRandomStrings(10))})
            return ()=>{
                o.___removeAction(id)
            }
        },[])


        return o
    }
}

