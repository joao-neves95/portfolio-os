let fsItemModelBaseFile;

try {
  if ( process.env !== undefined )
    fsItemModelBaseFile = require( './fsItemModelBase' );

} catch {
  // This is the browser.
  fsItemModelBaseFile = FSItemModelBase;
}

class FileModel extends fsItemModelBaseFile {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { PermissionType } permission PermissionType enum
   * @param { string } name
   * @param { string } content
   * @param { string } iconUrl "null" defaults to the default file icon.
   */
  constructor( type, permission, name, content, iconUrl = null ) {
    super( type, permission, name, content, iconUrl );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = FileModel;

} catch {
  // Do nothing, this is the browser.
}
