const mongoose = require('mongoose');

main().catch(err => console.log(err));

//mongoose.connect('mongodb://localhost/l1vf38');

async function main() {
    await mongoose.connect('mongodb://localhost/l1vf38');
}

module.exports = mongoose;
