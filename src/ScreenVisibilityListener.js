import {
  NativeAppEventEmitter,
  DeviceEventEmitter,
  Platform
} from 'react-native';
export default class ScreenVisibilityListener {
  constructor(listeners) {
    this.emitter = Platform.OS === 'android' ? DeviceEventEmitter : NativeAppEventEmitter;
    this.listeners = listeners;
  }

  register() {
    const {willAppear, didAppear, willDisappear, didDisappearб willReset, didReset} = this.listeners;
    this.willAppearSubscription = willAppear && this.emitter.addListener('willAppear', willAppear);
    this.didAppearSubscription = didAppear && this.emitter.addListener('didAppear', didAppear);
    this.willDisappearSubscription = willDisappear && this.emitter.addListener('willDisappear', willDisappear);
    this.didDisappearSubscription = didDisappear && this.emitter.addListener('didDisappear', didDisappear);
    this.willResetSubscription = willReset && this.emitter.addListener('willReset', willReset);
    this.didResetSubscription = didReset && this.emitter.addListener('didReset', didReset);
  }

  unregister() {
    if (this.willAppearSubscription) {
      this.willAppearSubscription.remove();
    }

    if (this.didAppearSubscription) {
      this.didAppearSubscription.remove();
    }

    if (this.willDisappearSubscription) {
      this.willDisappearSubscription.remove();
    }

    if (this.didDisappearSubscription) {
      this.didDisappearSubscription.remove();
    }

    if (this.willResetSubscription) {
      this.willResetSubscription.remove();
    }

    if (this.didResetSubscription) {
      this.didResetSubscription.remove();
    }
  }
}
