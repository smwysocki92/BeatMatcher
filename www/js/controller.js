myApp.controller("controller", function($scope) {
    $scope.alertDeviceInfo = function() {
        var deviceInfo = ('Device Platform: ' + device.platform + '\n'
        + 'Device Version: ' + device.version + '\n' + 'Device Model: '
        + device.model + '\n' + 'Device UUID: ' + device.uuid + '\n');
        navigator.notification.alert(deviceInfo);
    };

    $scope.alertGeoLocation = function() {
      var onSuccess = function(position) {
      alert('Latitude: ' + position.coords.latitude + '\n'
           + 'Longitude: ' + position.coords.longitude + '\n'
           + 'Altitude: ' + position.coords.altitude + '\n'
           + 'Accuracy: ' + position.coords.accuracy + '\n'
           + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy
           + '\n' + 'Heading: ' + position.coords.heading + '\n'
           + 'Timestamp: ' + position.timestamp + '\n'); };
      navigator.geolocation.getCurrentPosition(onSuccess);
    };

    $scope.beepNotify = function() {
        navigator.notification.beep(1);
    };

    $scope.vibrateNotify = function() {
        navigator.notification.vibrate(1000);
    };

});