import auth0OauthTokenResponse from "../../../../../cypress/fixtures/auth0-oauth-token";

const handler = async (req, res) => {
  res.send(JSON.stringify(auth0OauthTokenResponse));
};

export default handler;
