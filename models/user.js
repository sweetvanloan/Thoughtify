const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Post = require('../models/post');
const SALT_ROUNDS = 6
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: String,
    email: {type: String, required: true, unique: true},
    postsAuthored: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
    ]
}, {
    timestamps: true
});
userSchema.set('toJSON', {
    transform: function(doc, ret) {

        delete ret.password;
        return ret;
    }
});
userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, (err, isMatch) => {
        if(err) return cb(err)
        cb(null, isMatch)
    })
}
userSchema.pre("save", function(next){
    const user = this;
    if(!user.isModified("password")) return next();

    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        return next();
    })
})
module.exports = mongoose.model('User', userSchema);