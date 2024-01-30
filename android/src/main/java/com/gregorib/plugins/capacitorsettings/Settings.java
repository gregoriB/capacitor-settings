package com.gregorib.plugins.capacitorsettings;

import android.app.Activity;
import android.content.Intent;
import android.content.Context;
import android.os.Bundle;

import androidx.annotation.Nullable;

public class Settings extends Activity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
    }

    public void openAccessibilitySettings(Context context) {
        Intent intent = new Intent(android.provider.Settings.ACTION_ACCESSIBILITY_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        context.startActivity(intent);
    }
}
