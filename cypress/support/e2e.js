import "@cypress/code-coverage/support";
import "cypress-real-events/support";
import "cypress-wait-until";

Cypress.on(
  "uncaught:exception",
  (err) => !err.message.includes("ResizeObserver loop limit exceeded")
);

beforeEach(() => {
  cy.intercept("http://localhost:3000/api/auth/session", {
    body: `{"user":{"id":"google-oauth2|118253672644478122332","name":"frattaro","email":"frattaro@gmail.com","image":"https://lh3.googleusercontent.com/a-/AOh14GhX5X67y1-I7E4EaxcpDeoNuj8FH3VgfMWIBMc7hg=s96-c"},"expires":"2022-05-19T16:37:12.652Z","accessToken":"eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9jbWR6ZXJvYW50b24udXMuYXV0aDAuY29tLyJ9..cyhT_h71zwnR1A4y.hKaKCQLEDaPXPJIWqB1MT3F2NsIYLsWhuJDw-Q2e0DQYAZ_rcbYfmdNmv-NPC4QvLRVaYWlEwtJlaZ9J9CxzpxZDy8BbWuS0SYlEZXmZ1E0fNvER4Etj5nEwiUg18pYHhngze-Li-ZVEr_cuwRstkvYJpWgpNEBL5xhbC0UJBvq9mvqq4MeXmbwqwopJzyRw0wSat8s9xAnEXGCecabvKKlQLxnc-JQESe4rl8S_2e5OgqYfaN5k4hyuJwo_Lfr25-rbxiiQ8CJK9pty3YvmnxlAM9a8SZ3-6s2LCbzysnznCWdBL9_z1ktis-pD8ic8-d6jGTVzd9VVoemzWTMGz0Nw99cfkg.pXwLq9pXtW2DzSCsoaZocA"}`
  });
});
