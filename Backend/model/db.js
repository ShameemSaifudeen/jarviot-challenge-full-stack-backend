import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://shameemsaifudeen456:123qweasd@cluster0.dwgf5h4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    tokens: Object,
});

const User = mongoose.model('User', userSchema);

export default User;
