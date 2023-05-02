const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
    title: String,
    image_id: String,
    api_link: String,
    date_start: Number,
    date_end: Number,
    place_of_origin: String,
    artwork_type_title: String,
    artist_title: String,
    iiif_url: String,
    imageSrc: String,
    updateLink: String,
    marker: Number,
})

const Artworks = mongoose.model('Artworks', artworkSchema)
module.exports = Artworks