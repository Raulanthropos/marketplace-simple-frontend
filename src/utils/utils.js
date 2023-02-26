export const getProductComments = (productId, comments) => {
    const filteredComments = comments.filter(comment => comment.productId === productId);
    return filteredComments;
  }
  