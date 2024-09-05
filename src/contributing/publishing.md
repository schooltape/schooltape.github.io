# Publishing

See [wxt.dev](https://wxt.dev/get-started/publishing.html) for more information.

## Chrome Web Store

::: info
For first time setup, please refer to the Chrome Web Store [docs](https://developer.chrome.com/docs/webstore/using-api#setup)
:::

Useful links:

- [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Google Cloud Console](https://console.developers.google.com/)
- [Google OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)

This documentation exists as the CWS API keys seem to invalidate after one month of activity. To fix this:

1. Go to the [Google Cloud Console](https://console.developers.google.com/) -> `Select Schooltape` -> `Credentials` -> `Schooltape` and take note of the client ID and client secret.
2. Open https://developers.google.com/oauthplayground.
3. Click the settings icon in the top right, and choose "Use your own OAuth credentials".
4. Enter your client ID and client secret.
5. Add `https://www.googleapis.com/auth/chromewebstore` to the "Input your own scopes" field.
6. Click "Authorize APIs".
7. Follow the steps to sign in with your Google Account.
8. Click "Exchange authorization code for tokens" to generate a new access token.
9. Navigate to https://github.com/schooltape/schooltape/settings/secrets/actions
10. Edit the following secrets:
    - `CHROME_REFRESH_TOKEN` with the refresh token from the OAuth 2.0 Playground.

::: warning
If you get an error message, open a new window without cookies and try again. It is probably best to just do this in the first case.
:::
