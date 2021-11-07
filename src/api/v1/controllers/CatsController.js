class CatsController {
  async getAllCats(req, res) {
    console.log('GET ALL CATS');
    return res.json({cats: ['Kuky', 'Choclito', 'Gatina', 'Negri', 'Blanqui']});
  }
}

module.exports = new CatsController();
