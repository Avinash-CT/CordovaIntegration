/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('onPushNotification', this.onPushNotification, false); // optional, register to receive push notification payloads.

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    CleverTap.onUserLogin ({
        'Name': 'Avinash Kalani', 
        'Identity': '9766609', 
        "Phone no.": +919766609447,
        'Email': 'avinash@clevertap.com' 
    });
    
    // CleverTap.setDebugLevel(3);
    // CleverTap.registerPush();
    // CleverTap.prototype.registerPush = function () {
    //     cordova.exec(null, null, "CleverTapPlugin", "registerPush", [])}
    
    // Pavithra adviced us to remove setPushToken, as the token should pass without it
    // CleverTap.setPushToken("220881803758"); //"220881803758".trim()); // Token gets passed using this method, else doesn't
    // CleverTap.createNotification();
    CleverTap.createNotificationChannel("123", "Hey", "desc", 5, true);
    // CleverTap.onPushNotification (alert(JSON.stringify(e.notification)))
    setdebuglog();
}
