const Car = require("../models/car")

exports.test = async (req, res) => {
    try {
        res.status(200).send('Test OK!')
    } catch (error) {
                res.status(500).send(error)

    }
}



exports.addCar = async (req, res) => {
    try {
        const {brand, model, year, price, fuel, image, description} = req.body
        const newCar = new Car({
            brand, model, year, price, fuel, image, description
        })
        await newCar.save()
        res.status(200).send({msg: "Car added successfully", newCar})
    } catch (error) {
        res.status(500).send(error)
    }
}


exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        if (!cars) {
            return res.status(404).send({msg: "No cars found"})
        }
        res.status(200).send(cars)
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getCarById = async (req, res) => {
    try {
        const {id} = req.params;
        const foundCar = await Car.findById(id);
        if (!foundCar) {
            return res.status(404).send({msg: "Car not found"})
        }
        res.status(200).send(foundCar)
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.deleteCar = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);
        res.status(200).send({msg: "Car deleted successfully", deletedCar})
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.editCar = async (req, res) => {
    try {
        const {id} = req.params;
        const { brand, model, year, price, fuel, image, description } = req.body;
        const editedCar = await Car.findByIdAndUpdate(id, { brand, model, year, price, fuel, image, description }, {new: true});
        res.status(200).send({msg: "Car edited successfully", editedCar})
    } catch (error) {
        res.status(500).send(error);
    }
}