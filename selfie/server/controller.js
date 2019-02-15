module.exports = {
    getAllInv: (req,res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_all_inv().then(response => {
            res.status(200).sends('it worked yes')
        })
    }
    // getOneInv: (req,res) => {
    //     const db = req.app.get('db');
    // }
    // createInv: (req,res) => {
    //     const db = req.app.get('db');
    // }
    // deleteInv: (req,res) => {
    //     const db = req.app.get('db');
    // }
    // updateInv: (req,res) => {
    //     const db = req.app.get('db');
    // }
}