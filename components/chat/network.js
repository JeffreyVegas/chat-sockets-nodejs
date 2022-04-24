const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const { addChat, getChat } = require("./controller");

router.post("/", (req, res) => {
  addChat(req.body.users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 400, "create error", e);
    });
});

router.get("/:id", (req, res) => {
  getChat(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 500, "Error Server", err);
    });
});

module.exports = router;
