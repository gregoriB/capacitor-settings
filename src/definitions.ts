export interface SettingsPlugin {
  openAccessibilitySettings(): Promise<boolean>;
}
