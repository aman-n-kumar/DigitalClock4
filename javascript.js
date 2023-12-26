let hr = document.getElementsByClassName("hr")[0];
      let min = document.getElementsByClassName("min")[0];
      let sec = document.getElementsByClassName("sec")[0];
      let meridian = document.getElementsByClassName("me")[0];
      const Time = (t) => {
        return t.toString().padStart(2, "0");
      };

      setInterval(() => {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        hr.innerHTML = Time(h);
        min.innerHTML = Time(m);
        sec.innerHTML = Time(s);
        if (hr.innerHTML >= 12) {
          meridian.innerHTML = "PM";
        } else {
          meridian.innerHTML = "AM";
        }
      }, 1000);