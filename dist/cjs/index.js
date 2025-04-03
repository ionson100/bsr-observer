'use strict';

var react = require('react');

function GetRandomStrings(length) {
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
    INotifyPropertyChanged.prototype.OnPropertyChanged = function (propertyName, userData) {
        var _this = this;
        this.mapAction.forEach(function (value) {
            value.apply(_this, [propertyName, userData]);
        });
    };
    INotifyPropertyChanged.prototype.___addAction = function (a) {
        var id = GetRandomStrings(10);
        this.mapAction.set(id, a);
        return id;
    };
    INotifyPropertyChanged.prototype.___removeAction = function (id) {
        return this.mapAction.has(id) ? this.mapAction.delete(id) : false;
    };
    return INotifyPropertyChanged;
}());
function CreateObserver(o) {
    return function () {
        var _a = react.useState(GetRandomStrings(10)), setOb = _a[1];
        react.useEffect(function () {
            var id = o.___addAction(function () { setOb(GetRandomStrings(10)); });
            return function () {
                o.___removeAction(id);
            };
        }, []);
        return o;
    };
}

exports.CreateObserver = CreateObserver;
exports.GetRandomStrings = GetRandomStrings;
exports.INotifyPropertyChanged = INotifyPropertyChanged;
