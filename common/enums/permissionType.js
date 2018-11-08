const PermissionType = Object.freeze( {
  /** Read only */
  UserRead: 'user.read',
  /** Read and write */
  UserWrite: 'user.write',
  /** Read, write, delete */
  UserDelete: 'user.delete',
  /** Admin only (Portfolio-OS) */
  Admin: 'admin'
} );

try {
  if ( process.env !== undefined )
    module.exports = PermissionType;

} catch {
  // Do nothing, this is the browser.
}
