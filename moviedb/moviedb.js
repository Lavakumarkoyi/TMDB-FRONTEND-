/*document.querySelector(".button1").addEventListener("click", function(e) {
  function get(url) {
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        console.log(data.images.base_url);
      });
  }

  get(
    "https://api.themoviedb.org/3/configuration?api_key=1da6943aa3293485858c0afd01a71266"
  );
});

document.querySelector(".button2").addEventListener("click", function(e) {
  console.log("Lavakumar");
  function post(url) {
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }

  post(
    "https://api.themoviedb.org/3/movie/540?api_key=1da6943aa3293485858c0afd01a71266"
  );
});

document.querySelector(".search").addEventListener("keyup", function(e) {
  e.preventDefault();

  var result = e.target.value;

  var url = "".concat(
    "https://api.themoviedb.org/3/search/movie?api_key=1da6943aa3293485858c0afd01a71266&query=",
    result
  );

  function get(url,callback) {
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        //console.log(data);
        console.log(data.results[0].poster_path);
        //console.log(data.image.base_url);
      });
  }

  function post(url) {
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        //console.log(data);
        console.log(data.images.base_url);
      });
  }

  get(url);

  post(
    "https://api.themoviedb.org/3/configuration?api_key=1da6943aa3293485858c0afd01a71266"
  );
});
*/

document.querySelector(".search").addEventListener("keyup", function(e) {
  var result = e.target.value;

  console.log(result.length);

  if (result.length > 0) {
    //e.preventDefault();
    function Easyhttp() {
      this.http = new XMLHttpRequest();
    }

    var url1 = "".concat(
      "https://api.themoviedb.org/3/search/movie?api_key=1da6943aa3293485858c0afd01a71266&query=",
      result
    );

    var url2 =
      "https://api.themoviedb.org/3/configuration?api_key=1da6943aa3293485858c0afd01a71266";

    // var src = "".concat(img1);

    Easyhttp.prototype.get1 = function(url1, callback) {
      //console.log("Lavakumar");
      this.http.open("GET", url1, true);

      var self = this;

      this.http.onload = function() {
        var data = JSON.parse(self.http.responseText);
        console.log(data);
        // console.log(data.results);

        /*data.results.forEach(function(poster) {
        console.log(poster.poster_path);
      });*/

        callback(url2, data);

        //console.log(data2);
      };

      this.http.send();
    };

    /* Easyhttp.prototype.get2 = function(url2) {
    this.http.open("GET", url2, true);

    var self = this;

    this.http.onload = function() {
      var data = JSON.parse(self.http.responseText);

      console.log(data);
    };

    this.http.send();
  };*/

    function get2(url2, data) {
      var xml = new XMLHttpRequest();

      xml.open("GET", url2, true);

      xml.onload = function() {
        var data2 = JSON.parse(xml.responseText);

        //console.log(data2);

        var output = "";

        data.results.forEach(function(poster) {
          var src =
            data2.images.base_url +
            data2.images.poster_sizes[2] +
            poster.poster_path;

          var title = poster.title;

          output += `
          <div class="col-md-4 col-lg-3 col-sm-6 col-xs-6 mb-3">
            <div class="well text-center border border-dark p-2 shadow-lg">
              <img src="${src}" alt="notfind" class="img-responsive myimage mb-2">
              <h5>${title}</h5>
            </div>
          </div>`;

          //console.log(src);
        });

        document.querySelector(".movies").innerHTML = output;

        // callback1(data2);

        //var img1 = data.images.base_url;

        //console.log(data.images.base_url);
      };

      xml.send();
    }

    // function get1(url1) {}

    //function get2(url2) {}

    var xml = new Easyhttp();

    /*xml.get1(url1, function(message) {
    console.log(message);
  });*/

    //xml.get2();

    xml.get1(url1, get2);
  } else {
    var secondout = "";

    document.querySelector(".movies").innerHTML = secondout;
  }
});
