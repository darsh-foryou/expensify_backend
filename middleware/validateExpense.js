import Joi from "joi";

const expenseSchema = Joi.object({
    description: Joi.string().required(),
    amount: Joi.number().positive().required(),
    category: Joi.string().required()
});

const validateExpense = (req, res, next) => {
    const { error } = expenseSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

export default validateExpense;
