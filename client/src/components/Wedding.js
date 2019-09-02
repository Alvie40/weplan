import React from "react";
import TopicContainer from "./TopicContainer.component";

export default () => (
  <TopicContainer id="wedding" title="Wedding">
    <div className="container">
      <div className="one-half column">
        <h2>CEREMONY</h2>
        <p>16:45 @ Sveti Marak Church Courtyard</p>
        <p>
          <a href="img/svetimarak.jpg">
            <img
              className="location-image"
              src={require("../img/svetimarak.jpg")}
              alt="Sveti Marak (St Mark's)"
            />
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          <a href="https://goo.gl/maps/7oeGdedkbM72">Google Maps</a> |{" "}
          <a href="img/city-hvar-map.jpg">Tourist Map</a>
        </p>
        <p>
          Located to the left of the Loggia and Clock Tower (the Town Hall) and
          behind the market and row of shops at the back of the harbour. Follow
          signs to the Hotel Park and continue past the café until you arrive at
          the Church. Also have a look at the tourist map above.
        </p>
      </div>
      <div className="one-half column">
        <h2>RECEPTION</h2>
        <p>18:15 @ Bonj les Bains Beach Club</p>
        <p>
          <a href="img/bonjlesbainsbeachclub.jpg">
            <img
              className="location-image"
              src={require("../img/bonjlesbainsbeachclub.jpg")}
              alt="Bonj Les Bains Beach Club"
            />
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          <a href="https://goo.gl/maps/MGBa94iBaA42">Google Maps</a> |{" "}
          <a href="img/city-hvar-map.jpg">Tourist Map</a>
        </p>
        <p>
          Located a 10 minute walk from Sveti Marak and there will be someone to
          lead the way. Ladies, please bear in mind that the walk is over a
          cobbled path, which would not be comfortable if wearing heels, so you
          might consider bringing a pair of flats for the trek.
        </p>
      </div>
    </div>

    <hr />

    <h2>ON THE WEDDING DAY</h2>
    <p>
      The ceremony will start at 17:00 at the Sveti Marak church courtyard.
      Please arrive 10 to 15 minutes before so everybody can get seated and so
      we can start on time.
    </p>
    <p>
      After the ceremony we will raise a glass of champagne and someone will
      lead you to the reception where drinks and appetizers will be served.
    </p>
    <p>
      Wedding attire is summer formal. Gentlemen, please wear a light suit with
      which you will be comfortable with the heat. And ladies, you look pretty
      as you are, in your formal summer dresses :)
    </p>

    <hr />

    <h2>DAY BEFORE THE WEDDING (30 August)</h2>
    <p>
      Welcome cocktails will be held on the terrace of{" "}
      <a href="https://goo.gl/Vd3ZJd">Restaurant Park Hvar</a> from 18:30 to
      23:30.
    </p>
    <p>Cocktail night attire is dressy-casual.</p>

    <hr />

    <h2>DAY AFTER THE WEDDING (1 September)</h2>
    <p>
      Farewell brunch will be held at 11:00 at the&nbsp;
      <a href="http://www.suncanihvar.com/amfora-hvar-grand-beach-resort/maestral-balkan-grill.html">
        Maestral Restaurant
      </a>
      . It is located just a few meters on the path that takes you to the{" "}
      <a href="https://goo.gl/r9TFHt">wedding venue</a>.
    </p>
    <p>Brunch attire is wear anything you want :)</p>
  </TopicContainer>
);
