package com.reactnativenavigation.react;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.UIImplementation;
import com.facebook.react.uimanager.UIImplementationProvider;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.events.EventDispatcher;

import java.util.List;

/**
 * Created by Pavel on 06.06.2018.
 */

/**
 * Provides UIImplementation to use in {@link UIManagerModule}.
 */
public class WixUIImplementationProvider extends UIImplementationProvider {
    @Override
    public UIImplementation createUIImplementation(
            ReactApplicationContext reactContext,
            UIManagerModule.ViewManagerResolver viewManagerResolver,
            EventDispatcher eventDispatcher,
            int minTimeLeftInFrameForNonBatchedOperationMs) {
        return new WixUIImplementation(
                reactContext,
                viewManagerResolver,
                eventDispatcher,
                minTimeLeftInFrameForNonBatchedOperationMs);
    }

    @Override
    public UIImplementation createUIImplementation(
            ReactApplicationContext reactContext,
            List<ViewManager> viewManagerList,
            EventDispatcher eventDispatcher,
            int minTimeLeftInFrameForNonBatchedOperationMs) {
        return new WixUIImplementation(
                reactContext,
                viewManagerList,
                eventDispatcher,
                minTimeLeftInFrameForNonBatchedOperationMs);
    }
}