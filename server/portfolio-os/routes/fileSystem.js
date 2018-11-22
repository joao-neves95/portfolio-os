/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const DirectoryModel = require( '../../../common/models/directoryModel' );
const FileModel = require( '../../../common/models/fileModel' );
const PermissionType = require( '../../../common/enums/permissionType' );

// TODO: Find a way to not repeat code on every API method type (GET, POST, PUT, DELETE)

// Common query: "?path=<path, to, the, fsItem>"

/**
 * For the path " root/users/local "
 */
module.exports = {
  getUserItem: ( req, res ) => {
    const reqRouteArray = req.query.path.split( ',' );

    // TODO: Get the item (directory/file) from the file system.
    // This is temporary.
    const fsItem = new DirectoryModel( PermissionType.UserWrite );

    if ( !fsItem )
      // TODO: Send not found response to the API.
      return res.status( 404 );

    const hasPermission = this.____checkFilePermissions( fsItem.permission, PermissionType.UserRead );
    if ( !hasPermission )
      // TODO: Send forbiden response to the API.
      return res.status( 403 );

    // GET DB row.
  },

  putUserItem: ( req, res ) => {
    const requestedRoute = req.query.path.split( ',' );

    // TODO: Get the item (directory/file) from the file system.
    // This is temporary.
    const fsItem = new DirectoryModel( PermissionType.UserWrite );

    if ( !fsItem )
      // TODO: Send not found response to the API.
      return res.status( 404 );

    const hasPermission = this.____checkFilePermissions( fsItem.permission, PermissionType.UserWrite );
    if ( !hasPermission )
      // TODO: Send forbiden response to the API.
      return res.status( 403 );

    // PUT DB row.
  },

  postUserItem: ( req, res ) => {
    const requestedRoute = req.query.path.split( ',' );

    const hasPermission = this.____checkFilePermissions( fsItem.permission, PermissionType.UserWrite );
    if ( !hasPermission )
      // TODO: Send forbiden response to the API.
      return res.status( 403 );

    // POST new DB row.
  },

  deleteUserItem: ( req, res ) => {
    const requestedRoute = req.query.path.split( ',' );

    const hasPermission = this.____checkFilePermissions( fsItem.permission, PermissionType.UserDelete );
    if ( !hasPermission )
      // TODO: Send forbiden response to the API.
      return res.status( 403 );

    // DELETE DB row.
  },

  /**
   * 
   * @param { PermissionType } userPermission
   * @param { PermissionType } requiredPermition
   */
  ____checkFilePermissions( userPermission, requiredPermition ) {
    switch ( requiredPermition ) {
      case PermissionType.UserRead:
        if ( userPermission !== PermissionType.UserRead ||
             fsItem.permission !== PermissionType.UserWrite ||
             fsItem.permission !== PermissionType.UserDelete
        ) return false;
        break;
      case PermissionType.UserWrite:
        if ( fsItem.permission !== PermissionType.UserWrite ||
             fsItem.permission !== PermissionType.UserDelete
        ) return false;
        break;
      case PermissionType.UserDelete:
        if ( fsItem.permission !== PermissionType.UserDelete )
          return false;
        break;
      case PermissionType.Admin:
        if ( fsItem.permission !== PermissionType.Admin )
          return false;
        break;
    }

    return true;
  }
};
