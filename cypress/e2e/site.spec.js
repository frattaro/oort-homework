context("Site Test Suite", () => {
  it("Redirects to login if not logged in", () => {
    cy.intercept("http://localhost:3000/api/auth/session", {
      statusCode: 304,
      body: "{}"
    });
    cy.intercept("http://localhost:3000/api/auth/providers", {
      statusCode: 200,
      body: `{"auth0":{"id":"auth0","name":"Auth0","type":"oauth","signinUrl":"http://localhost:3000/api/auth/signin/auth0","callbackUrl":"http://localhost:3000/api/auth/callback/auth0"}}`
    });
    cy.intercept("http://localhost:3000/api/auth/csrf", {
      statusCode: 200,
      body: `{"csrfToken":"0549837ab72c47ba47e5a810673154d70b5abdda6d7238fe178a150e7a78d11a"}`
    });
    cy.intercept("http://localhost:3000/api/auth/signin/auth0?", {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html"
      },
      body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>:root{--border-width:1px;--border-radius:0.3rem;--color-error:#c94b4b;--color-info:#157efb;--color-info-text:#fff}.__next-auth-theme-auto,.__next-auth-theme-light{--color-background:#fff;--color-text:#000;--color-primary:#444;--color-control-border:#bbb;--color-button-active-background:#f9f9f9;--color-button-active-border:#aaa;--color-seperator:#ccc}.__next-auth-theme-dark{--color-background:#000;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-seperator:#444}@media (prefers-color-scheme:dark){.__next-auth-theme-auto{--color-background:#000;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-seperator:#444}}body{background-color:var(--color-background);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;margin:0;padding:0}h1{font-weight:400;margin-bottom:1.5rem;padding:0 1rem}h1,p{color:var(--color-text)}form{margin:0;padding:0}label{font-weight:500;margin-bottom:.25rem;text-align:left}input[type],label{color:var(--color-text);display:block}input[type]{background:var(--color-background);border:var(--border-width) solid var(--color-control-border);border-radius:var(--border-radius);box-shadow:inset 0 .1rem .2rem rgba(0,0,0,.2);box-sizing:border-box;font-size:1rem;padding:.5rem 1rem;width:100%}input[type]:focus{box-shadow:none}p{font-size:1.1rem;line-height:2rem;margin:0 0 1.5rem;padding:0 1rem}a.button{line-height:1rem;text-decoration:none}a.button,a.button:link,a.button:visited,button{background-color:var(--color-background);color:var(--color-primary)}a.button,button{border:var(--border-width) solid var(--color-control-border);border-radius:var(--border-radius);box-shadow:0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem var(--color-background),inset 0 -.1rem .1rem rgba(0,0,0,.05);font-size:1rem;font-weight:500;margin:0 0 .75rem;padding:.75rem 1rem;position:relative;transition:all .1s ease-in-out}a.button:hover,button:hover{cursor:pointer}a.button:active,button:active{background-color:var(--color-button-active-background);border-color:var(--color-button-active-border);box-shadow:0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem var(--color-background),inset 0 -.1rem .1rem rgba(0,0,0,.1);cursor:pointer}a.site{color:var(--color-primary);font-size:1rem;line-height:2rem;text-decoration:none}a.site:hover{text-decoration:underline}.page{display:grid;height:100%;margin:0;padding:0;place-items:center;position:absolute;width:100%}.page>div{padding:.5rem;text-align:center}.error a.button{display:inline-block;margin-top:.5rem;padding-left:2rem;padding-right:2rem}.error .message{margin-bottom:1.5rem}.signin a.button,.signin button,.signin input[type=text]{display:block;margin-left:auto;margin-right:auto}.signin hr{border:0;border-top:1px solid var(--color-seperator);display:block;margin:1.5em auto 0;overflow:visible}.signin hr:before{background:var(--color-background);color:#888;content:"or";padding:0 .4rem;position:relative;top:-.6rem}.signin .error{background:#f5f5f5;background:var(--color-info);border-radius:.3rem;font-weight:500}.signin .error p{color:var(--color-info-text);font-size:.9rem;line-height:1.2rem;padding:.5rem 1rem;text-align:left}.signin form,.signin>div{display:block}.signin form input[type],.signin>div input[type]{margin-bottom:.5rem}.signin form button,.signin>div button{width:100%}.signin form,.signin>div{max-width:300px}.signout .message{margin-bottom:1.5rem}.logo{display:inline-block;margin-top:100px;max-height:150px;max-width:300px}.card{border:1px solid var(--color-control-border);border-radius:5px;margin:50px auto;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content;padding:20px 50px}.card .header{color:var(--color-primary)}.section-header{color:var(--brand-color,var(--color-text))}</style><title>Sign In</title></head><body class="__next-auth-theme-auto"><div class="page"><div class="signin"><div class="card"><div class="provider"><form action="http://localhost:3000/api/auth/signin/auth0" method="POST"><input type="hidden" name="csrfToken" value="0549837ab72c47ba47e5a810673154d70b5abdda6d7238fe178a150e7a78d11a" /><input type="hidden" name="callbackUrl" value="http://localhost:3000/" /><button type="submit" class="button">Sign in with Auth0</button></form></div></div></div></div></body></html>`
    }).as("signin");
    cy.visit("http://localhost:3000");
    cy.wait("@signin");
  });

  it("Has a failing api call if not logged in", () => {
    cy.request({
      url: "http://localhost:3000/api/ec2",
      failOnStatusCode: false
    }).then((response) => {
      assert(response.status === 400);
    });
  });

  it("Has an ec2 instances data grid", () => {
    cy.visit("http://localhost:3000");
    cy.get("body").contains("a-123456");

    cy.get('[aria-label="/dev/quarzite"]').realHover();
    cy.get(".MuiTooltip-tooltip").contains("/dev/quarzite");

    // paging
    cy.get(`[aria-label="Go to next page"]`).click();
    cy.get("body").contains("f-123456");

    // sorting
    cy.get(
      `.MuiDataGrid-columnHeader[data-field="id"] [aria-label="Sort"]`
    ).click({
      force: true
    });

    cy.get("body").contains("j-123456");

    cy.get(
      `.MuiDataGrid-columnHeader[data-field="id"] [aria-label="Sort"]`
    ).click({
      force: true
    });

    cy.get("body").contains("u-123456");
  });

  it("loads 404", () => {
    cy.visit("http://localhost:3000/notexistid", { failOnStatusCode: false });
    cy.wait(100); // eslint-disable-line cypress/no-unnecessary-waiting
  });
});
