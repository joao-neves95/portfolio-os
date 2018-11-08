class SystemDirectoryModel extends DirectoryModel {
  constructor( name, content ) {
    super( PermissionType.UserRead, name, null, null, content );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = SystemDirectoryModel;

} catch {
  // Do nothing, this is the browser.
}
