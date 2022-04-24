const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const { addUser, getUser, updateUser, deleteUser } = require("./controller");

router.post("/", (req, res) => {
  addUser(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 400, "create error", e);
    });
});

router.get("/", (req, res) => {
  getUser()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 500, "Error Server", err);
    });
});

router.patch("/:id", (req, res) => {
  updateUser(req.params.id, req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 400, "update error", err);
    });
});

router.delete("/:id", (req, res) => {
  deleteUser(req.params.id)
    .then((data) => {
      response.success(req, res, `user ${req.params.id} deleted`, 200);
    })
    .catch((err) => {
      response.error(req, res, 500, "delete error", err);
    });
});

module.exports = router;
