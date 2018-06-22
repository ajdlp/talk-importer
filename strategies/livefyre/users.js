const h = require('highland');

module.exports = {
  /**
   * Turn a LiveFyre user into a user for Talk
   *
   * @param  {Object} fyre
   * @return {Object}
   */
  translate: ({ comments }) => {
    return h(comments).map(function(comment) {
      return {
        profiles: [
          {
            id: comment.author_id,
            provider: 'local'
          }
        ],
        username: comment.imported_display_name,
        lowercaseUsername: comment.imported_display_name && comment.imported_display_name.toLowerCase(),
        created_at: new Date().toISOString()
      };
    });
  }
};
