const Admin = require("../model/admin");
const Factory = require("../model/factory");
const ngo = require("../model/ngo");
const ngoCount = require("./ngo").ngoCount;
const factoryCount = require("./ngo").factoryCount;

exports.loginAdmin = async (req, res, next) => {
  try {
    let username = req.body.username.toLowerCase();
    let password = req.body.password.toLowerCase();
    let admin = await Admin.findOne({
      $and: [{ username: username }, { password: password }],
    });
    if (!admin) {
      res.status(400).send({ message: "admin not found!" });
      return;
    }
    const token = jwt.sign({ adminId: admin.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({ token: token, adminId: admin.id });
    return;
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};

exports.assignNgo = async (req, res, next) => {
  try {
    let ngoId = req.body.random % ngoCount;
    let ng = ngo.find({ ngoId: ngoId });
    let factory = await Factory.findOneAndUpdate(
      { factoryId: req.body.factoryId },
      {
        isAssigned: true,
        date: new Date(),
        onDate: req.body.date,
        ngoName: ng.name,
      }
    );
    res.status(200).send({ message: "ok Done!" });
    return;
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};
