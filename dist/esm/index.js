import { useState, useEffect } from 'react';

function getRandomStrings(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>?/|.[]@#!~`$%^&*()_-+=:"';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var INotifyPropertyChanged = /** @class */ (function () {
    function INotifyPropertyChanged() {
        this.mapAction = new Map();
    }
    INotifyPropertyChanged.prototype.OnPropertyChanged = function (propertyName) {
        this.mapAction.forEach(function (value) {
            value.apply(propertyName);
        });
    };
    INotifyPropertyChanged.prototype.___addAction = function (a) {
        var id = getRandomStrings(10);
        this.mapAction.set(id, a);
        return id;
    };
    INotifyPropertyChanged.prototype.___removeAction = function (id) {
        return this.mapAction.delete(id);
    };
    return INotifyPropertyChanged;
}());
function CreateObserver(o) {
    return function () {
        var _a = useState(getRandomStrings(12)), setOb = _a[1];
        useEffect(function () {
            var id = o.___addAction(function () { setOb(getRandomStrings(13)); });
            return function () {
                o.___removeAction(id);
            };
        }, []);
        return o;
    };
}
function CreateObserverForClass(o, callback) {
    return o.___addAction(function () { callback(); });
}
function DeleteObserverForClass(o, id) {
    return o.___removeAction(id);
}

export { CreateObserver, CreateObserverForClass, DeleteObserverForClass, INotifyPropertyChanged, getRandomStrings };
