const request = require('request');

function getTomorrowFormattedDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    const month = tomorrow.getMonth() + 1;
    const day = tomorrow.getDate();
    const year = tomorrow.getFullYear();
  
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
}  

function makeRequests(durationInSeconds, start, end, session) {
    const options = {
        method: 'POST',
        rejectUnauthorized: false
      };      
  const interval = 1000; // 1 second
  const endTime = Date.now() + durationInSeconds * 1000; // Calculate end time

  function sendRequest() {
    request(options, (error, response, body) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(body);
        console.log(data.Message);
      }
    });
  }

  function intervalFunc() {
    if (Date.now() < endTime) {
      sendRequest();
      setTimeout(intervalFunc, interval);
    }
  }

  intervalFunc(); // Start the interval
}





function runCodeAtSpecificTime(targetTime, codeToRun) {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;
  
    if (timeDifference > 0) {
      setTimeout(() => {
        codeToRun();
        setInterval(codeToRun, 24 * 60 * 60 * 1000); // Repeat every 24 hours
      }, timeDifference);
    } else {
      const nextDay = new Date().setDate(new Date().getDate() + 1);
      const nextTargetTime = new Date(nextDay).setHours(targetTime.getHours(), targetTime.getMinutes(), targetTime.getSeconds());
      runCodeAtSpecificTime(nextTargetTime, codeToRun);
    }
  }
  
  // Example usage:
  const targetTime = new Date(); // Set the desired time for each day
  targetTime.setHours(7, 0, 0); // Replace with your desired time
  const codeToRun = () => {
    // Call the function with a duration of 60 seconds (1 minute)
    makeRequests(60,17,21,
      '_ga=GA1.2.988305806.1680961069; _gid=GA1.2.1436320783.1684102564; ASP.NET_SessionId=rlf2ylalkmukpbekoqtlr3ok; _gat=1; .AspNet.TwoFactorRememberBrowser=tgFwSFA5u74BTTGy6XvrZu1WVnI47qTAjTMwn3DUAA-q8jFj5J453_gDNuTtxSze7CQ0p7hhmzV_Y9QQp199r06ygIyiAK8nsPFaFjsN5hU1KJtU4sZkvYV1wW9KiGrKCEF3lAyVmrFZwTXpFshMSHz4Vs1_r7Rog7b1mp_g4t83v59NfrBv2i2lKEkEKBIEe4d2XBTrz5OFgtVehsBYcZ2O9jPzchP3e4BgGrlXUPN5yJD2Z3ReTPDYBS5GFNs-Z-CYb_R6l5qquuj8UnkaNYCRuhpOgVfmW3U4SW4YmGUFuh6vekkrwNA_o-rgWiZ1IoPnM6ectfpLjOH6wtv5E898bWQcu7f8Q_ugfGdHK4zoo2vAAYY9SoTigP4gshhW; samancookie=dHbnuoE1FRT18dxvcitjwP9PGF7bP-9aVfLA1_fPIjHdr2HTuNBR0KL_MgVl8C0e3ovjpOBf3lQ_gHMxz6rganKkLy4WrE_BVsPtEBlCswxKwdW4Gi6WYjtdMOcbpjpoBPXYV_YO_6YEIIY2TvzzTmrOAs0_i_mAIjA8RtR7c6nzAunfadMxD4ZNjhsnC56X-iI_KFRVF2LnKpB5o-8apcTu07TTpAy2se4D2RNjm6BF0Z9jI0S8_xuUfx-kSMFKv8Ol9XI-rQYsO8kbJXFEZyXmCRXtcO28S_FK5V03flXHak4Y8kA9X-sJV_e560_IpwBYYmJcAjc7KkR-XcThGXEaiVvcKdMUFR0xyrhezWMbS0ILuEUzHjaPf5f8-YAudxMDZB31fmBXUDWMxZVHWMLJacnFbcmrdeZKB0muxep9aJf3hN46iMWSM37Gt6Is5jnTcWovANYx1mqD8jS_gKqDXusOnIkyikqh-m2URNsKl47MXgbW_qF87Th_BD0_37yRJXzx8_r7voW6BeTujM6VBhBKJvMY2k9w7mf1dlIIlQyeFK6Fyb6nRaTIyGv9lX3vdnLT_CTxZLzWjD1czSI7iaRP9HpY1QMlfiJ284G7JuN-gG483fiWWYoNkEmV_kurxyDklOXyNAMnGxy3wcE5meN50Zd-GQisdpX21gxd7n-hpYuA01s6L6mBkakQzgds6hYC6v4RWdbLKUtA8AwYE-pZaZTpnn3CKJYO3Ez7gLj9MJpfGej8swRv-lwkWnBU9T0XkmDR-TP0S4vNwvgP5BcXuivGnfMc69Q6iPJ4q09THAWmVtaEiSgK1gYdj8zB93odHgQaPNIPp8LppAIrJqgyURzA8PzM-2BLdwA');
  };

  runCodeAtSpecificTime(targetTime, codeToRun)