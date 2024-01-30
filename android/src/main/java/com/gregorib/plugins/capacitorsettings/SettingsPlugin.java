package com.gregorib.plugins.capacitorsettings;

import android.content.Context;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Settings")
public class SettingsPlugin extends Plugin {

    private Settings settings = new Settings();

    @PluginMethod
    protected void openAccessibilitySettings() {
        Context context = getContext();
        settings.openAccessibilitySettings(context);
    }
}
