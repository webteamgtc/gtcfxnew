const Metatrader5 = require("mt5-sdk");

const mt5Instance = new Metatrader5("apid.gtc-servers.com", 443, {
  login: 2001,
  password: "*r0mKzEw",
  build: 5430,
  agent: "WebManager",
});

async function clientPipeline(credentials) {
  const newClient = {
    PersonName: credentials.first_name,
    ContactPhone: credentials.phone,
    ContactEmail: credentials.email,
    ClientType: 1,
  };

  const getUser = await mt5Instance.users.getBatch("demo\\web.hedged");

  const usersList =
    getUser?.answer ?? getUser?.users ?? getUser ?? []; // defensive

  if (Array.isArray(usersList) && usersList.some((x) => (x?.Email ?? x?.email ?? x?.ContactEmail) === credentials.email)) {
    return { message: "Email already exist", success: false };
  }

  const clientResponse = await mt5Instance.clients.create(newClient);
  const client_id = clientResponse?.[0]?.id;

  if (!client_id) {
    return { message: clientResponse?.[0]?.retcode ?? "Client create failed", success: false };
  }

  const userResponse = await mt5Instance.users.create({
    Login: 0,
    PassMain: credentials.password,
    PassInvestor: credentials.invest_password,
    rights: 0,
    Group: credentials.group,
    Name: credentials.first_name,
    FirstName: credentials.first_name,
    LastName: "",
    Company: credentials.company,
    Language: 9,
    Country: credentials.country,
    Phone: credentials.phone,
    Email: credentials.email,
    Status: 1,
    Comment: "New account created by Web API",
    Leverage: 500,
    Agent: 0,
  });

  const userLogin = userResponse?.[0]?.Login ?? userResponse?.Login;
  if (!userLogin) {
    return { message: "Something went wrong while adding the user. Try again!", success: false };
  }

  const bindPayload = [{ user: userLogin, client: client_id }];
  const bindResult = await mt5Instance.clients.addUser(bindPayload);

  return {
    message: "Client and user added and bound successfully",
    success: true,
    user: userLogin,
    bindResult,
  };
}

module.exports = clientPipeline;
