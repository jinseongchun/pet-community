var express = require("express");
var router = express.Router();
const multer = require("multer");

const { Store } = require("../Model/Store.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");
const setUpload = require("../Util/upload.js");

router.post("/submit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    price: req.body.price,
    continent: req.body.continent,
    image: req.body.image,
  };
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.storeNum = counter.storeNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.author = userInfo._id;
          const StorePost = new Store(temp);
          StorePost.save().then((doc) => {
            Counter.updateOne(
              { name: "counter" },
              { $inc: { storeNum: 1 } }
            ).then(() => {
              res.status(200).json({ success: true });
            });
          });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/cartlist", (req, res) => {
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      let ids = userInfo.cart.map((value) => {
        return value.id;
      });
      Store.find({
        _id: {
          $in: ids,
        },
      })
        .populate("author")
        .exec((err, storeInfo) => {
          if (err) return res.status(400).json({ success: false, err });
          return res.status(200).json({
            success: true,
            storeInfo,
          });
        });
    });
});

router.post("/removeFromCart", (req, res) => {
  User.findOneAndUpdate(
    { uid: req.body.uid },
    {
      $pull: { cart: { id: req.body.pid } },
    }
  )
    .exec()
    .then((userInfo) => {
      let array = userInfo.cart.map((item) => {
        return item.id;
      });

      Store.find({ _id: { $in: array } })
        .populate("author")
        .exec((err, storeInfo) => {
          return res.status(200).json({
            success: true,
            storeInfo,
          });
        });
    });
});

router.post("/list", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;

  let sort = {};
  sort.createdAt = -1;

  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      findArgs[key] = req.body.filters[key];
    }
  }
  Store.find(findArgs)
    .populate("author")
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .exec((err, storeInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({
        success: true,
        storeInfo,
        postSize: storeInfo.length,
      });
    });
});

router.post("/detail", (req, res) => {
  Store.findOne({ storeNum: Number(req.body.storeNum) })
    .populate("author")
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, store: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/edit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    price: req.body.price,
    continent: req.body.continent,
    image: req.body.image,
  };
  Store.updateOne({ storeNum: Number(req.body.storeNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/addToCart", (req, res) => {
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      let duplicate = false;
      userInfo.cart.forEach((item) => {
        if (item.id === req.body.sid) {
          duplicate = true;
        }
      });
      if (duplicate === false) {
        User.findOneAndUpdate(
          { uid: req.body.uid },
          {
            $push: {
              cart: {
                id: req.body.sid,
              },
            },
          }
        )
          .exec()
          .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
          });
      }
      res.status(200).json({ success: true, duplicate });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

router.post("/delete", (req, res) => {
  Store.deleteOne({ storeNum: Number(req.body.storeNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post(
  "/image/upload",
  setUpload("pet-community/store"),
  (req, res, next) => {
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

module.exports = router;
