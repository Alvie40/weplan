import React from "react";
import TopicContainer from "./TopicContainer.component";


export default () => (
<TopicContainer id="thingstodo" title="Things to do in Croatia">
      <p>
        Since all of you are coming from different parts of the world, we
        presume that you would like to make a full vacation out of your trip to
        Croatia. In this section we are listing some of the main tourist places
        to visit and have suggestions for routes to take. As a disclaimer, some
        of these suggestions are compiled from various online sources such as
        Lonely Planet and not locations we have actually visited, but trust us -
        they are awesome :)
      </p>
      <br />

      <h2>
        <a href="https://www.lonelyplanet.com/croatia/dubrovnik">DUBROVNIK</a>
      </h2>
      <p>
        <img
          className="large-image"
          src={require("../img/dubrovnik.jpg")}
          alt="Dubrovnik old city"
        />
      </p>
      <p>
        Located in the very south of the country, Dubrovnik was once called the
        "Pearl of the Adriatic" for its architecture and importance in trade. We
        won't pretend that we know much about its history, but it is a place
        which must be visited and is also a convenient location to fly into and
        work your way up the coast to Hvar. On top of that, for the 'Game of
        Thrones' fans, quite a few scenes from this show were filmed in
        Dubrovnik. See&nbsp;
        <a href="http://www.telegraph.co.uk/travel/maps-and-graphics/game-of-thrones-filming-locations-guide/">
          this article
        </a>{" "}
        for more information.
      </p>
      <br />

      <h2>
        <a href="https://www.lonelyplanet.com/croatia/plitvice-lakes-national-park/attractions/plitvice-lakes-national-park/a/poi-sig/1019024/1318903">
          PLITVICE LAKES
        </a>
      </h2>
      <p>
        <img
          className="large-image"
          src={require("../img/plitvice-lakes.jpg")}
          alt="Plitvice lakes"
        />
      </p>
      <p>
        This is a beautiful national park covered with heavy forests and
        waterfalls. It is in the northern half of the country and is about 2
        hours drive from Zagreb, the capital of Croatia and 4-5 hours from
        Split. If you find good flights to Zagreb, Plitvice Lakes can serve as a
        good midway destination to visit while making you way to the south of
        the country.
      </p>
      <br />

      <h2>
        <a href="https://www.lonelyplanet.com/croatia/dalmatia/hvar-island">
          HVAR AND THE DALMATIAN ISLANDS
        </a>
      </h2>
      <p>
        <img
          className="large-image"
          src={require("../img/mljet.jpg")}
          alt="Mljet"
        />
      </p>
      <p>
        The Dalmatian islands (one of which is Hvar) offer amazing scenery, nice
        beaches and sailing opportunities. Island hopping, swimming and
        sunbathing is great way to spend a few days or even a week. Of these
        islands, Hvar is deemed as the 'party island' while&nbsp;
        <a href="https://www.lonelyplanet.com/croatia/dalmatia/mljet-island">
          Mljet
        </a>{" "}
        is the most scenic and tranquil. It is located between Hvar and
        Dubrovnik.
      </p>
    </TopicContainer>
);
