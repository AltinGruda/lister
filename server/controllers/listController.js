const List = require('../models/List')

module.exports = {
    /* 
    - Get all lists (lists of channels)
    */
    getLists: async(req, res) => {
        try {
            const lists = await List.find();
            res.json(lists);
        } catch (error) {
            console.log(error);
        }
    },
    /* 
    - Create a list (list of channels)
    */
    createList: async(req, res) => {
        try {
            await List.create({
                title: req.body.title,
                description: req.body.description,
            })
            res.json('List has been created!')
        } catch (error) {
            console.log(error);
        }
    },
}
