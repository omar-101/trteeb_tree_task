const food = require('../models/foodModel');

exports.insertOne = async (req, res, next) => {
    try {   
        const { menu } = req.body;
        await food.insertOne(menu);
        res.json({ message: 'new food menu created!'});
    } catch (error) {
        console.log(error);
        next(error);
    }
};


exports.getMany = async (req, res, next) => {
    try {   
        const { limit, offset } = req.query;
        const result = await food.getMany();
        res.json({ rows: result || [] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getOne = async (req, res, next) => {
    try {   
        const { id } = req.params;
        const result = await food.getOne(id);
        res.json({ row: result.menu || [] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};