import ky from "ky";

// "Keycloak" is from "keycloak.js" library
//  -> https://www.npmjs.com/package/keycloak-js

class Keycloak {
  public token: string = "";
  constructor(a: any) {}

  async updateToken() {}
}

const keycloak = new Keycloak({
  url: "https://auth.cards-app.de",
  realm: "card-app-realm",
  clientId: "cards-app-oicd-client",
});

export const cardKy = ky.create({
  // do not retry on errors (tanstack query will retry anyway)
  retry: undefined,

  // base url for all requests
  prefixUrl: "http://localhost:7100",

  // automatically add Authorization header to all requests
  hooks: {
    beforeRequest: [
      async (request) => {
        // refresh token if expired
        await keycloak.updateToken();
        const token = keycloak.token;
        request.headers.set("Authorization", `Bearer ${token}`);
      },
    ],
  },
});

// example usage:
// cardKy.get("cards").json()
