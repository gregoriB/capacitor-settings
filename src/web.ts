import { WebPlugin } from '@capacitor/core';

import type { SettingsPlugin } from './definitions';

export class SettingsWeb extends WebPlugin implements SettingsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
