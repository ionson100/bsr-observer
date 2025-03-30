declare function getRandomStrings(length: number): string;
declare class INotifyPropertyChanged {
    private mapAction;
    constructor();
    OnPropertyChanged(s?: string | unknown): void;
    ___addAction(a: () => void): string;
    ___removeAction(id: string): boolean;
}
declare function CreateObserver<T extends INotifyPropertyChanged>(o: T): () => T;
declare function CreateObserverForClass<T extends INotifyPropertyChanged>(o: T, callback: () => void): string;
declare function DeleteObserverForClass<T extends INotifyPropertyChanged>(o: T, id: string): boolean;

export { CreateObserver, CreateObserverForClass, DeleteObserverForClass, INotifyPropertyChanged, getRandomStrings };
