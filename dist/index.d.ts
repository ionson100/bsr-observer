declare function GetRandomStrings(length: number): string;
declare class INotifyPropertyChanged {
    private mapAction;
    OnPropertyChanged(propertyName?: string, userData?: any): void;
    ___addAction(a: (propertyName?: string, userData?: any) => void): string;
    ___removeAction(id: string): boolean;
}
declare function CreateObserver<T extends INotifyPropertyChanged>(o: T): () => T;
declare function useObserver<T extends INotifyPropertyChanged>(o: T, callback: (propertyName?: string, userData?: any) => void): void;

export { CreateObserver, GetRandomStrings, INotifyPropertyChanged, useObserver };
