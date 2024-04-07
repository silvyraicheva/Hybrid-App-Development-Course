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
document.addEventListener("init", function (event) {
    if (event.target.matches("#Tab3")) {
        refreshBatteryStatus();
    }
});

document.addEventListener("batterystatus", function (status) {
    var batteryLevel = status.level;
    var batteryRange = document.getElementById("batteryRange");
    batteryRange.value = batteryLevel;
    if (batteryLevel < 30) {
        ons.notification.toast("Battery low: " + batteryLevel, {
            timeout: 2000,
        });
    }
});

function testAction() {
    document.getElementById("lgQ").setAttribute("modifier", "large");
}
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    let output = document.getElementById("deviceInfo");
    output.textContent = `VERSION: ${device.version} PLATFORM ${device.platform}`;
}
