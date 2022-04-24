const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const {
  addMenssage,
  getMessages,
  updateMessage,
  deleteMessage,
} = require("./controller");

router.post("/", (req, res) => {
  addMenssage(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 400, "create error", e);
    });
});

router.get("/", (req, res) => {
  getMessages(req.query)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 500, "Error Server", err);
    });
});

router.patch("/:id", (req, res) => {
  updateMessage(req.query.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 400, "update error", err);
    });
});

router.delete("/:id", (req, res) => {
  deleteMessage(req.params.id)
    .then((data) => {
      response.success(req, res, `message ${req.params.id} deleted`, 200);
    })
    .catch((err) => {
      response.error(req, res, 500, "delete error", err);
    });
});

module.exports = router;
