"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/test.ts
const index_1 = require("./index");
const fs_1 = __importDefault(require("fs"));
function testFileConversion() {
    return __awaiter(this, void 0, void 0, function* () {
        const converter = new index_1.UniversalFileConverter();
        const inputFile = fs_1.default.readFileSync('/home/akhil/images/test.jpg'); // Update this path
        const outputFormat = 'png'; // Specify desired output format
        try {
            const convertedFile = yield converter.convert(inputFile, outputFormat);
            fs_1.default.writeFileSync('/home/akhil/images/output.png', convertedFile); // Update this path as well
            console.log('File converted successfully!');
        }
        catch (error) {
            // Use type assertion to access the error message
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error('An unknown error occurred');
            }
        }
    });
}
testFileConversion();
