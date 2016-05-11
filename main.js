'use strict';
var task = { 
   _dueDate: '1/15/16'
};
Object.defineProperty(task, 'dueDate', {
    get: function () {
        return this._dueDate;
    },
    set: function (newValue) {
        this._dueDate = newValue;
    }
  
});
task.dueDate = '2/2/16';
console.log(task.dueDate);