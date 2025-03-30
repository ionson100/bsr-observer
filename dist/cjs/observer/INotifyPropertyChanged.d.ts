export declare function getRandomStrings(length: number): string;
export declare class INotifyPropertyChanged {
    private mapAction;
    constructor();
    OnPropertyChanged(s?: string | unknown): void;
    ___addAction(a: () => void): string;
    ___removeAction(id: string): boolean;
}
export declare function CreateObserver<T extends INotifyPropertyChanged>(o: T): () => T;
export declare function CreateObserverForClass<T extends INotifyPropertyChanged>(o: T, callback: () => void): string;
export declare function DeleteObserverForClass<T extends INotifyPropertyChanged>(o: T, id: string): boolean;
