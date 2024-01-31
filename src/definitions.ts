export interface SettingsPlugin {
  openAccessibilitySettings(): Promise<{ value: boolean }>;
}
