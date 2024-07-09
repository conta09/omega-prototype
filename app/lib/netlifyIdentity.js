// lib/netlifyIdentity.js
import netlifyIdentity from 'netlify-identity-widget';

export const initNetlifyIdentity = () => {
  netlifyIdentity.init();
};

export const login = () => {
  netlifyIdentity.open('login');
};

export const logout = () => {
  netlifyIdentity.logout();
};

export const onAuthChange = (callback) => {
  netlifyIdentity.on('login', callback);
  netlifyIdentity.on('logout', callback);
};

export default netlifyIdentity;
