import { getAnalytics, Analytics as _Analytics } from '@firebase/analytics';
import { FirebaseApp } from '@firebase/app';

export class FireAnalytics {
  private static _instance: FireAnalytics;
  private static _analytics?: _Analytics;

  public static initialize(firebaseApp: FirebaseApp) {
    this._analytics = getAnalytics(firebaseApp);
  }

  public static get Analytics() {
    if (!this._analytics) {
      throw new Error('Analytics is not initialized');
    }
    return this._analytics;
  }

  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }
}
