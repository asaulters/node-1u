const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      "<html><body><form method='POST' action='/create-user'><input type='text' name='username'><button type='submit'>Send</form></body></html>"
    );
    return res.end();
  }

  if (url === "/users") {
    res.write("<html><body>");
    res.write("<ul><li>User 1</ul></li>");
    res.write("<ul><li>User 2</ul></li>");
    res.write("</body></html>");
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader("location", "/");
    res.end;
  }
};

module.exports = requestHandler;
