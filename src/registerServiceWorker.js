/* eslint-disable no-console */

import { register } from "register-service-worker";
import Axios from "axios";

// if (!process.env.NODE_ENV === "production") {

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
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log("Not subscribed to push service!");
        reg.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(
              "BITe_5VTcVRQhsR2oj717J1phxL-wp83rp7xSFC2dlMj8hx7RkZKeTf8o-xLD21J46GbFobpkcl9sV3FRqI_F68"
            )
          })
          .then(function(sub) {
            console.log("Endpoint URL: ", JSON.stringify(sub));
          })
          .catch(function(e) {
            if (Notification.permission === "denied") {
              console.warn("Permission for notifications was denied");
            } else {
              console.error("Unable to subscribe to push", e);
            }
          });
      } else {
        // We have a subscription, update the database
        const sub_object = sub.toJSON();

        console.log("Subscription object: ", sub_object);
        Axios.post(
          `${
            process.env.NODE_ENV === "production"
              ? "https://web-push.azurewebsites.net/"
              : "http://localhost:63079"
          }/push`,
          sub_object
        ).then(res => {
          console.log(res);
        });
      }
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
