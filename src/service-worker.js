self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("push", function(e) {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "icon"
  });
});

self.addEventListener("notificationclick", function(event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  // if (click_open_url) {
  //   const promiseChain = clients.openWindow(click_open_url);
  //   event.waitUntil(promiseChain);
  // }
});
