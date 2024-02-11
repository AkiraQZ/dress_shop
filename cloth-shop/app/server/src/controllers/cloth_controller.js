class typeController {
    async create(req, res) {

    };

    async getAll(req, res) {

    };

    async getOne (req, res) {

    }

    async  delete(req, res, next) {
        try {
          const id = parseInt(req.params.id, 10);

          const success = await user.delete(id);

          if (success) {
            res.status(204).end();
          } else {
            res.status(404).end();
          }
        } catch (err) {
          next(err);
        }
      }
};

module.exports = new typeController();