"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatepostInput = exports.createPostinput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email({ message: "Invalid email" }),
    name: zod_1.default.string(),
    password: zod_1.default.string().min(6, {
        message: "Password length should be 6 or more than 6"
    })
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string()
});
exports.createPostinput = zod_1.default.object({
    title: zod_1.default.string().min(1),
    content: zod_1.default.string()
});
exports.updatepostInput = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional()
});
