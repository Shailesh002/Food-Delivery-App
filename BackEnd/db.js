const mongoose = require('mongoose');
//connect with mongoDB Atlas 

//mongoDB does not tell if we are adding something out of structure, for this mongoose schema helps us

const mongoURI ='';

const mongoDB = async () => {
    await mongoose.connect(mongoURI).then(async (res) => {
        console.log("Connected Database Successfully");
        
        //connect a collection ans store its data in variable 
        const fetched_data = await mongoose.connection.db.collection("food_items");

        fetched_data.find({}).toArray()
            .then(async (data) => {
                const food_category = await mongoose.connection.db.collection("food_category");
                food_category.find({}).toArray().then((catData) => {
                    global.food_items = data;
                    global.food_category = catData;

                }).catch((err) => {
                    console.log(err)
                })

            }).catch((err) => {
                console.log(err)
        });
    })
}

module.exports = mongoDB;

