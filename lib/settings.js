import * as Themes from "./styles/themes";
import * as Utils from "./utils";
import UserWidgetsCreator from "./components/settings/user-widgets-creator.jsx";

export { Component, styles, Wrapper } from "./components/settings/settings.jsx";

const SETTINGS_STORAGE_KEY = "simple-bar-settings";

const availableThemes = Object.keys(Themes.collection).map((key) => {
    const theme = Themes.collection[key];
    return { code: key, name: theme.name, kind: theme.kind };
});
const darkThemes = availableThemes.filter((theme) => theme.kind === "dark");
const lightThemes = availableThemes.filter((theme) => theme.kind === "light");

export const data = {
    global: {
        label: "Global",
        infos: [
            '- "<b>No bar background</b>" is visually better with the "Floating bar" option activated',
            '- The higher the "<b>Sliding animation pace</b>" value, the faster the texts slides (must be > 0, default is set to 4)',
            "<br/>",
            '<b>With "external config file" activated only:</b>',
            "- External config file is located in your home directory: <b>~/.simplebarrc</b>",
            "- You'll need to manually make your import/export",
            "- Import/export cannot be done while there are pending changes",
            "<br />",
            '<b>"Use background color as foreground"</b>:',
            "This setting will remove all background colors and use the removed color for all the foreground texts",
        ],
    },
    theme: { label: "theme", type: "radio", options: ["auto", "dark", "light"] },
    floatingBar: { label: "Floating bar", type: "checkbox" },
    noBarBg: { label: "No bar background", type: "checkbox" },
    noColorInData: { label: "No colors in data", type: "checkbox" },
    bottomBar: { label: "Bottom bar", type: "checkbox" },
    inlineSpacesOptions: { label: "Inline spaces options", type: "checkbox" },
    disableNotifications: { label: "Disable notifications", type: "checkbox" },
    compactMode: { label: "Compact mode", type: "checkbox" },
    widgetMaxWidth: { label: "Widget max width", type: "text" },
    widgetsBackgroundColorAsForeground: {
        label: "Use background color as foreground for widgets",
        type: "checkbox",
        fullWidth: true,
    },
    spacesBackgroundColorAsForeground: {
        label: "Use background color as foreground for spaces & process",
        type: "checkbox",
        fullWidth: true,
    },
    font: {
        label: "Global font",
        type: "text",
        placeholder: "default: JetBrains Mono",
        fullWidth: false,
    },
    fontSize: {
        label: "Font size",
        type: "text",
        placeholder: "default: 11px",
        fullWidth: false,
    },
    yabaiPath: {
        label: "Yabai path",
        type: "text",
        placeholder: "default: /usr/local/bin/yabai",
        fullWidth: true,
    },
    shell: {
        title: "With which shell do you want to execute simple-bar scripts?",
        label: "",
        type: "radio",
        options: ["sh", "bash", "dash"],
    },
    slidingAnimationPace: {
        label: "Sliding animation speed",
        type: "number",
        placeholder: "Default: 4",
        fullWidth: true,
    },
    externalConfigFile: { label: "External config file", type: "checkbox" },

    themes: { label: "Themes" },
    darkTheme: { label: "Dark theme", type: "select", options: darkThemes },
    lightTheme: { label: "Light theme", type: "select", options: lightThemes },

    process: { label: "Process" },
    displayOnlyCurrent: {
        label: "Display only current process name",
        type: "checkbox",
        fullWidth: true,
    },
    centered: { label: "Center process widget", type: "checkbox" },
    showCurrentSpaceMode: {
        label: "Show current space mode (BSP, Stack, Float)",
        type: "checkbox",
        fullWidth: true,
    },
    hideWindowTitle: {
        label: "Hide window titles (show only app name for each process)",
        type: "checkbox",
        fullWidth: true,
    },
    displayOnlyIcon: {
        label: "Display only process icon",
        type: "checkbox",
        fullWidth: true,
    },

    spacesDisplay: {
        label: "Spaces",
        infos: [
            "You can declare here which apps to exclude from the spaces display",
            'Each exclusion must be separated by a comma and a space ", "',
            "These exclusions will also be applied on the process name display",
        ],
    },
    exclusions: {
        label: "Exclusions by app name",
        type: "text",
        placeholder: "example: Finder, iTerm2",
        fullWidth: true,
    },
    titleExclusions: {
        label: "Exclusions by window title name",
        type: "text",
        placeholder: "example: Preferences",
        fullWidth: true,
    },
    spacesExclusions: {
        label: "Exclude spaces by space name",
        type: "text",
        placeholder: "example: Preferences",
        fullWidth: true,
    },
    exclusionsAsRegex: {
        label: "Use regex syntax in all exclusions fields",
        type: "checkbox",
        fullWidth: true,
    },
    displayAllSpacesOnAllScreens: {
        label: "Display all spaces on all screens",
        type: "checkbox",
        fullWidth: true,
    },
    hideEmptySpaces: { label: "Hide empty spaces", type: "checkbox" },
    showOptionsOnHover: {
        label: "Show space options on hover",
        type: "checkbox",
    },
    switchSpacesWithoutYabai: {
        label: "Switch spaces with ^⭠/^⭢ instead of yabai",
        type: "checkbox",
        fullWidth: true,
    },
    hideDuplicateAppsInSpaces: {
        label:
            "Hide duplicate app icons in same space (useful in combination with process widget)",
        type: "checkbox",
        fullWidth: true,
    },
    displayStickyWindowsSeparately: {
        label: "Display sticky windows separately",
        type: "checkbox",
        fullWidth: true,
    },
    widgets: { label: "Widgets" },
    processWidget: { label: "Process name", type: "checkbox" },
    zoomWidget: { label: "Zoom", type: "checkbox" },
    timeWidget: { label: "Time", type: "checkbox" },
    dateWidget: { label: "Date", type: "checkbox" },
    wifiWidget: { label: "Network", type: "checkbox" },
    vpnWidget: { label: "Viscosity VPN", type: "checkbox" },
    micWidget: { label: "Microphone", type: "checkbox" },
    soundWidget: { label: "Sound", type: "checkbox" },
    weatherWidget: { label: "Weather", type: "checkbox" },
    batteryWidget: { label: "Battery", type: "checkbox" },
    keyboardWidget: { label: "Keyboard", type: "checkbox" },
    spotifyWidget: { label: "Spotify", type: "checkbox" },
    cryptoWidget: { label: "Crypto", type: "checkbox" },
    stockWidget: { label: "Stock", type: "checkbox" },
    musicWidget: { label: "Music/iTunes", type: "checkbox" },
    mpdWidget: { label: "MPD state via mpc", type: "checkbox" },
    browserTrackWidget: { label: "Browser track", type: "checkbox" },
    dndWidget: { label: "Do not disturb", type: "checkbox" },

    weatherWidgetOptions: {
        label: "Weather",
        infos: [
            'Leave "Your location" blank in order to let simple-bar use your geolocation.',
            "Doing so, you need to allow Übersicht access to your location: a popup should appear on first use.",
        ],
    },
    unit: {
        title: "Temperature unit",
        label: "",
        type: "radio",
        options: ["C", "F"],
    },
    hideLocation: { label: "Hide location", type: "checkbox" },
    hideGradient: { label: "Hide gradient", type: "checkbox" },
    customLocation: {
        label: "Your location",
        type: "text",
        placeholder: "example: Paris",
        fullWidth: true,
    },

    batteryWidgetOptions: {
        label: "Battery",
        infos: [
            "no option (default) — Prevent the system from sleeping, not the display",
            "-d — Prevent the display from sleeping.",
            "-i — Prevent the system from idle sleeping.",
            "-s — Prevent the system from sleeping. This is valid only when system is running on AC power.",
            "-u — Declare that a user is active. If the display is off, this option turns the display on and prevents the display from going into idle sleep.",
            "-t 60 — Specifies the timeout value in seconds for which the command is valid.",
        ],
    },
    toggleCaffeinateOnClick: {
        label: "Toggle caffeinate on click",
        type: "checkbox",
    },
    caffeinateOption: {
        label: "Caffeinate options",
        type: "text",
        placeholder: "example: -d",
    },

    networkWidgetOptions: {
        label: "Network",
        infos: [
            "Here you can override the default displayed network source.",
            "And also turn Wifi on / off when clicking the Wifi icon.",
            "Additionally, you can choose to hide the network name for privacy."
        ],
    },
    networkDevice: {
        label: "Network device source name",
        type: "text",
        placeholder: "example: en0",
    },
    hideWifiIfDisabled: { label: "Hide if disabled", type: "checkbox" },
    toggleWifiOnClick: { label: "Toggle Wifi onclick", type: "checkbox" },
    hideNetworkName: { label: "Hide network name", type: "checkbox" },

    vpnWidgetOptions: {
        label: "Viscosity VPN",
        infos: ["Here you can set your Viscosity vpn connection name."],
    },
    vpnConnectionName: {
        label: "Viscosity connection name",
        type: "text",
        fullWidth: true,
    },
    vpnShowConnectionName: {
        label: "Display the connection name in the widget",
        type: "checkbox",
        fullWidth: true,
    },

    zoomWidgetOptions: { label: "Zoom status" },
    showVideo: { label: "Show video status", type: "checkbox" },
    showMic: { label: "Show mic status", type: "checkbox" },

    soundWidgetOptions: { label: "Sound" },
    micWidgetOptions: { label: "Mic" },
    keyboardWidgetOptions: { label: "Keyboard" },

    timeWidgetOptions: { label: "Time" },
    hour12: { label: "12h time format", type: "checkbox" },
    dayProgress: { label: "Day progress", type: "checkbox" },
    showSeconds: { label: "Show seconds", type: "checkbox" },

    dateWidgetOptions: { label: "Date" },
    shortDateFormat: { label: "Short format", type: "checkbox" },
    locale: { label: "Locale", type: "text", placeholder: "example: en-UK" },
    calendarApp: {
        label: "Calendar App",
        type: "text",
        placeholder: "example: Fantastical",
        fullWidth: true,
    },

    spotifyWidgetOptions: { label: "Spotify" },
    cryptoWidgetOptions: { label: "Crypto" },
    stockWidgetOptions: {
        label: "Stock",
        infos: [
            "Here you can configure your API key for the Yahoo Finance API.",
            "If you haven't gotten one yet, go to https://www.yahoofinanceapi.com/.",
            "You can register for free and use the Basic tier (100 requests/day).",
        ],
    },

    musicWidgetOptions: { label: "Music/iTunes" },

    mpdWidgetOptions: { label: "MPD via mpc" },
    mpdHost: {
        label: "Host",
        type: "text",
        placeholder: "example: 127.0.0.1",
    },
    mpdPort: {
        label: "Port",
        type: "text",
        placeholder: "example: 6600",
    },
    mpdFormatString: {
        label: "Format String (see `man mpc`)",
        type: "text",
        placeholder: "example: %title%[ - %artist%]|[%file%]",
        fullWidth: true,
    },

    browserTrackWidgetOptions: { label: "Browser" },
    showSpecter: { label: "Show animated specter", type: "checkbox" },
    compactMusicView: { label: "Compact view", type: "checkbox" },

    dndWidgetOptions: { label: "Do not disturb" },
    showDndLabel: { label: "Show on/off label", type: "checkbox" },

    denomination: { label: "Denomination", type: "text", placeholder: "usd" },
    identifiers: {
        label: "Identifiers",
        type: "text",
        placeholder: "celo,bitcoin,ethereum",
    },
    precision: { label: "Decimals rounding", type: "text", placeholder: 5 },

    symbols: {
        label: "Symbols for your stocks, ETFs, mutual funds, ...",
        type: "text",
        placeholder: "AAPL,TSLA",
        fullWidth: true,
    },
    yahooFinanceApiKey: {
        label: "Your API key for Yahoo Finance",
        type: "text",
        placeholder: "YOUR_API_KEY",
        fullWidth: true,
    },
    showSymbol: { label: "Show symbol", type: "checkbox" },
    showCurrency: { label: "Show currency", type: "checkbox" },
    showMarketPrice: { label: "Show market price", type: "checkbox" },
    showMarketChange: { label: "Show market change", type: "checkbox" },
    showMarketPercent: { label: "Show market change percent", type: "checkbox" },
    showColor: {
        label: "Show colored output for market change",
        type: "checkbox",
    },

    userWidgets: { label: "User widgets" },
    userWidgetsList: { type: "component", Component: UserWidgetsCreator },

    refreshFrequency: { label: "Refresh frequency (in ms)", type: "text" },

    customStyles: { label: "Custom styles" },
    styles: {
        label: "Styles",
        type: "textarea",
        fullWidth: true,
        minHeight: 240,
    },
};

