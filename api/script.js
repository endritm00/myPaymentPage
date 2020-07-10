let $ = document.querySelector

const buttonCard = document.getElementById('buttonCard');

if(document.getElementById('buttonCard')){
document.getElementById('buttonCard').onclick = function(){
  const amount = parseFloat(document.getElementById("priceCard").innerHTML);
  localStorage.amount = amount;
  window.location = "/checkout"
}
}


window.lib = {
  selectedPlan: "",
  imagepart:[],
  select1: function select1() {
    //get elem by id, add border class
    document.getElementById("column2").classList.remove("selected");
    document.getElementById("column3").classList.remove("selected");

    document.getElementById("column1").classList.add("selected");
    lib.selectedPlan = "basic";
  },

  select2: function select2() {
    document.getElementById("column1").classList.remove("selected");
    document.getElementById("column3").classList.remove("selected");

    document.getElementById("column2").classList.add("selected");
    lib.selectedPlan = "pro";
  },

  select3: function select3() {
    document.getElementById("column1").classList.remove("selected");
    document.getElementById("column2").classList.remove("selected");

    document.getElementById("column3").classList.add("selected");
    lib.selectedPlan = "premium";
  },
  
  upgrade: function upgrade() {
    //get account data from lib
    fetch("/", {
      method: "post",
      mode: "no-cors",
      body: JSON.stringify({
        type: "upgrade",
        cardnumber: document.getElementById("creditcardNumber").value,
        expiry: document.getElementById("creditcardExpiry").value,
        cvv: document.getElementById("creditcardCvv").value,
        subject: lib.selectedPlan,
        uuid: cookie("fastur")
      })
    }).then(function(response) {
      var decoder = new TextDecoder();
      var reader = response.body.getReader();
      reader.read().then(function processResult(result) {
        if (result.done) return;
        var result = decoder.decode(result.value, {
          stream: true
        });
        console.log(result);
        var parsed = JSON.parse(result);
        if (parsed.type == "success") {
        } else {
        }
      });
    });
    //post creditcarddata
  },
  image: function image() {}
};
//onload fetch demo.json
fetch("api/demo.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    lib.data = myJson;
    console.log(myJson);
  });
 
//onload fetch data from ccookie
fetch("/", {
  method: "post",
  mode: "no-cors",
  body: JSON.stringify({
    type: "landing",
    uuid: cookie("fastur")
  })
}).then(function(response) {
  var decoder = new TextDecoder();
  var reader = response.body.getReader();
  reader.read().then(function processResult(result) {
    if (result.done) return;
    var result = decoder.decode(result.value, {
      stream: true
    });

    console.log(result);
    var parsed = JSON.parse(result);
    if (parsed.type == "success") {
      var data = parsed.data;
      if (data) {
        document.getElementById("titleCardheader").innerHTML =
          "Welcome Back " + data.name;
      }
      document.getElementById("loginheader").innerText = "Logout";
      document.getElementById("loginheader").href = "/";

      function logout() {
        document.cookie = "fastur=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        window.location.href = "/";
      }
      document.getElementById("loginheader").addEventListener("click", logout);

      document.getElementById("registerheader").innerText = "Upgrade";
      document.getElementById("registerheader").href = "#";
   
      function modal() {
        var content = document.getElementById("modalContent");
        
        content.innerHTML =
          "<div id='column1' data-id='plan_GtQG0fYqW6uvcM' class='columns'> <ul class='priced'> <li class='header'>Basic</li> <li class='grey'>$ 10 / month</li> <li>1 Sites</li>  <li>Custom Domains</li> <li>Image</li> <li class='grey'><a href='#' onclick='lib.select1()' id='select1' class='buttons'>Select</a></li> </ul> </div> <div id='column2' class='columns'> <ul class='priced'> <li class='header' style='background-color:#4CAF50'>Pro</li> <li class='grey'>$ 30 / month</li> <li>3 Sites</li> <li>Custom Domains</li> <li>Image</li> <li class='grey'><a  onclick='lib.select2()' href='#' id='select2' class='buttons'>Select</a></li> </ul> </div> <div id='column3' class='columns'> <ul class='priced'> <li class='header'>Premium</li> <li class='grey'>$ 100 / month</li> <li>10 Sites</li> <li>Custom Domains</li> <li>Background Image</li> <li class='grey'><a href='#' id='select3' onclick='lib.select3()'  class='buttons'>Select</a></li> </ul> </div><div class='upgradeForm'><div><div><a href='/subscribe' id='upgradeButton' onclick='lib.upgrade()'  class='upgradeButton'>Upgrade</a></div>";
        var modal = document.getElementById("myModal");
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
      }
      document
        .getElementById("registerheader")
        .addEventListener("click", modal);
    } else {
      // var descriptionRegister = document.getElementById("descriptionHome");
      // descriptionRegister.innerHTML = parsed.reason;
    }
  });
});

