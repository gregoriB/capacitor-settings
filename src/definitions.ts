export interface SettingsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
