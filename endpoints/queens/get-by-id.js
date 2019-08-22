const { queens } = require('../../data');

module.exports = function getQueensByID(request, response) {
  const { queenId } = request.params;
  const queen = queens.find((q) => {
    return q.id === Number(queenId);
  });

  response.send(queen);
}
