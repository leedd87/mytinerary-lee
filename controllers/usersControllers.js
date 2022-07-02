const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const sendVerification = require("./sendVerification");
const jwt = require("jsonwebtoken");
