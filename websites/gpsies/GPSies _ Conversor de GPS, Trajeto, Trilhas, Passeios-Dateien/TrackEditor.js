
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (TrackEditor == null) var TrackEditor = {};
TrackEditor._path = '/dwr';
TrackEditor.insertPoint = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'insertPoint', p0, callback);
}
TrackEditor.removeWaypoint = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'removeWaypoint', p0, callback);
}
TrackEditor.addWaypoint = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'addWaypoint', p0, callback);
}
TrackEditor.updateWaypoint = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'updateWaypoint', p0, callback);
}
TrackEditor.addPoint = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'addPoint', p0, callback);
}
TrackEditor.updatePoint = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'updatePoint', p0, callback);
}
TrackEditor.removePoint = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'removePoint', p0, callback);
}
TrackEditor.addPointStandard = function(p0, p1, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'addPointStandard', p0, p1, callback);
}
TrackEditor.insertPointStandard = function(p0, p1, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'insertPointStandard', p0, p1, callback);
}
TrackEditor.updatePointStandard = function(p0, p1, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'updatePointStandard', p0, p1, callback);
}
TrackEditor.removePointStandard = function(p0, p1, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'removePointStandard', p0, p1, callback);
}
TrackEditor.setMapRoute = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'setMapRoute', p0, callback);
}
TrackEditor.storeTrackValues = function(p0, p1, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'storeTrackValues', p0, p1, callback);
}
TrackEditor.storeTrackValues = function(p0, p1, p2, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'storeTrackValues', p0, p1, p2, callback);
}
TrackEditor.resetTrack = function(callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'resetTrack', callback);
}
TrackEditor.resetTrackStandard = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'resetTrackStandard', p0, callback);
}
TrackEditor.storeCreatedTrack = function(p0, p1, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'storeCreatedTrack', p0, p1, callback);
}
TrackEditor.getEditorTracks = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'getEditorTracks', p0, callback);
}
TrackEditor.getRouting = function(p0, callback) {
  dwr.engine._execute(TrackEditor._path, 'TrackEditor', 'getRouting', p0, callback);
}
