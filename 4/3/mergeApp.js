// Create a function that merges default settings with user settings without modifying either input. User values must override defaults. Preserve unspecified properties inside a nested notifications object.
const defaultSettings = {
    notifications: {
        email: true,
        sms: false,
        push: true,
    },
};
const userSettings = {
    notifications: {
        email: false,
        sms: true,
        push: false,
    },
};

function mergeSettings(defaultSettings, userSettings) {
    return { ...defaultSettings, ...userSettings, notifications: { ...defaultSettings.notifications, ...userSettings.notifications } };
}

console.log(mergeSettings(defaultSettings, userSettings));