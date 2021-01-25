const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user 스키마 작성
const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    movieId: {
        type: String,
    },
    movieTitle: {
        type: String,
    },
    moviePost: {
        type: String,
    },
    MovieRunTime: {
        type: String,
    }
}, { timestamps: true });


//스키마를 Model로 감싸줌: model('모델의이름', 스키마 이름)
const Favorite = mongoose.model('Favorite', favoriteSchema);

//재사용하기 위해 exports
module.exports= { Favorite };