function support() {
  var content = document.getElementById("modalContent");
  content.innerHTML =
    "<div class='container'> <label for='fname'>First Name</label> <input type='text' id='fname' name='firstname' placeholder='Your name..'> <label for='lname'>Last Name</label> <input type='text' id='lname' name='lastname' placeholder='Your last name..'> <label for='country'>What can we do for you?</label> <select id='country' name='country'> <option value='australia'>I have an issue with my site</option> <option value='canada'>I'm having trouble with a custom domain</option> <option value='usa'>I have an issue with my account</option> </select> <label for='subject'>Subject</label> <textarea id='subject' name='subject' placeholder='Write something..' style='height:200px'></textarea> <input id='supportSubmit' type='submit' value='Submit'></div>";
  var modal = document.getElementById("myModal");
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  document
    .getElementById("supportSubmit")
    .addEventListener("click", supportsubmit);
}
document.getElementById("support").addEventListener("click", support);
function supportsubmit() {
  fetch("/", {
    method: "post",
    mode: "no-cors",
    body: JSON.stringify({
      type: "support",
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      title: document.getElementById("title").value,
      subject: document.getElementById("subject").value,
      uuid: cookie("fastur")
    })
  }).then(function(response) {
    var decoder = new TextDecoder();
    var reader = response.body.getReader();
    reader.read().then(function processResult(result) {
      if (result.done) return;
      var result = decoder.decode(result.value, {
        stream: true
      });
      console.log(result);
      var parsed = JSON.parse(result);
      if (parsed.type == "success") {
      } else {
      }
    });
  });
}

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  if (window.currentModal !== 'progress-modal') {
    modal.style.display = "none";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal && window.currentModal !== 'progress-modal') {
    modal.style.display = "none";
  }
};

