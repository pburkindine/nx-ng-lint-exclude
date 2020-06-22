module.exports = {
  name: 'ng-lint-exclude-nx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-lint-exclude-nx',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
