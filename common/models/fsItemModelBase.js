// TODO: Chnage the parameter order.

class FSItemModelBase {
  constructor( type, permission, name, iconUrl = null, content ) {
    this.type = type;
    this.permission = permission;
    this.name = name;
    this.content = content;
    this.iconUrl = iconUrl;
  }
}

try {
  if ( process.env !== undefined )
    module.exports = FSItemModelBase;

} catch {
  // This is the browser.
}

