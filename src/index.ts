import { registerPlugin } from '@capacitor/core';

import type { SettingsPlugin } from './definitions';

const Settings = registerPlugin<SettingsPlugin>('Settings', {
  web: () => import('./web').then(m => new m.SettingsWeb()),
});

export * from './definitions';
export { Settings };
