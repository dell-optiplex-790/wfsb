/*
 * Name:      "What Firefox Should've Been" (WFSB)
 * Author:    dell-optiplex-790
 * License:   MIT
 */



// minimalism
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.toolbar.enabled", false);
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);
user_pref("browser.promo.pin.enabled", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.pinned", false);
user_pref("browser.newtabpage.activity-stream.newtabShortcuts.refresh", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", false);
user_pref("browser.firefox-view.virtual-list.enabled", false);
user_pref("services.sync.prefs.sync.browser.firefox-view.feature-tour", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.aboutwelcome.enabled", false);

// hey mozilla, don't steal features from chrome!
user_pref("browser.tabs.groups.enabled", false);

// get rid of those clankers
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.shortcuts.custom", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.checkForMemory", false);
user_pref("browser.ml.enable", false);

// privacy
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.user_characteristics_ping.opt-out", true);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.enabled", false);

// FREEDOM
user_pref("xpinstall.signatures.required", false);
user_pref("xpinstall.whitelist.required", false);
user_pref("browser.aboutConfig.showWarning", false);