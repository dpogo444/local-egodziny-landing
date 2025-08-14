import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseApp } from '../index';

export const AnalyticsHandle = () => {
    const analytics = getAnalytics(firebaseApp);

    const logAnalyticsEvent = (eventName, eventParams = {}) => {
        logEvent(analytics, eventName, eventParams);
    };

    return { logAnalyticsEvent };
};