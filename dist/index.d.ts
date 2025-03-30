declare function GetRandomStrings(length: number): string;
declare class INotifyPropertyChanged {
    private mapAction;
    constructor();
    OnPropertyChanged(propertyName?: string): void;
    ___addAction(a: (propertyName?: string) => void): string;
    ___removeAction(id: string): boolean;
}
declare function CreateObserver<T extends INotifyPropertyChanged>(o: T): () => T;

export { CreateObserver, GetRandomStrings, INotifyPropertyChanged };
