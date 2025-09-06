import { config, passport } from '@imtbl/sdk';

export const passportInstance = new passport.Passport({
  baseConfig: {
    environment: config.Environment.SANDBOX, // or Environment.PRODUCTION 
    publishableKey: 'pk_imapik-q5wOIRBeHlE8QU2BXp$Z', // replace with your publishable API key from Hub
  },
  clientId: 'Um4SDQOUEldKGBrLcXfro6fGksn2OGLN', // replace with your client ID from Hub
  redirectUri: 'http://localhost:3000/redirect', // replace with one of your redirect URIs from Hub
  logoutRedirectUri: 'http://localhost:3000/logout', // replace with one of your logout URIs from Hub
  audience: 'platform_api',
  scope: 'openid offline_access email transact',
  popupOverlayOptions: {
    disableGenericPopupOverlay: false, // Set to true to disable the generic pop-up overlay
    disableBlockedPopupOverlay: false, // Set to true to disable the blocked pop-up overlay
  }
});

