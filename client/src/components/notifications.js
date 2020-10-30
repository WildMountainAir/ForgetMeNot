import * as PusherPushNotifications from '@pusher/push-notifications-web';

const beamsClient = new PusherPushNotifications.Client({
  instanceId: '<YOUR_INSTANCE_ID_HERE>',
});

beamsClient.start()
    .then(() => {
    // Build something beatiful 🌈
    });
