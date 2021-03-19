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
exports.sync = void 0;
const axios_1 = __importDefault(require("axios"));
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get('http://www.omdbapi.com/?apikey=5eec5adc&s=love&type=movie&page=3&y=2020');
});
exports.sync = sync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFFbkIsTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFO0lBQzNCLE9BQU8sTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7QUFDdEcsQ0FBQyxDQUFBLENBQUE7QUFGWSxRQUFBLElBQUksUUFFaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3Qgc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NWVlYzVhZGMmcz1sb3ZlJnR5cGU9bW92aWUmcGFnZT0zJnk9MjAyMCcpO1xufSJdfQ==