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
exports.UniversalFileConverter = void 0;
const sharp_1 = __importDefault(require("sharp"));
// Implement the UniversalFileConverter class
class UniversalFileConverter {
    convert(inputFile, outputFormat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Use sharp to convert the file
                const outputBuffer = yield (0, sharp_1.default)(inputFile).toFormat(outputFormat).toBuffer();
                return outputBuffer;
            }
            catch (error) {
                // Type assertion for error handling
                if (error instanceof Error) {
                    throw new Error(`Conversion failed: ${error.message}`);
                }
                else {
                    throw new Error('Conversion failed: An unknown error occurred');
                }
            }
        });
    }
}
exports.UniversalFileConverter = UniversalFileConverter;
