class SystemDirectoryModel extends DirectoryModel {
  constructor( name, content ) {
    super( PermissionType.UserRead, name, null, null, content );
  }
}
