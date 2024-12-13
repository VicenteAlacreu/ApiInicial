const mongoose = require('mongoose');
const uri = 'mongodb+srv://damc:damc@cluster.8zy0r.mongodb.net/damc2425?retryWrites=true&w=majority&appName=Cluster';
mongoose.connect(uri).then(() => console.log('DB Connected')).catch(err => console.error(err));

module.exports = mongoose;