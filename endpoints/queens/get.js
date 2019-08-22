const { queens } = require('../../data');

module.exports = function getQueens(request, response) {
  const seasonId = request.query.seasonId;
  const seasonNumber = Number(seasonId);
  if (seasonId && !seasonNumber) {
    response.status(400).send({ "message": "seasonID must be a integer"});
    return
  }

  if (seasonId) {
    const filteredQueens = queens.filter((q) => {
      let isInSeason = false
      q.seasons.forEach((s) => {
        if (s.id === seasonNumber) {
          isInSeason = true
        }
      });
  
      return isInSeason
    });

    response.send(filteredQueens)
    return
  }

  response.send(queens);
}