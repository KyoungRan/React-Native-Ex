package com.rnnativemodule;

import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    CustomModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void show() {
        CharSequence text = "Hi from Android";
        Toast.makeText(reactContext, text, Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void getDeviceId(Promise promise) {
        try {
            String android_id = Settings.Secure.getString(reactContext.getContentResolver(), Settings.Secure.ANDROID_ID);
            promise.resolve(android_id);
        } catch (Exception e) {
            String code = "Error";
            promise.reject(code, e);
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }
}
