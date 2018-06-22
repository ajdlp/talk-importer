const h = require('highland');

module.exports = {
  /**
   * Turn the collection into a Talk asset
   *
   * @param {Object} fyre
   * @return {Object}
   */
  translate: fyre => {
    if (fyre.source.indexOf("ign.com/articles") > -1 || fyre.source.indexOf("ign.com/videos") > -1 || fyre.source.indexOf("ign.com/wikis") > -1) {    
      return h([{
        id: fyre.id,
        url: fyre.source, // This url needs to be added in the permitted domains section of your Talk admin
        title: fyre.title || fyre.source,
        scraped: null, // Set to null because next visit to page will trigger scrape
      }]);
    }
    else {
      throw new Error("ASSET IS NOT ASSOCIATED WITH AN ARTICLE, VIDEO, OR WIKI PAGE");
    }
  },
};
