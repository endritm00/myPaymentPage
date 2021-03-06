function render(action, elements) {
  var children = [];
  var parents = [];
  var containers = [];
  var childrenString = "";
  var parentString = "";
  var flexString = "";
  var body = "";
  var css = ` `;
  
  for (var element in elements) {
    var b = elements[element];
    var classList = b.class;
    if (classList) {
      var classArray = classList.split(" ");
      var classReady = "";
      for (var i in classArray) {
        var entry = "." + classArray[i];
        classReady += entry;
      }
    }
    {
      css += ` ${classReady || "card"} { text-align: ${b.align ||
        "center"}; background: ${b.background ||
        "#FFFFFF"}; border-radius: ${b.rounding ||
        "10px"}; outline: ${b.outline || "dashed"}; draggable: ${b.isdrag ||
        "true"}; font-family: ${b.font ||
        "Arial, Helvetica, sans-serif;"}; text-decoration: ${b.decoration ||
        "none"}; transition: ${b.transition ||
        "all 0.5s ease-out;"}; opacity: ${b.opacity ||
        "1;"}; color: ${b.color || ""}; margin: ${b.margin ||
        "10 auto;"}; position: ${b.position || "relative;"}; left: ${b.left ||
        ""}; right: ${b.right || ""}; width: ${b.width ||
        ""}; height: ${b.height || ""}; bottom: ${b.bottom ||
        ""}; top: ${b.top || ""}; padding: ${b.padding ||
        ""}; overflow: ${b.overflow || ""}; z-index: ${b.z ||
        ""}; display: ${b.display || "inline-block"}; font-size: ${b.size ||
        " 1rem; "}; flex: ${b.flex || ""}; border: ${b.border ||
        ""}; box-sizing: ${b.box || ""}; float: ${b.float || ""}; }

.${b.class || "card"}:hover {
background: ${b.hover || " "};
}

@media only screen and (max-width: 600px) {
  .${b.class || "card"} {
    background-color: ${b.bcolor || " "};
    display: ${b.mobiledisplay || "block"}; 
  }
}

`;
    }
    if (b.person == "parent") {
      parents.push(b);
    } else if (b.person == "child") {
      children.push(b);
    } else if (b.person == "container") {
      containers.push(b);
    }
  }
  var step = "";
  for (var a = 0; a < containers.length; a++) {
    var containersTemp =
      "<div id='" +
      containers[a].id +
      "' style='display:flex;' class='" +
      containers[a].class +
      "'>";
    for (var i = 0; i < parents.length; i++) {
      var parentsTemp =
        "<" +
        (parents[i].tag || "div") +
        " href='" +
        parents[i].href +
        "' style='" +
        (parents[i].style || "padding: 0px; margin:auto;") +
        "' id='" +
        (parents[i].id || "card") +
        "' onclick=" +
        (parents[i].onclick || "") +
        " src='" +
        (parents[i].src || "") +
        "' contenteditable='" +
        (parents[i].contenteditable || " ") +
        "' type='" +
        (parents[i].formtype || "") +
        "' value='" +
        (parents[i].value || "") +
        "' data-display='" +
        (parents[i].datadisplay || "") +
        "' data-link='" +
        (parents[i].datalink || "") +
        "' placeholder='" +

        "' class='" +
        (parents[i].class || parents[i].animation || "card") +
        "' data-action='" +
        (parents[i].dataid || "") +
        "' > ";

      for (var k = 0; k < children.length; k++) {
        if (children[k].datadisplay == parents[i].id) {
          parentsTemp +=
            "<" +
            (children[k].tag || "div") +
            " href='" +
            children[k].href +
            "' style='" +
            (children[k].style || "padding: 0px; margin:auto;") +
            "' id='" +
            (children[k].id || "card") +
            "' onclick=" +
            (children[k].onclick || "") +
            " src='" +
            (children[k].src || "") +
            "' contenteditable='" +
            (children[k].contenteditable || " ") +
            "' accept='" +
            (children[k].accept || "") +
            "' type='" +
            (children[k].formtype || "") +
            "' value='" +
            (children[k].value || "") +
            "' data-display='" +
            (children[k].datadisplay || "") +
            "' data-link='" +
            (children[k].datalink || "") +
            "' placeholder='" +
            (children[k].placeholder || "") +
            "' class='" +
            (children[k].class || children[k].animation || "card") +
            "' data-action='" +
            (children[k].dataid || "") +
            "' > " +
            (children[k].name || "") +
            "<" +
            (children[k].close || "/") +
            (children[k].tag || "div") +
            ">";
        }
      }

      parentsTemp += "</div>";
      if (containers[a].id == parents[i].father) {
        containersTemp += parentsTemp;
      }
    }
    containersTemp += "</div>";
    step += containersTemp;
  }

    step +=
      "<div id='myModal' class='modal'><div class='modal-content' id='modal-content-main-block'> <span class='close'>&times;</span> <p id='modalContent'></p> </div></div><div> <a id='support' class='carrd_bttn' href='#support'> <img class='carrd_bttn_img' src='https://image.flaticon.com/icons/svg/561/561127.svg' alt='carrd_bttn_img'> <div class='carrd_bttn_text'>Support</div> </a> </div>";
  
  body += step;
  if (elements) {
    var html =
      "<html lang='en'><head><script async src='https://www.googletagmanager.com/gtag/js?id=UA-110802733-4'></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-110802733-4'); </script><link rel='stylesheet' type='text/css' href='api/style.css'><meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'>" +
      "<title>" +
      (elements[0].title || "Untitled") +
      "</title>" +
      "<meta name='description' content='" +
      (elements[0].description || "Untitled") +
      "'>" +
      "<style>" +
      css +
      "</style><link type='image/png' rel='shortcut icon' href='api/ico.png'></head><body id='" +
      (elements[0].page || "") +
      "' style='background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;background-color:" +
      elements[0].background +
      "; background-image:url(" +
      elements[0].src +
      ");' data-editor='" +
      action +
      "'>" +
      "<script src='https://checkout.stripe.com/checkout.js'></script>" +
      body +
      "</body><script src='https://www.gstatic.com/firebasejs/4.3.0/firebase.js'></script><script src='https://checkout.stripe.com/checkout.js'></script><script src='https://js.stripe.com/v3'></script><script src='api/script.js'></script><script src='https://code.jquery.com/jquery-3.4.1.min.js'></script></html>";
  }
  return html;
}
function image(e) {
  var json = require("fs").readFileSync("./api/"+e+".json", "utf8");
  try {
    var json = JSON.parse(json);
  } catch (e) {
    var json = [];
  }

  json.sort(function(a, b) {
    return a.part - b.part;
  });

  var imagestr = "";
  for (var i in json) {
    imagestr += json[i].chunk;
  }
  var base64Data = imagestr.split(",")[1];
  require("fs").writeFile("api/"+e+".png", base64Data, "base64", function(err) {
    console.log(err);
  });
  console.log("image prepared");
} 

