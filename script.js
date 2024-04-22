var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function logInfo(message) {
    // Color = Blue
    // Location = logWindow
    addLogMessage(message, "blue");
}
function logError(message) {
    // Color = Red
    // Location = logWindow
    addLogMessage(message, "red");
}
function logSuccess(message) {
    // Color = Green
    // Location = logWindow
    addLogMessage(message, "green");
}
function logWarning(message) {
    // Color = Yellow
    // Location = logWindow
    addLogMessage(message, "orange");
}
function addLogMessage(message, color) {
    console.log(message);
    var logWindow = document.getElementById("logWindow");
    var logMessage = document.createElement("div");
    logMessage.textContent = message;
    logMessage.style.color = color;
    logWindow.appendChild(logMessage);
    // Scroll log window to bottom
    logWindow.scrollTop = logWindow.scrollHeight;
}
function updateProgress(progress) {
    var progressBar = document.getElementById("progressBar");
    progressBar.style.width = "".concat(progress, "%");
}
function clearLog() {
    var logWindow = document.getElementById("logWindow");
    logWindow.innerHTML = "";
}
var Completer = /** @class */ (function () {
    function Completer() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.complete = resolve;
            _this.reject = reject;
        });
    }
    return Completer;
}());
var User = /** @class */ (function () {
    function User(id, token) {
        this.id = id;
        this.token = token;
    }
    User.prototype.header = function (setContentType) {
        if (setContentType === void 0) { setContentType = true; }
        return __assign({ authorization: "Bearer ".concat(this.token) }, (setContentType ? { "Content-Type": "application/json" } : {}));
    };
    User.prototype.toString = function () {
        return "User(id=".concat(this.id, ", token=").concat(this.token, ")");
    };
    return User;
}());
var Plan = /** @class */ (function () {
    function Plan(name, tickets) {
        this.name = name;
        this.tickets = tickets;
        this.referralCode = "HDOR0286007";
        this.discountCode = "FFRNE24";
    }
    Plan.prototype.generateTicketsListForInitiate = function () {
        if (this.tickets.every(function (ticket) { return ticket === 1547; })) {
            return [1547];
        }
        else if (this.tickets.every(function (ticket) { return ticket === 1551; })) {
            return [1548, 1549];
        }
        else if (this.tickets.every(function (ticket) { return ticket === 1552; })) {
            return [1548, 1550];
        }
        else if (this.tickets.every(function (ticket) { return ticket === 1553; })) {
            return [1548, 1549, 1550];
        }
        else {
            throw new Error("Invalid ticket combination");
        }
    };
    Plan.prototype.generateAnswers = function (regId, is_male, nameOnTshirt, tshirtSize) {
        if (nameOnTshirt === void 0) { nameOnTshirt = null; }
        if (tshirtSize === void 0) { tshirtSize = null; }
        var ans = null;
        var gender = is_male ? "691" : "692";
        var tshirt_size_to_code = {
            XS: "684",
            S: "685",
            M: "686",
            L: "687",
            XL: "688",
            "2XL": "689",
            "3XL": "690",
        };
        if (tshirtSize !== null) {
            tshirtSize = tshirt_size_to_code[tshirtSize];
        }
        // T-Shirt plan
        if (this.tickets.every(function (ticket) { return ticket === 1553; })) {
            if (nameOnTshirt === null || tshirtSize === null) {
                throw new Error("Name on tshirt or tshirt size is missing");
            }
            ans = {
                questions: [
                    { tickets: [1553], answer: nameOnTshirt, question: "nameOnTshirt" },
                    { tickets: [1553], answer: gender, question: "gender" },
                    { tickets: [1553], answer: tshirtSize, question: "tshirtSize" },
                    { tickets: [1553], answer: "694", question: "coachingQuestion" },
                ],
                tickets: [1548, 1549, 1550],
                eventId: 142,
                regId: regId,
            };
        }
        else if (this.tickets.every(function (ticket) { return ticket === 1552; })) {
            if (nameOnTshirt === null || tshirtSize === null) {
                throw new Error("Name on tshirt or tshirt size is missing");
            }
            ans = {
                questions: [
                    { tickets: [1552], answer: nameOnTshirt, question: "nameOnTshirt" },
                    { tickets: [1552], answer: gender, question: "gender" },
                    { tickets: [1552], answer: tshirtSize, question: "tshirtSize" },
                    { tickets: [1552], answer: "694", question: "coachingQuestion" },
                ],
                tickets: [1548, 1550],
                eventId: 142,
                regId: regId,
            };
        }
        else if (this.tickets.every(function (ticket) { return ticket === 1551; })) {
            ans = {
                questions: [
                    { tickets: [1551], answer: "694", question: "coachingQuestion" },
                ],
                tickets: [1548, 1549],
                eventId: 142,
                regId: regId,
            };
        }
        else if (this.tickets.every(function (ticket) { return ticket === 1547; })) {
            ans = {
                questions: [
                    { tickets: [1547], answer: "694", question: "coachingQuestion" },
                ],
                tickets: [1547],
                eventId: 142,
                regId: regId,
            };
        }
        if (ans === null) {
            throw new Error("Invalid ticket combination");
        }
        return ans;
    };
    return Plan;
}());
var TicketsData = /** @class */ (function () {
    function TicketsData(data) {
        this.data = data;
    }
    TicketsData.prototype.getRegId = function () {
        return this.data["id"];
    };
    return TicketsData;
}());
var CalculateData = /** @class */ (function () {
    function CalculateData(data) {
        this.data = data;
    }
    CalculateData.prototype.getPayableAmount = function () {
        return this.data["data"]["payableAmount"];
    };
    CalculateData.prototype.getActualAmount = function () {
        return this.data["data"]["actualPrice"];
    };
    return CalculateData;
}());
var InitiateData = /** @class */ (function () {
    function InitiateData(data) {
        this.data = data;
    }
    InitiateData.prototype.getTransactionId = function () {
        return this.data["transactionId"];
    };
    return InitiateData;
}());
var PaymentStatus = /** @class */ (function () {
    function PaymentStatus(data) {
        this.data = data;
    }
    return PaymentStatus;
}());
var Registrer = /** @class */ (function () {
    function Registrer(fullName, email, password, plan, isMale, address1, address2, country, state, city, landmark, pincode, mobile, tshirtSize, photo) {
        this.photo = null;
        // Run Time Variables
        this.user = null;
        this.ticketsData = null;
        this.calculateData = null;
        this.initiateData = null;
        this.fullName = fullName;
        var splittedFullName = fullName.split(" ");
        this.firstName = splittedFullName[0];
        this.lastName =
            splittedFullName.length > 1
                ? splittedFullName[splittedFullName.length - 1]
                : "";
        this.email = email;
        this.password = password;
        this.plan = plan;
        this.isMale = isMale;
        this.address1 = address1;
        this.address2 = address2;
        this.country = country;
        this.state = state;
        this.city = city;
        this.landmark = landmark;
        this.pincode = pincode;
        this.mobile = mobile;
        this.tshirtSize = tshirtSize;
        this.photo = photo;
    }
    Registrer.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1, _b, alreadyRegistered, _c, e_2, _d, _e, paymentId, e_3;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        clearLog();
                        updateProgress(0);
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 22, , 23]);
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 4, , 7]);
                        _a = this;
                        return [4 /*yield*/, this.login()];
                    case 3:
                        _a.user = _f.sent();
                        if (this.user === null) {
                            throw new Error("Login failed");
                        }
                        logSuccess("Logged in as ".concat(this.user));
                        return [3 /*break*/, 7];
                    case 4:
                        e_1 = _f.sent();
                        logInfo("Signing Up");
                        return [4 /*yield*/, this.sign_up()];
                    case 5:
                        _f.sent();
                        logSuccess("Signed Up");
                        _b = this;
                        return [4 /*yield*/, this.login()];
                    case 6:
                        _b.user = _f.sent();
                        if (this.user === null) {
                            throw new Error("Login failed");
                        }
                        logSuccess("Logged in as ".concat(this.user));
                        return [3 /*break*/, 7];
                    case 7:
                        updateProgress(10);
                        alreadyRegistered = false;
                        _f.label = 8;
                    case 8:
                        _f.trys.push([8, 10, , 11]);
                        // Load tickets data
                        _c = this;
                        return [4 /*yield*/, this.tickets()];
                    case 9:
                        // Load tickets data
                        _c.ticketsData = _f.sent();
                        logSuccess("Fetched tickets data");
                        logInfo("Reg ID: ".concat(this.ticketsData.getRegId()));
                        updateProgress(20);
                        return [3 /*break*/, 11];
                    case 10:
                        e_2 = _f.sent();
                        console.log(typeof e_2);
                        console.log(e_2);
                        if (e_2.error.code == 114) {
                            logWarning("Already registered. Downloading banner.");
                            alreadyRegistered = true;
                            updateProgress(80);
                        }
                        else {
                            throw e_2;
                        }
                        return [3 /*break*/, 11];
                    case 11:
                        if (!!alreadyRegistered) return [3 /*break*/, 20];
                        // Calculate the amount
                        _d = this;
                        return [4 /*yield*/, this.calculate()];
                    case 12:
                        // Calculate the amount
                        _d.calculateData = _f.sent();
                        logInfo("Calculated the amount: ".concat(this.calculateData.getPayableAmount(), " INR"));
                        updateProgress(30);
                        // Submit answers
                        return [4 /*yield*/, this.answers()];
                    case 13:
                        // Submit answers
                        _f.sent();
                        logInfo("Submitted answers");
                        return [4 /*yield*/, this.doesAddressExist()];
                    case 14:
                        if (!!(_f.sent())) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.saveAddress()];
                    case 15:
                        _f.sent();
                        logInfo("Saved address");
                        _f.label = 16;
                    case 16:
                        updateProgress(40);
                        // Complete
                        return [4 /*yield*/, this.complete()];
                    case 17:
                        // Complete
                        _f.sent();
                        logInfo("Marked as complete");
                        updateProgress(50);
                        // Initiate payment
                        _e = this;
                        return [4 /*yield*/, this.initiate()];
                    case 18:
                        // Initiate payment
                        _e.initiateData = _f.sent();
                        logSuccess("Initiated payment");
                        logInfo("Transaction ID: ".concat(this.initiateData.getTransactionId()));
                        updateProgress(60);
                        // Open payment dialog
                        logInfo("Opening payment dialog");
                        return [4 /*yield*/, this.openPaymentDialog()];
                    case 19:
                        paymentId = _f.sent();
                        if (paymentId === null) {
                            throw new Error("Payment failed");
                        }
                        logInfo("Payment ID: ".concat(paymentId));
                        updateProgress(70);
                        // Payment callback
                        this.paymentCallback(paymentId);
                        logSuccess("Payment successful");
                        updateProgress(80);
                        _f.label = 20;
                    case 20: 
                    // Download banner
                    return [4 /*yield*/, this.downloadBanner(this.photo)];
                    case 21:
                        // Download banner
                        _f.sent();
                        logSuccess("Downloaded banner");
                        updateProgress(100);
                        logSuccess("Registration successful");
                        return [3 /*break*/, 23];
                    case 22:
                        e_3 = _f.sent();
                        logError("Error: ".concat(e_3));
                        return [3 /*break*/, 23];
                    case 23: return [2 /*return*/];
                }
            });
        });
    };
    Registrer.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token_gen, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token_gen = btoa("".concat(this.email, ":").concat(this.password));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch("https://api.hdor.com/auth/authenticate", {
                                method: "POST",
                                headers: {
                                    Authorization: "Basic ".concat(token_gen),
                                    "Content-Type": "application/json",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, new User(data.id, data.accessToken)];
                    case 4: return [2 /*return*/, null];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.error("Error during login:", error_1);
                        return [2 /*return*/, null];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Registrer.prototype.sign_up = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c, error_2;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("https://api.hdor.com/auth/onboarding/register", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: this.email,
                                    name: this.fullName,
                                    firstName: this.firstName,
                                    lastName: this.lastName,
                                    salutation: this.isMale ? "Mr." : "Ms.",
                                    password: this.password,
                                    gender: this.isMale ? "M" : "F",
                                    confirmPassword: this.password,
                                }),
                            })];
                    case 1:
                        response = _d.sent();
                        if (!(response.status === 400)) return [3 /*break*/, 2];
                        throw new Error("User already exists...");
                    case 2:
                        if (!!response.ok) return [3 /*break*/, 4];
                        _a = Error.bind;
                        _c = (_b = "Error: ".concat(response.status, " ")).concat;
                        return [4 /*yield*/, response.text()];
                    case 3: throw new (_a.apply(Error, [void 0, _c.apply(_b, [_d.sent()])]))();
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _d.sent();
                        console.error("Error during sign up:", error_2);
                        throw error_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Registrer.prototype.tickets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.hdor.com/ticketing/reg/event/142/tickets", {
                            headers: this.user.header(),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data.status !== true) {
                            throw data;
                        }
                        return [2 /*return*/, new TicketsData(data)];
                }
            });
        });
    };
    Registrer.prototype.calculate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.hdor.com/ticketing/reg/payment/calculate", {
                            method: "POST",
                            headers: this.user.header(),
                            body: JSON.stringify({
                                tickets: this.plan.tickets.slice(-1),
                                charity: [],
                                eventId: 142,
                                currency: "INR",
                                discountCode: this.plan.discountCode,
                                referralCode: this.plan.referralCode,
                                regId: this.ticketsData.getRegId(),
                            }),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data.status !== true) {
                            throw new Error("Calculation failed: " + JSON.stringify(data));
                        }
                        return [2 /*return*/, new CalculateData(data)];
                }
            });
        });
    };
    Registrer.prototype.answers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ans, response, responseData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ans = this.plan.generateAnswers(this.ticketsData.getRegId(), this.isMale, this.fullName, this.tshirtSize);
                        if (ans === null) {
                            throw new Error("Failed to generate answers");
                        }
                        return [4 /*yield*/, fetch("https://api.hdor.com/ticketing/reg/payment/answers", {
                                method: "POST",
                                headers: this.user.header(),
                                body: JSON.stringify(ans),
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        if (responseData.status !== true) {
                            throw new Error("Answers submission failed: " + JSON.stringify(responseData));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Registrer.prototype.doesAddressExist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.hdor.com/participant/user/address/list", {
                            headers: this.user.header(),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        return [2 /*return*/, responseData.list.length > 0];
                }
            });
        });
    };
    Registrer.prototype.saveAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.hdor.com/participant/user/address/save", {
                            method: "POST",
                            headers: this.user.header(),
                            body: JSON.stringify({
                                addressType: "permanent",
                                name: "Random Person",
                                address1: this.address1,
                                address2: this.address2,
                                country: this.country,
                                state: this.state,
                                city: this.city,
                                landmark: this.landmark,
                                pincode: this.pincode,
                                deliveryType: "home",
                                mobileCode: "91",
                                mobileNumber: this.mobile,
                                runnerId: this.user.id,
                            }),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data.status !== true) {
                            throw new Error("Failed to save address: " + JSON.stringify(data));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Registrer.prototype.complete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.hdor.com/ticketing/deliverable/completed", {
                            method: "POST",
                            headers: this.user.header(),
                            body: JSON.stringify({
                                eventId: 142,
                                runnerId: "",
                                regId: this.ticketsData.getRegId(),
                            }),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data.status !== true) {
                            throw new Error("Failed to mark as complete: " + JSON.stringify(data));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Registrer.prototype.initiate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, responseData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.hdor.com/ticketing/reg/payment/initiate", {
                            method: "POST",
                            headers: this.user.header(),
                            body: JSON.stringify({
                                tickets: this.plan.generateTicketsListForInitiate(),
                                charity: [],
                                mode: "online",
                                currency: "INR",
                                eventId: 142,
                                paymentAmount: this.calculateData.getPayableAmount(),
                                regId: this.ticketsData.getRegId(),
                                buyersName: "Piyush Kumar",
                                buyersCountry: "India",
                                buyersState: 38,
                                buyersCity: "Ghaziabad",
                                gatewayType: "RAZOR_PAY",
                                referralCode: this.plan.referralCode,
                                discountCode: this.plan.discountCode,
                            }),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data.status !== true) {
                            throw new Error("Failed to initiate payment: " + JSON.stringify(data));
                        }
                        responseData = data.data;
                        responseData.fitId = this.user.id;
                        responseData.ticketCount = 1;
                        responseData.discountCode = "";
                        responseData.accountId = "acc_JXo1RUCErsn0s1";
                        return [2 /*return*/, new InitiateData(responseData)];
                }
            });
        });
    };
    Registrer.prototype.openPaymentDialog = function () {
        var prom = new Completer();
        // After 3 seconds complete the promise for testing
        setTimeout(function () {
            prom.complete(null);
        }, 1000 * 60 * 10);
        var options = {
            key: this.initiateData.data.key,
            amount: this.initiateData.data.amount,
            currency: this.initiateData.data.currency,
            name: this.initiateData.data.name,
            description: this.initiateData.data.description,
            image: this.initiateData.data.imageUrl,
            order_id: this.initiateData.data.orderId,
            account_id: this.initiateData.data.accountId,
            handler: function (response) {
                console.log(response);
                prom.complete(response.razorpay_payment_id);
            },
            prefill: {},
            notes: {
                src: "hdor-web-app",
                discountCode: this.initiateData.data.discountCode,
                ticketCount: this.initiateData.data.ticketCount,
                fitId: this.initiateData.data.fitId,
                eventURL: "HDOR 2024",
            },
            theme: {
                color: this.initiateData.data.theme,
            },
            modal: {
                escape: !1,
                confirm_close: !0,
                ondismiss: function () {
                    prom.complete(null);
                },
            },
            timeout: 600,
            readonly: {
                contact: !1,
                email: !0,
                name: !1,
            },
            retry: {
                enabled: !0,
                max_count: 4,
            },
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
        return prom.promise;
    };
    Registrer.prototype.paymentCallback = function (paymentId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://api.hdor.com/ticketing/reg/payment/failed", {
                            method: "POST",
                            headers: this.user.header(),
                            body: JSON.stringify({
                                gatewayType: "RAZOR_PAY",
                                paymentId: paymentId,
                                regId: this.ticketsData.getRegId(),
                                transactionId: this.initiateData.getTransactionId(),
                            }),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data.status !== true) {
                            throw new Error("Payment failed: " + JSON.stringify(data));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Registrer.prototype.downloadBanner = function () {
        return __awaiter(this, arguments, void 0, function (file) {
            var formData, response, responseData, anchorElement;
            if (file === void 0) { file = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        if (file !== null) {
                            formData.append("file", file);
                        }
                        formData.append("version", "v1");
                        formData.append("useProfile", file !== null ? "false" : "true");
                        formData.append("eventId", "934");
                        return [4 /*yield*/, fetch("https://api.hdor.com/gratifications/banner/download.htm", {
                                method: "POST",
                                headers: this.user.header(false),
                                body: formData,
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        if (!responseData.status) {
                            console.error("Error:", responseData.msg);
                            return [2 /*return*/];
                        }
                        anchorElement = document.createElement("a");
                        anchorElement.href = responseData.url;
                        anchorElement.target = "_blank";
                        anchorElement.click();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Registrer;
}());
var plans = [
    new Plan("Registration Fee", [1547]),
    new Plan("Registration + Finisher Medal", [1551]),
    new Plan("Registration + T-shirt", [1552]),
    new Plan("Registration + Finisher Medal + T-shirt", [1553]),
];
function register(fullName, email, password, planIndex, isMale, address1, address2, country, state, city, landmark, pincode, mobile, tshirtSize, photo) {
    var plan = plans[planIndex];
    var registrer = new Registrer(fullName, email, password, plan, isMale, address1, address2, country, state, city, landmark, pincode, mobile, tshirtSize, photo);
    document.getElementById("submit-btn").disabled = true;
    registrer.run().then(function () {
        document.getElementById("submit-btn").disabled = false;
    });
    // scroll to top
    window.scrollTo(0, 0);
}
