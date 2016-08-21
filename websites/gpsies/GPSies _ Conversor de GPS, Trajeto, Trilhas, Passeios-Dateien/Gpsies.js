
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (Gpsies == null) var Gpsies = {};
Gpsies._path = '/dwr';
Gpsies.setDisplayTablePageSize = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'setDisplayTablePageSize', p0, callback);
}
Gpsies.setOnlyOwnClientTracks = function(callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'setOnlyOwnClientTracks', callback);
}
Gpsies.getCountTrackInCountry = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getCountTrackInCountry', p0, callback);
}
Gpsies.setMapType = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'setMapType', p0, p1, callback);
}
Gpsies.setMapOverlay = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'setMapOverlay', p0, p1, callback);
}
Gpsies.getJavascriptMessage = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getJavascriptMessage', p0, callback);
}
Gpsies.deleteComment = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'deleteComment', p0, callback);
}
Gpsies.findMarkers = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'findMarkers', p0, p1, p2, p3, p4, p5, p6, p7, p8, callback);
}
Gpsies.getDownloadFileAsString = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getDownloadFileAsString', p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, callback);
}
Gpsies.getMilestones = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getMilestones', p0, p1, callback);
}
Gpsies.loadMapUserMarker = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'loadMapUserMarker', p0, callback);
}
Gpsies.insertUserNotepad = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'insertUserNotepad', p0, callback);
}
Gpsies.removeUserNotepad = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'removeUserNotepad', p0, callback);
}
Gpsies.insertUserFollower = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'insertUserFollower', p0, callback);
}
Gpsies.removeUserFollower = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'removeUserFollower', p0, callback);
}
Gpsies.requestForRecalculateElevation = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'requestForRecalculateElevation', p0, p1, callback);
}
Gpsies.reportAsSpam = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'reportAsSpam', p0, p1, callback);
}
Gpsies.sendRecommendFriend = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'sendRecommendFriend', p0, p1, p2, callback);
}
Gpsies.sendPrivateMessage = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'sendPrivateMessage', p0, p1, p2, callback);
}
Gpsies.getPicasaPhotos = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getPicasaPhotos', p0, p1, p2, callback);
}
Gpsies.getForerunnerTrack = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getForerunnerTrack', p0, callback);
}
Gpsies.buildChartHtml = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'buildChartHtml', p0, callback);
}
Gpsies.getProgressiveElevationData = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getProgressiveElevationData', p0, callback);
}
Gpsies.sendToOSM = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'sendToOSM', p0, p1, p2, callback);
}
Gpsies.sendToTwitter = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'sendToTwitter', p0, callback);
}
Gpsies.getAjaxProxyResponse = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getAjaxProxyResponse', p0, callback);
}
Gpsies.getGeonamesByGeoBound = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getGeonamesByGeoBound', p0, p1, p2, p3, p4, p5, callback);
}
Gpsies.getBestCountryByGeoCoordinate = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getBestCountryByGeoCoordinate', p0, p1, callback);
}
Gpsies.moveClientTrack = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'moveClientTrack', p0, callback);
}
Gpsies.assignTrackFolder = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'assignTrackFolder', p0, p1, p2, p3, p4, callback);
}
Gpsies.removeTrackFolder = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'removeTrackFolder', p0, p1, p2, p3, p4, callback);
}
Gpsies.getGeocoderLatLng = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getGeocoderLatLng', p0, callback);
}
Gpsies.getGeocoderLocations = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getGeocoderLocations', p0, p1, callback);
}
Gpsies.calculateRealDistanceKm = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'calculateRealDistanceKm', p0, callback);
}
Gpsies.correctTrackLocations = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'correctTrackLocations', p0, callback);
}
Gpsies.getLiveTrackingUserListByFileId = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getLiveTrackingUserListByFileId', p0, callback);
}
Gpsies.getLiveTrackingUserList = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getLiveTrackingUserList', p0, p1, callback);
}
Gpsies.getLiveTrackingMap = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getLiveTrackingMap', p0, p1, callback);
}
Gpsies.getLastLiveTrackingEntryMap = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getLastLiveTrackingEntryMap', p0, p1, callback);
}
Gpsies.deleteLiveTracking = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'deleteLiveTracking', p0, p1, callback);
}
Gpsies.completeLiveTracking = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'completeLiveTracking', p0, p1, p2, callback);
}
Gpsies.getLiveTrackingArchiveEntry = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getLiveTrackingArchiveEntry', p0, p1, p2, callback);
}
Gpsies.getClosestLiveTrackingTrackpointList = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getClosestLiveTrackingTrackpointList', p0, p1, p2, p3, callback);
}
Gpsies.correctClosestLiveTrackingTrackpoint = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'correctClosestLiveTrackingTrackpoint', p0, p1, p2, p3, p4, callback);
}
Gpsies.allowDisallowLiveTrackingUpdates = function(p0, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'allowDisallowLiveTrackingUpdates', p0, callback);
}
Gpsies.loginUser = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'loginUser', p0, p1, callback);
}
Gpsies.validateRegisterUser = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'validateRegisterUser', p0, p1, p2, p3, p4, callback);
}
Gpsies.updateAvatarCheck = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'updateAvatarCheck', p0, p1, callback);
}
Gpsies.updateUserLiveTrackingStatus = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'updateUserLiveTrackingStatus', p0, p1, callback);
}
Gpsies.getWaypointAsString = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getWaypointAsString', p0, p1, p2, p3, p4, p5, p6, callback);
}
Gpsies.updateTrackMetaStatus = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'updateTrackMetaStatus', p0, p1, callback);
}
Gpsies.getFlickrByGeoBound = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getFlickrByGeoBound', p0, p1, p2, p3, callback);
}
Gpsies.getQypeByGeoBound = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getQypeByGeoBound', p0, p1, p2, p3, callback);
}
Gpsies.getWikipediaByGeoBound = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getWikipediaByGeoBound', p0, p1, p2, p3, p4, callback);
}
Gpsies.getPanoramioByGeoBound = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getPanoramioByGeoBound', p0, p1, p2, p3, p4, callback);
}
Gpsies.getWeatherByGeoBound = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getWeatherByGeoBound', p0, p1, p2, p3, p4, callback);
}
Gpsies.getGeoNames = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getGeoNames', p0, p1, callback);
}
Gpsies.getGoogleGeocode = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getGoogleGeocode', p0, p1, callback);
}
Gpsies.getNominatimGeocode = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getNominatimGeocode', p0, p1, callback);
}
Gpsies.getElevation = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'getElevation', p0, p1, callback);
}
Gpsies.updateComment = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'updateComment', p0, p1, p2, callback);
}
Gpsies.insertComment = function(p0, p1, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'insertComment', p0, p1, callback);
}
Gpsies.rateTrack = function(p0, p1, p2, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'rateTrack', p0, p1, p2, callback);
}
Gpsies.loadTrackData = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(Gpsies._path, 'Gpsies', 'loadTrackData', p0, p1, p2, p3, callback);
}
