module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory([])
            .then(simulationProducts => res.status(200).send(simulationProducts))
            .catch(err => {
                res.status(500).send({ errorMessage: "failed to getAll" });
                console.log(err);
            });
    },
    createProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, imageURL, price } = req.body;
        // dbInstance.create_product([name, description, price, image_url])
        dbInstance.create_product([name, imageURL, price])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "failed to create" });
                console.log(err);
            });
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "failed to delete" });
                console.log(err);
            });





    }

