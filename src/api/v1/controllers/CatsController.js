class CatsController {
  async getAllCats(req, res) {
    return res.json({
      cats: ['Kuky', 'Choclito', 'Gatina', 'Negri', 'Blanqui'],
    });
  }
}

module.exports = new CatsController();
