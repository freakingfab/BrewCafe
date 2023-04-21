window.addEventListener("load", function () {
    /*Time selection*/
    let hourValue = 9,
        minuteValue = 0;
    document.getElementById("hourinc").addEventListener("click", function () {
        if (hourValue < 23 && hourValue != 0) {
            hourValue += 1;
        } else if (hourValue == 23) {
            hourValue = 0;
        } else if (hourValue == 0) {
            hourValue = 9;
        }
        var hrs = document.getElementsByClassName("hours")[0];
        hrs.innerHTML = String(hourValue).padStart(2, "0");
    });
    document.getElementById("hourdec").addEventListener("click", function () {
        if (hourValue > 9) {
            hourValue -= 1;
        } else if (hourValue == 9) {
            hourValue = 0;
        } else {
            hourValue = 23;
        }
        var hrs = document.getElementsByClassName("hours")[0];
        hrs.innerHTML = String(hourValue).padStart(2, "0");
    });
    document.getElementById("mininc").addEventListener("click", function () {
        if (minuteValue < 45) {
            minuteValue += 15;
        } else if (minuteValue == 45) {
            minuteValue = 0;
        }
        var min = document.getElementsByClassName("min")[0];
        min.innerHTML = String(minuteValue).padStart(2, "0");
    });
    document.getElementById("mindec").addEventListener("click", function () {
        if (minuteValue > 0) {
            minuteValue -= 15;
        } else if (minuteValue == 0) {
            minuteValue = 45;
        }
        var min = document.getElementsByClassName("min")[0];
        min.innerHTML = String(minuteValue).padStart(2, "0");
    });

    /*Date min and max values*/
    let min = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, -14);
    let max = new Date(new Date().setMonth(new Date().getMonth() + 6))
        .toISOString()
        .slice(0, -14);

    document.getElementById("date").setAttribute("min", min);
    document.getElementById("date").setAttribute("value", min);
    document.getElementById("date").setAttribute("max", max);

    document.getElementById("message").addEventListener("input", function () {
        document.getElementsByClassName("word-len")[0].textContent =
            this.value.length;
    });
});


//Tawk to

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/61587e3225797d7a8901f327/1fh0qq0tt';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();