setInterval(function() {
  var json = require("fs").readFileSync("./api/data.json", "utf8");
  var json = JSON.parse(json);
         // console.log(json);

  var images = [];
  for (var i in json) {
    var type = json[i].type;
    if (images.indexOf(json[i].name) > -1) {
      //In the array!
    } else {
      //Not in the array
      images.push(json[i].name);
    }
    if (type == "image") {
      image(json[i].name);
      json[i].type = "imagedone";
    }
  }
 
  require("fs").writeFileSync("./api/data.json", JSON.stringify(json));
}, 3000);

var server = require("http")
  .createServer(async function(request, response) {
    if (request.method === "OPTIONS") {
      response.writeHead(204, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Max-Age": 2592000 // 30 days
        /** add other headers as per requirement */
      });
      response.end();
      return;
    } 
        
          if(request.method == "POST"){
            switch(request.url){
              case "/api/stripe_checkout":{
                const stripe = require('stripe')('sk_test_HpPa66fVscedxf2RNGlofZO2005NRyrijw');       
       
                var body = '';
        
                request.on('data', function (data) {
                    body += data;
      
                    if (body.length > 1e6)
                        request.connection.destroy();
                });
        
                request.on('end', async function () {
                  
                    var post = require('querystring').parse(body);
                    
                    const paymentIntent =await stripe.paymentIntents.create({
                      amount: post.amount * 100,
                      currency: 'usd',
                      
                      metadata: {integration_check: 'accept_a_payment'},
                    });
                            
                    response.end(JSON.stringify({client_secret:paymentIntent.client_secret}));
                    return; 
                });
                break;
              }

            case "/api/stripe_subscribe":{
              const stripe = require('stripe')('sk_test_HpPa66fVscedxf2RNGlofZO2005NRyrijw');       
             
                var body = '';
        
                request.on('data', function (data) {
                    body += data;
      
                    if (body.length > 1e6)
                        request.connection.destroy();
                });
        
                request.on('end', async function () {
                  
                    var postReq = require('querystring').parse(body);
                    
                    var post =JSON.parse(Object.keys(JSON.parse(JSON.stringify(postReq)))[0]);


                    try {
                      await stripe.paymentMethods.attach(post.paymentMethodId, {
                        customer: post.customerId,
                      });
                    } catch (error) {
                      
                    }
                  
                    
                    await stripe.customers.update(
                      post.customerId,
                      {
                        invoice_settings: {
                          default_payment_method: post.paymentMethodId,
                        },
                      }
                    );
                  
                   
                    const subscription = await stripe.subscriptions.create({
                      customer: post.customerId,
                      items: [{ price: post.priceId }],
                      expand: ['latest_invoice.payment_intent'],
                    });
                  
                    response.end(JSON.stringify(subscription));
                });
            
              break;
            }
           
          case "/api/create_customer" :{
          const stripe = require('stripe')('sk_test_HpPa66fVscedxf2RNGlofZO2005NRyrijw');
      
          
              var body = '';
      
              request.on('data',function(data){
                body += data;
      
                if (body.length > 1e6)
                request.connection.destroy();
              });
              request.on('end', async function(){
                var post = require('querystring').parse(body);
                try{
                var customer = await stripe.customers.create({
                    
                });
                response.end(JSON.stringify({customer}));
              }catch(error){}
              });
              break;
      }
        }
          }
        
  
    
    if (request.method == "GET") {
      var json = require("fs").readFileSync("./api/analytics.json", "utf8");
      try {
        var json = JSON.parse(json);
      } catch (e) {
        var json = [];
      }
      json.push({
        url: request.url,
        domain: request.headers.host,
        time: Date.now(),
        ip: request.headers["x-real-ip"]
      });
      require("fs").writeFileSync("./api/analytics.json", JSON.stringify(json));

      function parseCookies(request) {
        var list = {},
          rc = request.headers.cookie;
        rc &&
          rc.split(";").forEach(function(cookie) {
            var parts = cookie.split("=");
            list[parts.shift().trim()] = decodeURI(parts.join("="));
          });
        return list;
      }
      var cookies = parseCookies(request);
      if (request.url == "/favicon.ico") {
        response.end("");
      }
      if (request.url == "/api/data.json") {
        response.writeHead(200, {
          "Content-Type": "js"
        });
        var data = require("fs").readFileSync("./api/data.json", "utf8");
        data = data.split("var server")[0];
        response.end(data);
      }
      if (request.url == "/server.js") {
        response.writeHead(200, {
          "Content-Type": "js"
        });
        var data = require("fs").readFileSync("./server.js", "utf8");
        data = data.split("var server")[0];
        response.end(data);
      }
      if (request.url == "/data") {
        response.writeHead(200, {
          "Content-Type": "js"
        });
        var data = require("fs").readFileSync("./api/old.json", "utf8");
        response.end(data);
      }
      if (request.url == "/server") {
        response.writeHead(200, {
          "Content-Type": "js"
        });
        var data = require("fs").readFileSync("./server.js", "utf8");
        response.end(data);
      }
      if (request.url == "/game") {
        response.writeHead(200, {
          "Content-Type": "js"
        });
        var data = require("fs").readFileSync("./api/index.html", "utf8");
        response.end(data);
      }
      if (request.url == "/demo") {
        if (cookies.fastur) {
        } else {
          response.writeHead(200, {
            "Set-Cookie":
              "fastur=" +
              require("crypto")
                .randomBytes(16)
                .toString("hex") +
              "; " +
              "expires=" +
              new Date(new Date().getTime() + 86409000).toUTCString()
          });
        }

        var data = require("fs").readFileSync("./api/demo.json");

        var data = JSON.parse(data);
        var html = render("register", data);
        response.end(html);
      }
      if (request.url == "/register") {
        if (cookies.fastur) {
        } else {
          response.writeHead(200, {
            "Set-Cookie":
              "fastur=" +
              require("crypto")
                .randomBytes(16)
                .toString("hex") +
              "; " +
              "expires=" +
              new Date(new Date().getTime() + 86409000).toUTCString()
          });
        }

        var data = require("fs").readFileSync("./api/register.json");

        var data = JSON.parse(data);
        var html = render("register", data);
        response.end(html);
      }
      if (request.url == "/login") {
        if (cookies.fastur) {
        } else {
          response.writeHead(200, {
            "Set-Cookie":
              "fastur=" +
              require("crypto")
                .randomBytes(16)
                .toString("hex") +
              "; " +
              "expires=" +
              new Date(new Date().getTime() + 86409000).toUTCString()
          });
        }

        var data = require("fs").readFileSync("./api/login.json");

        var data = JSON.parse(data);
        var html = render("false", data);
        response.end(html);
      }
      if (request.url == "/") {
        if (cookies.fastur) {
        } else {
          response.writeHead(200, {
            "Set-Cookie":
              "fastur=" +
              require("crypto")
                .randomBytes(16)
                .toString("hex") +
              "; " +
              "expires=" +
              new Date(new Date().getTime() + 86409000).toUTCString()
          });
        }

        var data = require("fs").readFileSync("./api/home.json");

        var data = JSON.parse(data);
        var html = render("false", data);
        response.end(html);
      } else if (
        require("fs").existsSync(__dirname + "/" + request.url + ".html")
      ) {
        var img =
          require("fs").readFileSync(__dirname + "/" + request.url + ".html") ||
          null;
        response.end(img);
      }

      if (request.url.split("?")[1] && request.url.split("?")[1].length == 32) {
        var id = request.url.split("?")[1];

        if (typeof id !== "undefined") {
          var elements = require("fs").readFileSync("./api/" + id + ".json");
          var elements = JSON.parse(elements);
        }
        if (typeof elements !== "object") {
          var elements = JSON.parse(elements);
        }
        var html = render("edit", elements);
        response.end(html);
      } else {
        if (
          require("fs").existsSync(
            __dirname + "/api/" + request.url.split("/")[2]
          )
        ) {
          var img =
            require("fs").readFileSync(
              __dirname + "/api/" + request.url.split("/")[2]
            ) || null;
        }
        response.end(img);
      }
    }
    if (request.method == "POST") {
      var buffer = [];
      var dt = "";
      var fin = 0;
      request
        .on("error", function(err) {})
        .on("data", function(chunk) {
          buffer.push(chunk);
        })
        .on("end", function() {
          fin = 1;
        });
      var refreshId = setInterval(function() {
        if (fin == 1) {
          var string = Buffer.concat(buffer).toString();
          function is_json(str) {
            try {
              JSON.parse(str);
            } catch (e) {
              return false;
            }
            return true;
          }
          if (is_json(string)) {
            var object = JSON.parse(string);
            console.log(object);
            switch (object.type) {
              case "pay": {
              
                 var paymentid = "";
                var stripe = require("stripe")(
                  "sk_test_47zY1VLnws8bZo9qSHCUQeWw"
                );
                console.log(object.expiry.split("/")[0]);
                stripe.paymentMethods.create(
                  {
                    type: "card",
                    card: {
                      number: object.cardnumber,
                      exp_month: object.expiry.split("/")[0],
                      exp_year: object.expiry.split("/")[1],
                      cvc: object.cvv
                    }
                  },
                  function(err, paymentMethod) {
                    console.log(paymentMethod);
                    
                  }
                ); 

                // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
                stripe.charges.create(
                  {
                    amount: 2000,
                    currency: "cad",
                    source: "tok_visa",
                    description: "My First Test Charge (created for API docs)"
                  },
                  function(err, charge) {
                    // asynchronously called
                  }
                );
                break;
              }
              case "publish": {
                var datastring = require("fs").readFileSync("api/data.json","utf8");
                var json = JSON.parse(datastring);
                json.push({
                  type: "image",
                  name: object.site
                });
                require("fs").writeFileSync("./api/data.json",JSON.stringify(json));
                var q = object.query;
                if (object.modifier == "editor") {
                  var q = object.input;
                  var uid = require("crypto").randomBytes(16).toString("hex");
                  var html = render("live", object.elements);
                  require("fs").writeFileSync("./" + object.site + ".html",html);
                  require("fs").writeFileSync("./" + object.site + ".json",JSON.stringify(object.elements));

                  var responseFinal = {
                    type: "success",
                    data:"successfully published to <a target='_blank' href='https://mypaymentpage.com/" +object.site +"'>https://mypaymentpage.com/" +object.site +"</a>"
                  };
                  response.end(JSON.stringify(responseFinal));
                }   
 
                if (q == "subscription") {
                  function subscription($) {
                    require("stripe")(
                      "sk_live_8Lr82XvF2M4JAg6i5Qd7mKU1"
                    ).subscriptions.create(
                      {
                        customer: $.customer,
                        plan: $.plan
                      },
                      function(err, subscription) {}
                    );
                  }
                }
                if (q == "charge") {
                  function charge($) {
                    require("stripe")(
                      "sk_live_8Lr82XvF2M4JAg6i5Qd7mKU1"
                    ).charges.create(
                      {
                        amount: 100,
                        currency: "usd",
                        description: "connection",
                        source: token
                      },
                      function(err, charge) {
                        one(err, charge);
                      }
                    );
                  }
                  charge($);
                }
                if (q == "plan") {
                  function plan($) {
                    require("stripe")(
                      "sk_live_8Lr82XvF2M4JAg6i5Qd7mKU1"
                    ).plans.create(
                      {
                        amount: 5000,
                        interval: "month",
                        name: "Silver corporate",
                        currency: "cad",
                        id: "silver-corporate"
                      },
                      function(err, plan) {
                        // asynchronously called
                      }
                    );
                  }
                }
                if (q == "plan_delete") {
                  function _delete($) {
                    require("stripe")(
                      "sk_live_8Lr82XvF2M4JAg6i5Qd7mKU1"
                    ).subscriptions.del($.subscription, function(
                      err,
                      confirmation
                    ) {});
                  }
                }
                if (q == "update") {
                  function update($) {
                    require("stripe")(
                      "sk_live_8Lr82XvF2M4JAg6i5Qd7mKU1"
                    ).subscriptions.update(
                      $._old,
                      {
                        plan: $._new
                      },
                      function(err, subscription) {}
                    );
                  }
                } 
                response.end("commit success");
                break;
              }
              case "upgrade": {
                var uuid = object.uuid;
                var data = require("fs").readFileSync(
                  "./api/data.json",
                  "utf8"
                );

                var result = JSON.parse(data).find(obj => {
                  return obj.active === uuid;
                });

                var paymentid = "";
                var stripe = require("stripe")(
                  "sk_test_47zY1VLnws8bZo9qSHCUQeWw"
                );
                console.log(object.expiry.split("/")[0]);
                stripe.paymentMethods.create(
                  {
                    type: "card",
                    card: {
                      number: object.cardnumber,
                      exp_month: object.expiry.split("/")[0],
                      exp_year: object.expiry.split("/")[1],
                      cvc: object.cvv
                    }
                  },
                  function(err, paymentMethod) {
                    console.log(err);
                  
                  }
                );

                stripe.paymentMethods.attach(
                  paymentid,
                  { customer: result.stripeid },
                  function(err, paymentMethod) {
                    console.log(err + paymentMethod);
                  }
                );

                stripe.subscriptions.create(
                  {
                    customer: result.stripeid,
                    items: [{ price: "plan_GUIOtY8S8shSda" }]
                  },
                  function(err, subscription) {
                    console.log(err, subscription);
                  }
                );

                break;
              }
              case "support": {
                function support(uuid) {
                  var salt = {};
                  var data = require("fs").readFileSync(
                    "./api/support.json",
                    "utf8"
                  );
                }
                support(object.uuid);
                break;
              }
              case "landing": {
                function landing(uuid) {
                  var salt = {};
                  var data = require("fs").readFileSync(
                    "./api/data.json",
                    "utf8"
                  );

                  var result = JSON.parse(data).find(obj => {
                    return obj.active === uuid;
                  });

                  if (result) {
                    var string = JSON.stringify({
                      type: "success",
                      data: result
                    });
                    response.end(string);
                  } else {
                    var string = JSON.stringify({
                      type: "failed",
                      reason: "not found"
                    });
                    response.end(string);
                  }
                }
                landing(object.uuid);
                break;
              }
              case "login": {
                function login(email, password, uuid) {
                  var salt = {};
                  var data = require("fs").readFileSync(
                    "./api/data.json",
                    "utf8"
                  );

                  var result = JSON.parse(data).find(obj => {
                    return obj.email === email;
                  });
                  if (result) {
                    var hash = require("crypto")
                      .createHmac("sha512", result.salt)
                      .update(password)
                      .digest("hex");
                    if (hash == result.hash) {
                      var json = JSON.parse(data);

                      var i = json.findIndex(function(item, i) {
                        return item.email === email;
                      });
                      json[i].active = uuid;
                      require("fs").writeFileSync(
                        "./api/data.json",
                        JSON.stringify(json)
                      );

                      var results = json.filter(function(entry) {
                        return entry.publisher === email;
                      });
                      var results = JSON.stringify(results);

                      var stripe = require("stripe")(
                        "sk_test_47zY1VLnws8bZo9qSHCUQeWw"
                      );

                      var customersTemp;
                      stripe.customers.list({ limit: 3 }, function(
                        err,
                        customers
                      ) {
                        response.end(
                          JSON.stringify({
                            type: "success",
                            name: result.name,
                            message: "Login Successful",
                            data: results,
                            customers: customers
                          })
                        );
                      });

                      return;
                    } else {
                      response.end(
                        JSON.stringify({
                          type: "failure",
                          reason: "Email/Password did not match."
                        })
                      );
                    }
                  } else {
                    response.end(
                      JSON.stringify({
                        type: "failure",
                        reason: "Email Not Found"
                      })
                    );
                  }
                }

                login(object.email, object.password, object.uuid);
                break;
              }
              case "register": {
                function register(name, email, password) {
                  var salt = require("crypto")
                    .randomBytes(Math.ceil(16 / 2))
                    .toString("hex")
                    .slice(0, 16);
                  var hash = require("crypto")
                    .createHmac("sha512", salt)
                    .update(password)
                    .digest("hex");
                  var data = require("fs").readFileSync(
                    "./api/data.json",
                    "utf8"
                  );

                  var json = JSON.parse(data);

                  var result = JSON.parse(data).find(obj => {
                    return obj.email === email;
                  });
                  if (result) {
                    response.end(
                      JSON.stringify({
                        type: "success",
                        name: result.name,
                        message: "already registered"
                      })
                    );
                  } else {
                    var stripe = require("stripe")(
                      "sk_test_47zY1VLnws8bZo9qSHCUQeWw"
                    );

                    stripe.customers.create({ description: email }, function(
                      err,
                      customer
                    ) {
                      // asynchronously called
                      json.push({
                        stripeid: customer.id,
                        name: name,
                        email: email,
                        password: "hash",
                        hash: hash,
                        salt: salt
                      });
                      require("fs").writeFileSync(
                        "./api/data.json",
                        JSON.stringify(json)
                      );
                      response.end(
                        JSON.stringify({
                          type: "success",
                          message: "success! Please log in"
                        })
                      );
                    });
                  }
                }
                register(object.name, object.email, object.password);
                break;
              }
              case "email": {
                response.setHeader("Access-Control-Allow-Origin", "*");
                response.setHeader(
                  "Access-Control-Allow-Methods",
                  "GET, POST, OPTIONS, PUT, PATCH, DELETE"
                );
                response.setHeader(
                  "Access-Control-Allow-Headers",
                  "X-Requested-With,content-type"
                );
                response.setHeader("Access-Control-Allow-Credentials", true);

                function retrieve_email($) {
                  var AWS = require("aws-sdk");
                  AWS.config.update({
                    accessKeyId: "AKIASS565J2QNZZVPBHX",
                    secretAccessKey: "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",
                    region: "us-west-2",
                    apiVersions: {
                      s3: "2006-03-01",
                      ses: "2010-12-01",
                      route53domains: "2014-05-15",
                      cloudfront: "2017-03-25",
                      route53: "2013-04-01"
                    }
                  });
                  var s3 = new AWS.S3();
                  var params = {
                    Bucket: "fastur.mail",
                    MaxKeys: "10"
                  };
                  s3.listObjects(params, function(err, data) {
                    if (err) {
                      console.log(err, err.stack);
                      ws.send(JSON.stringify(err));
                    } else {
                      var Contentsdata = data.Contents;
                      for (var i in Contentsdata) {
                        s3.getObject(
                          {
                            Bucket: data.Name,
                            Key: Contentsdata[i].Key
                          },
                          function(err, data) {
                            if (err) {
                              console.log(err, err.stack);
                              console.log(data);
                            } else {
                              const simpleParser = require("mailparser")
                                .simpleParser;

                              var Body = data.Body.toString("utf-8");
                              var modified = data.LastModified;
                              simpleParser(Body, (err, parsed) => {
                                var returns = {
                                  type: "data",
                                  email: parsed,
                                  date: modified
                                };
                                response.end(JSON.stringify(returns));
                              });
                            }
                          }
                        );
                      }
                    }
                  });
                }
                retrieve_email();
                function send_email(email) {
                  var AWS = require("aws-sdk");
                  AWS.config.update({
                    accessKeyId: "AKIASS565J2QNZZVPBHX",
                    secretAccessKey: "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",
                    region: "us-east-1",
                    apiVersions: {
                      s3: "2006-03-01",
                      ses: "2010-12-01",
                      route53domains: "2014-05-15",
                      cloudfront: "2017-03-25",
                      route53: "2013-04-01"
                    }
                  });
                  var ses = new AWS.SES();
                  const params = {
                    Destination: {
                      ToAddresses: [email]
                    },
                    Message: {
                      Body: {
                        Html: {
                          Charset: "UTF-8",
                          Data: "https://fastur.com"
                        },
                        Text: {
                          Charset: "UTF-8",
                          Data: "https://fastur.com"
                        }
                      },
                      Subject: {
                        Charset: "UTF-8",
                        Data: "Hey, you hurt my feelings."
                      }
                    },
                    ReturnPath: "mj@fastur.com",
                    Source: "mj@fastur.com"
                  };
                  ses.sendEmail(params, (err, data) => {
                    if (err) console.log(err);
                    else console.log("message sent to " + email);
                  });
                }
                send_email("joseph@fastur.com");
                break;
              }
              case "image": { 
    require("fs").stat("./api/" + object.name + ".json", function(err, stat) {
      if (err == null) {
        console.log("File exists");

        var json = require("fs").readFileSync(
          "./api/" + object.name + ".json",
          "utf8"
        );
        try {
          var json = JSON.parse(json);
        } catch (e) {
          var json = [];
        }

        json.push(object);
        require("fs").writeFileSync(
          "./api/" + object.name + ".json",
          JSON.stringify(json)
        );
        var jsonResponse = {
          type: "image",
          result: "ok",
          part: object.part,
          size: object.size,
          bytes: object.bytes
        };
        response.end(JSON.stringify(jsonResponse));
      } else if (err.code === "ENOENT") {
        // file does not exist
        require("fs").writeFileSync("./api/" + object.name + ".json", "[]");
        
        
       require("fs").readFileSync(
          "./api/" + object.name + ".json",
          "utf8"
        );
        try {
          var json = JSON.parse(json);
        } catch (e) {
          var json = [];
        }

        json.push(object);
        require("fs").writeFileSync("./api/" + object.name + ".json",JSON.stringify(json));
        var jsonResponse = {
          type: "image",
          result: "ok",
          part: object.part,
          size: object.size,
          bytes: object.bytes
        };
        response.end(JSON.stringify(jsonResponse));
      } else {
        console.log("Some other error: ", err.code);
      }
    });


                break;
              }
              default:
            }
          }
        }
        clearInterval(refreshId);
      }, 50);
    }
  })
  .listen(process.env.PORT || 1);

  