const generateRandomString = (length: number) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let text = '';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export const generateCodeVerifier = () => {
  return generateRandomString(48);
};

export const generateCodeChallenge = async (codeVerifier: string) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
  let str = '';
  const bytes = new Uint8Array(digest);
  const len = digest.byteLength;
  for (let i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};

export const generateState = () => {
  return generateRandomString(16);
};
