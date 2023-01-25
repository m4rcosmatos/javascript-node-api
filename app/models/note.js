const mongoose = require('mongoose');


let noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    creat_at: { type: Date, default: Date.now},
    update_at: { type: Date, default: Date.now},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

noteSchema.index({'title': 'text', 'body': 'text'});

module.exports = mongoose.model('Note', noteSchema);