

module.exports = {
  getAll: (req, res) => {
      dbInstance = req.app.get('db')

      dbInstance.read_houses().then(houses => {
          res.status(200).send(houses)
      }).catch(err => {
          res.status(500).send({errorMessage: 'Something went wrong!'})
          console.log(err)
      })
  },
  create: (req, res) => {
    dbInstance = req.app.get('db')

    const {name, address, city, state, zipCode} = req.body;
    dbInstance.create_house([name, address, city, state, zipCode]).then(()=>res.sendStatus(200))
    .catch(err => {
        res.status(500).send({errorMessage: 'Something went wrong!'})
        console.log(err)
    })
  },
  delete: (req, res) => {
      dbInstance = req.app.get('db')
       
      const {params} = req;
      dbInstance.delete_house([params.id]).then(()=> res.sendStatus(200))
      .catch(err => {
          res.status(500).send({errorMessage: 'Something went wrong!'})
      })
  }
}