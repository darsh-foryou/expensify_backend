//expense model
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    done: { type: Boolean, default: false },
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}, // store the id and baadme woh id ke hisaab se 
}, { timestamps: true });

export const Expense = mongoose.model('Expense', expenseSchema);