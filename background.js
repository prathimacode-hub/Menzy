var water_alarm = chrome.alarms.create("waterAlarm", { delayInMinutes: 0.05, periodInMinutes: 45 });
var blink_alarm = chrome.alarms.create("blinkAlarm", { delayInMinutes: 0.05, periodInMinutes: 20 });
var posture_alarm = chrome.alarms.create("postureAlarm", { delayInMinutes: 0.05, periodInMinutes: 30 });
var stretch_alarm = chrome.alarms.create("stretchAlarm", { delayInMinutes: 0.05, periodInMinutes: 90 });

chrome.alarms.onAlarm.addListener( function (blink_alarm) {
    if (blink_alarm.name === "blinkAlarm") {
        console.log("blink Alarm");
        var notification = chrome.notifications.create(
            'take-a-break-notification', {
                type: 'basic',
                iconUrl: './assets/glasses.png',
                title: 'Take a break!',
                message: 'Look away from your computer screen and focus on a spot 20 feet away for 20 seconds.'
            },
            function () {}
        );
    }
});

chrome.alarms.onAlarm.addListener( function (water_alarm) {
    if (water_alarm.name === "waterAlarm") {
        console.log("water Alarm");
        var notification = chrome.notifications.create(
            'take-a-break-notification', {
                type: 'basic',
                iconUrl: './assets/water.png',
                title: 'Stay Hydrated!',
                message: 'Drink a glass of water and stay hydrated and glowing.'
            },
            function () {}
        );
    }
});

chrome.alarms.onAlarm.addListener( function (posture_alarm) {
    if (posture_alarm.name === "postureAlarm") {
        console.log("posture Alarm");
        var notification = chrome.notifications.create(
            'take-a-break-notification', {
                type: 'basic',
                iconUrl: './assets/posture.png',
                title: 'Sit Straight!',
                message: 'Maintain a straight posture. Increase you concentration and healthy life.'
            },
            function () {}

        );
    }
});

chrome.alarms.onAlarm.addListener( function (stretch_alarm) {
    if (stretch_alarm.name === "stretchAlarm") {
        console.log("stretch Alarm");
        var notification = chrome.notifications.create(
            'take-a-break-notification', {
                type: 'basic',
                iconUrl: './assets/stretch.png',
                title: 'Stretch Yourself!',
                message: 'It\'s time to drop everything you are doing. Stand up and stretch yourself for a while.'
            },
            function () {}
        );
    }
});