function cookie(e) {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (e == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}
setInterval(function() {
  var mq = window.matchMedia("(max-width: 570px)");
  if (mq.matches) {
    document.getElementById("container1").style["display"] = "block";
    // window width is at less than 570px
  } else {
    document.getElementById("container1").style["display"] = "flex";
    // window width is greater than 570px
  }
}, 500);

var bodyId = document.getElementsByTagName("body")[0].id;

if (bodyId == "home") {
  
  function progressModal(hide = false) {
    var content = document.getElementById("modalContent");
    content.innerHTML = `<div class='container' style="display: flex; justify-content: center; align-items: center;">
      <div style="width: 80%; height: 50px; display: flex; justify-content: start; position: relative;">
        <div id="publish-upload-progress-bar" style="height: 100%; background-color: #4CAF50; width: 0;"></div>
        <div id="publish-upload-progress-percentage" style="display: flex; justify-content: center; align-items: center; position: absolute; z-index: 1; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.1)"></div>
      </div>
    </div>`;
    var modal = document.getElementById("myModal");
    modal.style.display = hide ? "none" : "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    var modalConentBlock = document.getElementById('modal-content-main-block');
    modalConentBlock.style.height = 'auto';
    window.currentModal = hide ? '' : 'progress-modal'
  }
  function updateProgress (progress) {
    document.getElementById('publish-upload-progress-bar').style.width = `${progress}%`;
    document.getElementById('publish-upload-progress-percentage').innerHTML = `<span style="font-size:15px;color:#000;">${progress}%</span>`;
  }
  document.getElementById("image").onchange = function () {
    var file = this.files[0];
    var url = window.URL.createObjectURL(file);
    document.getElementById('icon').src = url;
  }
  function startFileUpload() {
    return new Promise((resolve, reject) => {
      var file = document.getElementById("image").files[0];
      var reader = new FileReader();
      reader.onload = function () {
        //document.getElementById(event.target.id).src = reader.result;
        var blob = reader.result;
        var size = blob.length;
        var BYTES_PER_CHUNK = 1024;
        var start = 0;
        var end = BYTES_PER_CHUNK;
        var part = 0;
        var totalparts = Math.ceil(size / BYTES_PER_CHUNK);
        progressModal();
        while (start < size) {
          var chunk = blob.slice(start, end);
          fetch("/", {
            method: "post",
            mode: "no-cors",
            body: JSON.stringify({
              type: "image",
              chunk: chunk,
              part: part,
              name: document.getElementById("siteName").value,
              size: size,
              totalparts: totalparts,
              bytes: BYTES_PER_CHUNK,
              uuid: cookie("fastur")
            })
          }).then(function (response) {
            var decoder = new TextDecoder();
            var reader = response.body.getReader();
            reader.read().then(function processResult(result) {
              if (result.done) return;
              var result = decoder.decode(result.value, {
                stream: true
              });
              console.log(result);
              var parsed = JSON.parse(result);
              updateProgress((((Number(parsed.part) + 1) * 100) / totalparts).toFixed(2));
              if (Number(parsed.part) + 1 >= totalparts) {
                resolve();
              }
              if (parsed.type == "success") {
              } else {
              }
            });
          });

          var image = lib.imagepart;
          image.push({ part, size, BYTES_PER_CHUNK });
          lib.imagepart = image;

          start = end;
          end = start + BYTES_PER_CHUNK;
          part++;
        }
      };
      reader.readAsDataURL(file);
    })
  }
  function publish() {
    var elements = lib.data;
    const error = [];
    if (!document.getElementById('image').files.length) {
      error.push('image');
    }
    if (!document.getElementById('title').value) {
      error.push('title');
    }
    if (!document.getElementById('price').value) {
      error.push('price');
    }
    if (!document.getElementById('description').value) {
      error.push('description');
    }
    if (!document.getElementById('button').value) {
      error.push('button text');
    }
    if (!document.getElementById('apiKey').value) {
      error.push('stripe api key');
    }
    if (!document.getElementById('siteName').value) {
      error.push('site name');
    }
    if (error.length) {
      var errorMessage = '';
      for(var i in error) {
        if (i == error.length - 1 && error.length > 1) {
          errorMessage += ` and ${error[i]}`
        } else if (i == 0) {
          errorMessage += `${error[i]}`
        } else {
          errorMessage += `, ${error[i]}`
        }
      }
      alert(errorMessage + (error.length > 1 ? ' are' : ' is' ) + ' required');
      return;
    }
    for (var i in elements) {
      if (elements[i].id == "image") {
        elements[i].src = "https://mypaymentpage.com/api/"+document.getElementById("siteName").value + ".png"
      }
      if (elements[i].id == "titleCard") {
        elements[i].name = document.getElementById("title").value;
      }
      if (elements[i].id == "priceCard") {
        elements[i].name = document.getElementById("price").value;
      }
      if (elements[i].id == "descriptionCard") {
        elements[i].name = document.getElementById("description").value;
      }
      if (elements[i].id == "buttonCard") {
        elements[i].name = document.getElementById("button").value;
      }
    }
    startFileUpload()
      .then(() => fetch("/", {
        method: "post",
        mode: "no-cors",
        body: JSON.stringify({
          type: "publish",
          modifier: "editor",
          site: document.getElementById("siteName").value,
          elements: elements,
          apikey: document.getElementById("apiKey").value,
          uuid: cookie("fastur")
        })
      }))
      .then(function (response) {
        var decoder = new TextDecoder();
        var reader = response.body.getReader();
        reader.read().then(function processResult(result) {
          if (result.done) return;
          var result = decoder.decode(result.value, {
            stream: true
          });
          console.log(result);
          var parsed = JSON.parse(result);
          if (parsed.type == "success") {
            progressModal(true);
            lib.image();
            
            var descriptionCardheader = document.getElementById("descriptionCardheader");
            descriptionCardheader.innerHTML = parsed.data;
          } else {
            var descriptionLogin = document.getElementById("descriptionLogin");
            descriptionLogin.innerHTML = parsed.reason;
          }
        });
      });
  }
  document.getElementById("Publish").addEventListener("click", publish);
  function pay(){
    fetch("/", {
            method: "post",
            mode: "no-cors",
            body: JSON.stringify({
              type: "pay",
              cardnumber: document.getElementById("ccnumber").value,
              expiry: document.getElementById("expiry").value,
              ccv: document.getElementById("cvv").value,
              email: document.getElementById("payemail").value, 
              uuid: cookie("fastur")
            })
          }).then(function (response) {
            var decoder = new TextDecoder();
            var reader = response.body.getReader();
            reader.read().then(function processResult(result) {
              if (result.done) return;
              var result = decoder.decode(result.value, {
                stream: true
              });
              console.log(result);
              var parsed = JSON.parse(result);
              
              if (parsed.type == "success") {
                document.getElementById("descriptionCard").innerHTML = parsed.data;
              } else {
                document.getElementById("descriptionCard").innerHTML = parsed.data;

              }
            });
          });
  }
  document.getElementById("buttonCard").addEventListener("click", pay);

  document.getElementById("title").addEventListener("input", function(e) {
    var titleCard = document.getElementById("titleCard");

    titleCard.innerHTML = e.target.value;
  });
  document.getElementById("price").addEventListener("input", function(e) {
    priceCard.innerHTML = e.target.value;
  });
  document.getElementById("description").addEventListener("input", function(e) {
    descriptionCard.innerHTML = e.target.value;
  });
  document.getElementById("button").addEventListener("input", function(e) {
    buttonCard.innerHTML = e.target.value;
  });
} else if (bodyId == "login") {
  //-- add javascript to login and register pages
  document.getElementById("loginButton").addEventListener("click", function(e) {
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");

    fetch("/", {
      method: "post",
      mode: "no-cors",
      body: JSON.stringify({
        type: "login",
        email: loginEmail.value,
        password: loginPassword.value,
        uuid: cookie("fastur")
      })
    }).then(function(response) {
      var decoder = new TextDecoder();
      var reader = response.body.getReader();
      reader.read().then(function processResult(result) {
        if (result.done) return;
        var result = decoder.decode(result.value, {
          stream: true
        });
        console.log(result);
        var parsed = JSON.parse(result);
        if (parsed.type == "success") {
          window.location.href = "/";
        } else {
          var descriptionLogin = document.getElementById("descriptionLogin");
          descriptionLogin.innerHTML = parsed.reason;
        }
      });
    });
  });
} else if (bodyId == "register") {
  document
    .getElementById("registerButton")
    .addEventListener("click", function(e) {
      var registerName = document.getElementById("registerName");
      var registerEmail = document.getElementById("registerEmail");
      var registerPassword = document.getElementById("registerPassword");

      console.log(registerName.value);
      fetch("/", {
        method: "post",
        mode: "no-cors",
        body: JSON.stringify({
          type: "register",
          name: registerName.value,
          email: registerEmail.value,
          password: registerPassword.value,
          uuid: cookie("fastur")
        })
      }).then(function(response) {
        var decoder = new TextDecoder();
        var reader = response.body.getReader();
        reader.read().then(function processResult(result) {
          if (result.done) return;
          var result = decoder.decode(result.value, {
            stream: true
          });

          var parsed = JSON.parse(result);
          if (parsed.type == "success") {
            window.location.href = "/";
          } else {
            var descriptionRegister = document.getElementById(
              "descriptionRegister"
            );
            descriptionRegister.innerHTML = parsed.reason;
          }
        });
      });
    });
}

