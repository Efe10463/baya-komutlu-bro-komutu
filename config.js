const config = {
  "token": "",

  "dashboard" : {
    "oauthSecret": "", // botunuzun client secret tini buraya yazin
    "callbackURL": "https://snax-kontrol-panel.glitch.me/callback",// burda login yapmak icin botunuzun Outh2 yazan yere gelip orda daki kizma yapistirip kaydedin
    "sessionSecret": "g",
    "domain": "https://snax-kontrol-panel.glitch.me",// buraya kc at alt yapi yerine yazdiysaniz kc-at-panel isimi ile degistirin
    "port": 8000
  },
};

module.exports = config;