export const defaultSettings = {
    global: {
        theme: "auto",
        floatingBar: false,
        noBarBg: false,
        noColorInData: false,
        bottomBar: false,
        inlineSpacesOptions: false,
        disableNotifications: false,
        compactMode: true,
        widgetMaxWidth: "160px",
        spacesBackgroundColorAsForeground: false,
        widgetsBackgroundColorAsForeground: false,
        font: "JetBrains Mono, Monaco, Menlo, monospace",
        fontSize: "11px",
        yabaiPath: "/usr/local/bin/yabai",
        shell: "sh",
        slidingAnimationPace: 4,
        externalConfigFile: false,
    },
    themes: {
        lightTheme: "NightShiftLight",
        darkTheme: "NightShiftDark",
    },
    process: {
        displayOnlyCurrent: false,
        centered: true,
        showCurrentSpaceMode: false,
        hideWindowTitle: false,
        displayOnlyIcon: false,
    },
    spacesDisplay: {
        exclusions: "",
        titleExclusions: "",
        spacesExclusions: "",
        exclusionsAsRegex: false,
        displayAllSpacesOnAllScreens: false,
        hideDuplicateAppsInSpaces: false,
        displayStickyWindowsSeparately: false,
        hideEmptySpaces: false,
        showOptionsOnHover: true,
        switchSpacesWithoutYabai: false,
    },
    widgets: {
        processWidget: true,
        weatherWidget: false,
        batteryWidget: true,
        wifiWidget: true,
        vpnWidget: false,
        zoomWidget: false,
        soundWidget: true,
        micWidget: true,
        dateWidget: true,
        timeWidget: true,
        keyboardWidget: false,
        spotifyWidget: true,
        cryptoWidget: false,
        stockWidget: false,
        musicWidget: true,
        mpdWidget: false,
        dndWidget: false,
        browserTrackWidget: true,
    },
    weatherWidgetOptions: {
        refreshFrequency: 1000 * 60 * 30,
        unit: "C",
        hideLocation: false,
        hideGradient: false,
        customLocation: "",
    },
    batteryWidgetOptions: {
        refreshFrequency: 10000,
        toggleCaffeinateOnClick: true,
        caffeinateOption: "",
    },
    networkWidgetOptions: {
        refreshFrequency: 20000,
        networkDevice: "en0",
        hideWifiIfDisabled: false,
        toggleWifiOnClick: false,
        hideNetworkName: false,
    },
    vpnWidgetOptions: {
        refreshFrequency: 8000,
        vpnConnectionName: "",
        vpnShowConnectionName: false,
    },
    zoomWidgetOptions: {
        refreshFrequency: 5000,
        showVideo: true,
        showMic: true,
    },
    soundWidgetOptions: {
        refreshFrequency: 20000,
    },
    micWidgetOptions: {
        refreshFrequency: 20000,
    },
    dateWidgetOptions: {
        refreshFrequency: 30000,
        shortDateFormat: true,
        locale: "en-UK",
        calendarApp: "",
    },
    timeWidgetOptions: {
        refreshFrequency: 1000,
        hour12: false,
        dayProgress: true,
        showSeconds: false,
    },
    keyboardWidgetOptions: {
        refreshFrequency: 20000,
    },
    cryptoWidgetOptions: {
        refreshFrequency: 5 * 60 * 1000,
        denomination: "usd",
        identifiers: "bitcoin,ethereum,celo",
        precision: 5,
    },
    stockWidgetOptions: {
        refreshFrequency: 15 * 60 * 1000,
        yahooFinanceApiKey: "YOUR_API_KEY",
        symbols: "AAPL,TSLA",
        showSymbol: true,
        showCurrency: true,
        showMarketPrice: true,
        showMarketChange: false,
        showMarketPercent: true,
        showColor: true,
    },
    spotifyWidgetOptions: {
        refreshFrequency: 10000,
        showSpecter: true,
    },
    musicWidgetOptions: {
        refreshFrequency: 10000,
        showSpecter: true,
        compactMusicView: true,
    },
    mpdWidgetOptions: {
        refreshFrequency: 10000,
        showSpecter: true,
        mpdPort: "6600",
        mpdHost: "127.0.0.1",
        mpdFormatString: "%title%[ - %artist%]|[%file%]",
    },
    dndWidgetOptions: {
        refreshFrequency: 60000,
        showDndLabel: false,
    },
    browserTrackWidgetOptions: {
        refreshFrequency: 10000,
        showSpecter: true,
    },
    userWidgets: {
        userWidgetsList: {},
    },
    customStyles: {
        styles: "/* your custom css styles here */",
    },
};

export const userWidgetDefault = {
    title: "Your widget name",
    icon: "Widget",
    backgroundColor: "--main-alt",
    output: 'echo "Hello world!"',
    onClickAction: "",
    onRightClickAction: "",
    onMiddleClickAction: "",
    refreshFrequency: 10000,
    active: true,
    noIcon: false,
};

export const userWidgetColors = [
    "--main",
    "--main-alt",
    "--minor",
    "--accent",
    "--red",
    "--green",
    "--yellow",
    "--orange",
    "--blue",
    "--magenta",
    "--cyan",
];

export const get = () => {
    const storedSettings = window.localStorage.getItem(SETTINGS_STORAGE_KEY);
    const settings = storedSettings
        ? Utils.mergeDeep(defaultSettings, JSON.parse(storedSettings))
        : defaultSettings;
    return settings;
};

export const set = async (newSettings) =>
    window.localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(newSettings)
    );

export const getRefreshFrequency = (value, defaultValue) => {
    const parsedValue = parseInt(value);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
};
