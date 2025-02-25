// src/services/notificationService.ts
import * as Notifications from 'expo-notifications';

// 푸시 알림 등록 등 사전 설정은 App.tsx에서 한 번 해줍니다.
export const sendPushNotification = async (message: string) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '알림',
      body: message,
    },
    trigger: null, // 즉시 발송
  });
};