import { WebPlugin } from '@capacitor/core';

import type { SettingsPlugin } from './definitions';

export class SettingsWeb extends WebPlugin implements SettingsPlugin {
  async openAccessibilitySettings(): Promise<{ value: boolean }> {
    console.log("Accessibility Settings are not accessible on the web");
    return { value: false };
  }
}
