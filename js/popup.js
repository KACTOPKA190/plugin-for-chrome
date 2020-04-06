

// // callback when notification is created
// var notificationsCallback = function() {
//     chrome.browserAction.setBadgeBackgroundColor({ 'color': '#ff0000' });
//     chrome.browserAction.setBadgeText({ 'text': 'Done' });
//     chrome.storage.local.clear(function() {
//         alarmAudio.play();
//     });
// }

// // if the popup is open, it will receive this message and reset the timer
// chrome.runtime.sendMessage({ "20MinuteAlarm": "20 Minutes is over!" });

// // display the notification
// // chrome.notifications.create("20MinuteTimer", options, notificationsCallback);


// let timerId = setTimeout(function tick() {
//   chrome.browserAction.setBadgeText({ 'text': 'Xyi' });
//   timerId = setTimeout(tick, 1200);  
//   chrome.runtime.sendMessage({ "20MinuteAlarm": "20 Minutes is over!" });
// },1200);

