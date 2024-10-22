const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("🗄️ 🗄️ 🗄️  Connected to Database successfully!");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB