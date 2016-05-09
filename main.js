var  defaultSettings = {
    who:'default'
};
var userSetting = {
    who: 'user'
};
var value = userSetting || defaultSettings;
console.log(value);