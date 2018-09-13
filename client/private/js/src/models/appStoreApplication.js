// TODO: Pass to backend.
class AppStoreApplication {
  constructor( name, creator, htmlIndexUrl, creation, lastUpdate ) {
    this.name = name;
    this.creator = creator;
    this.htmlIndexUrl = htmlIndexUrl;
    this.ratings = [];
    this.creation = '';
    this.lastUpdate = '';

    let totalRating = 0;
    let ratingsCount;
    for ( ratingsCount = 0; i < this.ratings.length; ++ratingsCount ) {
      this.totalRating += this.ratings[ratingsCount].rating;
    }

    this.averageRating = totalRating / ratingsCount;
  }
}
