declare var Razorpay: any;

function logInfo(message: string) {
  // Color = Blue
  // Location = logWindow
  addLogMessage(message, "blue");
}

function logError(message: string) {
  // Color = Red
  // Location = logWindow
  addLogMessage(message, "red");
}

function logSuccess(message: string) {
  // Color = Green
  // Location = logWindow
  addLogMessage(message, "green");
}

function logWarning(message: string) {
  // Color = Yellow
  // Location = logWindow
  addLogMessage(message, "orange");
}

function addLogMessage(message, color) {
  console.log(message);
  const logWindow = document.getElementById("logWindow");
  const logMessage = document.createElement("div");
  logMessage.textContent = message;
  logMessage.style.color = color;
  logWindow.appendChild(logMessage);
  // Scroll log window to bottom
  logWindow.scrollTop = logWindow.scrollHeight;
}

function updateProgress(progress: number) {
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${progress}%`;
}

function clearLog() {
  const logWindow = document.getElementById("logWindow");
  logWindow.innerHTML = "";
}

class Completer<T> {
  public readonly promise: Promise<T>;
  public complete: (value: PromiseLike<T> | T) => void;
  private reject: (reason?: any) => void;

  public constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.complete = resolve;
      this.reject = reject;
    });
  }
}

class User {
  public id: number;
  public token: string;

  constructor(id: number, token: string) {
    this.id = id;
    this.token = token;
  }

  header(setContentType: boolean = true): { [key: string]: string } {
    return {
      authorization: `Bearer ${this.token}`,
      ...(setContentType ? { "Content-Type": "application/json" } : {}),
    };
  }

  toString(): string {
    return `User(id=${this.id}, token=${this.token})`;
  }
}

class Plan {
  name: string;
  tickets: number[];
  referralCode: string;
  discountCode: string | null;

  constructor(name: string, tickets: number[]) {
    this.name = name;
    this.tickets = tickets;
    this.referralCode = "HDOR0286007";
    this.discountCode = tickets.every((ticket) => ticket !== 1547)
      ? "FFRNE24"
      : null;
  }

  generateTicketsListForInitiate(): number[] {
    if (this.tickets.every((ticket) => ticket === 1547)) {
      return [1547];
    } else if (this.tickets.every((ticket) => ticket === 1551)) {
      return [1548, 1549];
    } else if (this.tickets.every((ticket) => ticket === 1552)) {
      return [1548, 1550];
    } else if (this.tickets.every((ticket) => ticket === 1553)) {
      return [1548, 1549, 1550];
    } else {
      throw new Error("Invalid ticket combination");
    }
  }

  generateAnswers(
    regId: string,
    is_male: boolean,
    nameOnTshirt: string | null = null,
    tshirtSize: string | null = null
  ): { [key: string]: any } {
    let ans: { [key: string]: any } | null = null;
    const gender: string = is_male ? "691" : "692";
    const tshirt_size_to_code: { [key: string]: string } = {
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
    if (this.tickets.every((ticket) => ticket === 1553)) {
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
    } else if (this.tickets.every((ticket) => ticket === 1552)) {
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
    } else if (this.tickets.every((ticket) => ticket === 1551)) {
      ans = {
        questions: [
          { tickets: [1551], answer: "694", question: "coachingQuestion" },
        ],
        tickets: [1548, 1549],
        eventId: 142,
        regId: regId,
      };
    } else if (this.tickets.every((ticket) => ticket === 1547)) {
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
  }
}

class TicketsData {
  private data: { [key: string]: any };

  constructor(data: { [key: string]: any }) {
    this.data = data;
  }

  getRegId(): string {
    return this.data["id"];
  }
}

class CalculateData {
  private data: { [key: string]: any };

  constructor(data: { [key: string]: any }) {
    this.data = data;
  }

  getPayableAmount(): number {
    return this.data["data"]["payableAmount"];
  }

  getActualAmount(): number {
    return this.data["data"]["actualPrice"];
  }
}

class InitiateData {
  public data: { [key: string]: any };

  constructor(data: { [key: string]: any }) {
    this.data = data;
  }

  getTransactionId(): string {
    return this.data["transactionId"];
  }
}

class PaymentStatus {
  private data: { [key: string]: any };

  constructor(data: { [key: string]: any }) {
    this.data = data;
  }
}

class Registrer {
  public fullName: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public plan: Plan;

  public isMale: boolean;
  public address1: string;
  public address2: string;
  public country: string;
  public state: string;
  public city: string;
  public landmark: string;
  public pincode: string;
  public mobile: string;
  public tshirtSize: string;
  public photo: File | null = null;

  // Run Time Variables
  public user: User | null = null;
  public ticketsData: TicketsData | null = null;
  public calculateData: CalculateData | null = null;
  public initiateData: InitiateData | null = null;

  constructor(
    fullName: string,
    email: string,
    password: string,
    plan: Plan,
    isMale: boolean,
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    landmark: string,
    pincode: string,
    mobile: string,
    tshirtSize: string,
    photo: File | null
  ) {
    this.fullName = fullName;
    const splittedFullName = fullName.split(" ");
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

  async run(): Promise<void> {
    clearLog();
    updateProgress(0);

    try {
      // Try logging in
      try {
        this.user = await this.login();
        if (this.user === null) {
          throw new Error("Login failed");
        }
        logSuccess(`Logged in as ${this.user}`);
      } catch (e) {
        logInfo(`Signing Up`);
        await this.sign_up();
        logSuccess(`Signed Up`);
        this.user = await this.login();
        if (this.user === null) {
          throw new Error("Login failed");
        }
        logSuccess(`Logged in as ${this.user}`);
      }
      updateProgress(10);

      let alreadyRegistered = false;
      try {
        // Load tickets data
        this.ticketsData = await this.tickets();
        logSuccess(`Fetched tickets data`);
        logInfo(`Reg ID: ${this.ticketsData.getRegId()}`);
        updateProgress(20);
      } catch (e) {
        console.log(typeof e);
        console.log(e);

        if (e.error.code == 114) {
          logWarning(`Already registered. Downloading banner.`);
          alreadyRegistered = true;
          updateProgress(80);
        } else {
          throw e;
        }
      }

      if (!alreadyRegistered) {
        // Calculate the amount
        this.calculateData = await this.calculate();
        logInfo(
          `Calculated the amount: ${this.calculateData.getPayableAmount()} INR`
        );
        updateProgress(30);

        // Submit answers
        await this.answers();
        logInfo(`Submitted answers`);

        // Address
        if (!(await this.doesAddressExist())) {
          await this.saveAddress();
          logInfo(`Saved address`);
        }
        updateProgress(40);

        // Complete
        await this.complete();
        logInfo(`Marked as complete`);
        updateProgress(50);

        // Initiate payment
        this.initiateData = await this.initiate();
        logSuccess(`Initiated payment`);
        logInfo(`Transaction ID: ${this.initiateData.getTransactionId()}`);
        updateProgress(60);

        // Open payment dialog
        logInfo(`Opening payment dialog`);
        const paymentId = await this.openPaymentDialog();
        if (paymentId === null) {
          throw new Error("Payment failed");
        }
        logInfo(`Payment ID: ${paymentId}`);
        updateProgress(70);

        // Payment callback
        this.paymentCallback(paymentId);
        logSuccess(`Payment successful`);
        updateProgress(80);
      }

      // Download banner
      await this.downloadBanner(this.photo);
      logSuccess(`Downloaded banner`);
      updateProgress(100);

      logSuccess(`Registration successful`);
    } catch (e) {
      logError(`Error: ${e}`);
    }
  }

  async login(): Promise<User | null> {
    const token_gen = btoa(`${this.email}:${this.password}`);

    try {
      const response = await fetch("https://api.hdor.com/auth/authenticate", {
        method: "POST",
        headers: {
          Authorization: `Basic ${token_gen}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return new User(data.id, data.accessToken);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error during login:", error);
      return null;
    }
  }

  async sign_up() {
    try {
      const response = await fetch(
        "https://api.hdor.com/auth/onboarding/register",
        {
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
        }
      );

      if (response.status === 400) {
        throw new Error("User already exists...");
      } else if (!response.ok) {
        throw new Error(`Error: ${response.status} ${await response.text()}`);
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      throw error;
    }
  }

  async tickets() {
    const response = await fetch(
      "https://api.hdor.com/ticketing/reg/event/142/tickets",
      {
        headers: this.user!.header(),
      }
    );

    const data = await response.json();

    if (data.status !== true) {
      throw data;
    }

    return new TicketsData(data);
  }

  async calculate() {
    const response = await fetch(
      "https://api.hdor.com/ticketing/reg/payment/calculate",
      {
        method: "POST",
        headers: this.user!.header(),
        body: JSON.stringify({
          tickets: this.plan.tickets.slice(-1),
          charity: [],
          eventId: 142,
          currency: "INR",
          discountCode: this.plan.discountCode,
          referralCode: this.plan.referralCode,
          regId: this.ticketsData!.getRegId(),
        }),
      }
    );

    const data = await response.json();

    if (data.status !== true) {
      throw new Error("Calculation failed: " + JSON.stringify(data));
    }

    return new CalculateData(data);
  }

  async answers() {
    const ans = this.plan.generateAnswers(
      this.ticketsData!.getRegId(),
      this.isMale,
      this.fullName,
      this.tshirtSize
    );

    if (ans === null) {
      throw new Error("Failed to generate answers");
    }

    const response = await fetch(
      "https://api.hdor.com/ticketing/reg/payment/answers",
      {
        method: "POST",
        headers: this.user!.header(),
        body: JSON.stringify(ans),
      }
    );

    const responseData = await response.json();

    if (responseData.status !== true) {
      throw new Error(
        "Answers submission failed: " + JSON.stringify(responseData)
      );
    }
  }

  async doesAddressExist() {
    const response = await fetch(
      "https://api.hdor.com/participant/user/address/list",
      {
        headers: this.user!.header(),
      }
    );

    const responseData = await response.json();
    return responseData.list.length > 0;
  }

  async saveAddress() {
    const response = await fetch(
      "https://api.hdor.com/participant/user/address/save",
      {
        method: "POST",
        headers: this.user!.header(),
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
          runnerId: this.user!.id,
        }),
      }
    );

    const data = await response.json();

    if (data.status !== true) {
      throw new Error("Failed to save address: " + JSON.stringify(data));
    }
  }

  async complete() {
    const response = await fetch(
      "https://api.hdor.com/ticketing/deliverable/completed",
      {
        method: "POST",
        headers: this.user!.header(),
        body: JSON.stringify({
          eventId: 142,
          runnerId: "",
          regId: this.ticketsData!.getRegId(),
        }),
      }
    );

    const data = await response.json();

    if (data.status !== true) {
      throw new Error("Failed to mark as complete: " + JSON.stringify(data));
    }
  }

  async initiate() {
    const response = await fetch(
      "https://api.hdor.com/ticketing/reg/payment/initiate",
      {
        method: "POST",
        headers: this.user!.header(),
        body: JSON.stringify({
          tickets: this.plan.generateTicketsListForInitiate(),
          charity: [],
          mode: "online",
          currency: "INR",
          eventId: 142,
          paymentAmount: this.calculateData!.getPayableAmount(),
          regId: this.ticketsData!.getRegId(),
          buyersName: "Piyush Kumar",
          buyersCountry: "India",
          buyersState: 38,
          buyersCity: "Ghaziabad",
          gatewayType: "RAZOR_PAY",
          referralCode: this.plan.referralCode,
          discountCode: this.plan.discountCode,
        }),
      }
    );

    const data = await response.json();

    if (data.status !== true) {
      throw new Error("Failed to initiate payment: " + JSON.stringify(data));
    }

    const responseData = data.data;
    responseData.fitId = this.user!.id;
    responseData.ticketCount = 1;
    responseData.discountCode = "";
    responseData.accountId = "acc_JXo1RUCErsn0s1";

    return new InitiateData(responseData);
  }

  openPaymentDialog(): Promise<string | null> {
    const prom = new Completer<string | null>();

    // After 3 seconds complete the promise for testing
    setTimeout(() => {
      prom.complete(null);
    }, 1000 * 60 * 10);

    var options = {
      key: this.initiateData!.data.key,
      amount: this.initiateData!.data.amount,
      currency: this.initiateData!.data.currency,
      name: this.initiateData!.data.name,
      description: this.initiateData!.data.description,
      image: this.initiateData!.data.imageUrl,
      order_id: this.initiateData!.data.orderId,
      account_id: this.initiateData!.data.accountId,
      handler: function (response) {
        console.log(response);
        prom.complete(response.razorpay_payment_id);
      },
      prefill: {},
      notes: {
        src: "hdor-web-app",
        discountCode: this.initiateData!.data.discountCode,
        ticketCount: this.initiateData!.data.ticketCount,
        fitId: this.initiateData!.data.fitId,
        eventURL: "HDOR 2024",
      },
      theme: {
        color: this.initiateData!.data.theme,
      },
      modal: {
        escape: !1,
        confirm_close: !0,
        ondismiss: () => {
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
  }

  async paymentCallback(paymentId: string): Promise<void> {
    const response = await fetch(
      "https://api.hdor.com/ticketing/reg/payment/failed",
      {
        method: "POST",
        headers: this.user.header(),
        body: JSON.stringify({
          gatewayType: "RAZOR_PAY",
          paymentId: paymentId,
          regId: this.ticketsData.getRegId(),
          transactionId: this.initiateData.getTransactionId(),
        }),
      }
    );

    const data = await response.json();

    if (data.status !== true) {
      throw new Error("Payment failed: " + JSON.stringify(data));
    }
  }

  async downloadBanner(file: File | null = null): Promise<void> {
    const formData = new FormData();
    if (file !== null) {
      formData.append("file", file);
    }
    formData.append("version", "v1");
    formData.append("useProfile", file !== null ? "false" : "true");
    formData.append("eventId", "934");

    const response = await fetch(
      "https://api.hdor.com/gratifications/banner/download.htm",
      {
        method: "POST",
        headers: this.user.header(false),
        body: formData,
      }
    );

    const responseData = await response.json();
    if (!responseData.status) {
      console.error("Error:", responseData.msg);
      return;
    }

    const anchorElement = document.createElement("a");
    anchorElement.href = responseData.url;
    anchorElement.target = "_blank";
    anchorElement.click();
  }
}

const plans = [
  new Plan("Registration Fee", [1547]),
  new Plan("Registration + Finisher Medal", [1551]),
  new Plan("Registration + T-shirt", [1552]),
  new Plan("Registration + Finisher Medal + T-shirt", [1553]),
];

function register(
  fullName: string,
  email: string,
  password: string,
  planIndex: number,
  isMale: boolean,
  address1: string,
  address2: string,
  country: string,
  state: string,
  city: string,
  landmark: string,
  pincode: string,
  mobile: string,
  tshirtSize: string,
  photo: File | null
): void {
  const plan: Plan = plans[planIndex];
  const registrer: Registrer = new Registrer(
    fullName,
    email,
    password,
    plan,
    isMale,
    address1,
    address2,
    country,
    state,
    city,
    landmark,
    pincode,
    mobile,
    tshirtSize,
    photo
  );

  (document.getElementById("submit-btn") as any).disabled = true;
  registrer.run().then(() => {
    (document.getElementById("submit-btn") as any).disabled = false;
  });

  // scroll to top
  window.scrollTo(0, 0);
}
