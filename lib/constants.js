'use strict';

var os = require('os');
var uuid = require('uuid');
var join = require('path').join;

module.exports = {
  PLUGIN_NAME: 'gulp-msbuild',

  MSBUILD_VERSIONS: {
    1.0: 'v1.0.3705',
    1.1: 'v1.1.4322',
    2.0: 'v2.0.50727',
    3.5: 'v3.5',
    4.0: 'v4.0.30319',
    12.0: '12.0',
    14.0: '14.0',
    15.0: '15.0',
    16.0: '16.0',
    Current: 'Current'
  },

  DEFAULTS: {
    stdout: false,
    stderr: true,
    errorOnFail: false,
    logCommand: false,
    targets: ['Rebuild'],
    configuration: 'Release',
    toolsVersion: 4.0,
    properties: {},
    verbosity: 'normal',
    maxcpucount: 0,
    nologo: true,
    platform: process.platform,
    architecture: detectArchitecture(),
    windir: process.env.WINDIR,
    msbuildPath: '',
    fileLoggerParameters: undefined,
    consoleLoggerParameters: undefined,
    loggerParameters: undefined,
    nodeReuse: true,
    customArgs: [],
    emitEndEvent: false,
    solutionPlatform: null,
    emitPublishedFiles: false,
    deployDefaultTarget: 'WebPublish',
    webPublishMethod: 'FileSystem',
    deleteExistingFiles: 'true',
    findDependencies: 'true',
    publishDirectory: join(os.tmpdir(), uuid.v4())
  }
};

function detectArchitecture() {
  if (process.platform.match(/^win/)) {
    return process.env.hasOwnProperty('ProgramFiles(x86)') ? 'x64' : 'x86';
  }

  return os.arch();
}

