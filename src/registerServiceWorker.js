/* eslint-disable no-console */

import { register } from "register-service-worker";
import Axios from "axios";
// if (true) {
// if (!process.env.NODE_ENV === "production") {

// self.addEventListener("push", function(e) {
//   var options = {
//     body: "This notification was generated from a push!",
//     icon: "images/example.png",
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: "2"
//     },
//     actions: [
//       {
//         action: "explore",
//         title: "Explore this new world",
//         icon: "images/checkmark.png"
//       },
//       { action: "close", title: "Close", icon: "images/xmark.png" }
//     ]
//   };
//   e.waitUntil(self.registration.showNotification("Hello world!", options));
// });

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

register(`${process.env.BASE_URL}service-worker.js`, {
  ready() {
    console.log(
      "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB"
    );
  },
  registered(reg) {
    reg.pushManager.getSubscription().then(function(sub) {
      reg.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            "BITe_5VTcVRQhsR2oj717J1phxL-wp83rp7xSFC2dlMj8hx7RkZKeTf8o-xLD21J46GbFobpkcl9sV3FRqI_F68"
          )
        })
        .then(function(sub) {
          const sub_object = sub.toJSON();
          console.log("Subscription object: ", sub_object);
          Axios.post("http://localhost:63079/push", sub_object).then(res => {
            console.log(res);
          });
        })
        .catch(function(e) {
          if (Notification.permission === "denied") {
            console.warn("Permission for notifications was denied");
          } else {
            console.error("Unable to subscribe to push", e);
          }
        });
    });
    console.log("Service worker has been registered.");
  },
  cached() {
    console.log("Content has been cached for offline use.");
  },
  updatefound() {
    console.log("New content is downloading.");
  },
  updated() {
    console.log("New content is available; please refresh.");
  },
  offline() {
    console.log(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    console.error("Error during service worker registration:", error);
  }
});
// }

// self.addEventListener("push", function(event) {
//   if (event.data) {
//     console.log("Push event!! ", event.data.text());
//   } else {
//     console.log("Push event but no data");
//   }
// });

// Axios.get("http://localhost:63079/").then(res => {
//   console.log(res);
// });
