import React from "react";
import TopicContainer from "./TopicContainer.component";
import SecretTooltip from "./SecretTooltip.component";

export default () => (
    <TopicContainer id="logistics" title="Logistics">
    <p>
      We understand that going to a different country to attend a wedding can
      be a daunting experience. That's why in this section we have tried to
      compile information and links to help make your travel and hotel booking
      as simple as possible and to give you ideas for how to make a complete
      vacation out of your trip. Please read through it and if you feel you
      need any additional information or help, do not hesitate to contact us.
    </p>

    <hr />

    <h2>GETTING TO CROATIA</h2>
    <p>
      Being a popular summer tourist destination, getting to Croatia is
      relatively easy. The closest major city to Hvar is&nbsp;
      <a href="https://goo.gl/maps/a8JeWAEuugN2">Split</a> and it is fairly
      well connected by pretty much all European airlines and some low-cost
      carriers, such as&nbsp;
      <a href="https://wizzair.com/#/booking/select-flight/LTN/SPU/2017-08-22/2017-09-02/1/0/0">
        WizzAir
      </a>{" "}
      and&nbsp;
      <a href="https://www.eurowings.com/en.html">Eurowings</a>.
    </p>
    <p>
      The second closest major airport is in{" "}
      <a href="https://goo.gl/maps/goc5oZWa3wC2">Dubrovnik</a>. It is about 5
      hours away from Hvar via a ferry, which is kind of far, but if you are
      planning on doing some touring before or after the wedding it is a great
      location to visit. Have a look at the 'Things to do section' further
      down for more information on that.
    </p>
    <p>
      As of the time of writing there are no&nbsp;
      <a href="https://www.kayak.com/flights/NYC-SPU/2017-08-25/2017-09-02/2adults">
        direct flights
      </a>
      &nbsp; from the US or Canada to Croatia, so guests coming from there
      will have to do at least one connection in a major European hub such as
      Frankfurt, Zurich or Amsterdam.
    </p>

    <hr />

    <p>
      <img
        className="large-image"
        src={require("../img/hvar.jpg")}
        alt="Hvar town"
      />
    </p>

    <h2>FERRY TO THE ISLAND OF HVAR</h2>
    <p>
      The Split airport is located about 25km (16mi) from the harbour from
      where the ferries leave for Hvar. According to the bus company's{" "}
      <a href="http://www.buscroatia.com/airport-split/">website</a> a taxi
      should cost about 35 EUR/40 USD for 1-3 people while the bus costs
      around 4 EUR/5 USD per person. Unless you are in a real hurry to catch a
      ferry, we recommend taking the bus. They are big white coaches just a
      few steps to the left after you exit though the main airport entrance
      and we found them to be very comfortable and convenient. They accept
      both cash and credit card for payment.
    </p>

    <div id="gmap">
      <iframe src="https://www.google.com/maps/d/embed?mid=1QdPbr1DgM7Cgiw2PwAbLgpINiSI"></iframe>
    </div>

    <p>
      The bus or taxi will drop you off at the Split bus station, which is on
      the water. The bus drop-off is only 5 minutes walk from the ferry ticket
      kiosk. There you can buy tickets or ask for the terminal from which your
      ferry leaves if it is unclear from the large electronic panel infront of
      it, listing the departures. The ferry ticket kiosk looks like this:
    </p>
    <p>
      <img
        className="large-image"
        src={require("../img/split-ferry-ticket-kiosk.jpg")}
        alt="Ferry tickets kiosk"
      />
    </p>

    <p>
      Once you are at the seaport and looking for transportation to the
      island, please note that there are two landing spots on the island -
      Hvar Town and the Old Town (Stari Grad). The wedding will be in Hvar
      Town, which is in the south-west end of the island, not in the Old Town,
      which is on the nortern end. Please make sure you are boarding the right
      ferry, but even if you make a mistake, stay calm because there is a very
      convenient bus between the two. As a rule, the car ferries go to Old
      Town (Stari Grad) and take about 2 hours to travel and the fast
      passenger ferries (catamaran) go directly to Hvar Town and take 1 hour.
    </p>

    <div id="gmap">
      <iframe src="https://www.google.com/maps/d/embed?mid=1H0mc9QKj_OwW1TZCWtQc_tb3s9k"></iframe>
    </div>

    <p>
      There are two ferry companies which serve the route from Split to Hvar -
      Jadrolinija and Kapetan Luka. Below we have information for each of
      them.
    </p>

    <h3>
      <a href="http://www.jadrolinija.hr/en/ferry-croatia">Jadrolinija</a>
    </h3>
    <p>
      This is a high-speed catamaran service from Split to Hvar Town which
      takes about 65 min. This is the fastest option and costs around 10
      EUR/11 USD per person. If you have a car, this site also contains the
      schedule and pricing for the ferries, which transport cars to the
      island.
    </p>
    <br />

    <h3>
      <a href="http://www.krilo.hr/en/index.html">Kapetan Luka</a>
    </h3>
    <p>
      This is the regular ferry service which takes about 2.5 hours and should
      cost around 5-10 EUR/6-11 USD per person.
    </p>
    <br />

    <h3>
      <a href="https://www.atlantis-marine.net/en/croatia-boat-transfers">
        Chartered Speed Boat
      </a>
    </h3>
    <p>
      If you are coming as a group or feel like a one percenter, this site has
      information for inclusive transportation packages with pickup from the
      airport. The sailing part of the journey takes between 45 min to 1 hour,
      which is similar to the catamaran service, but is a little bit more
      convenient because it also includes a pickup from the airport. If you
      choose this option, there is a 5% discount using{" "}
      <SecretTooltip
        fnTooltip={() => {
          return "adriaticweddings";
        }}
      >
        this code
      </SecretTooltip>{" "}
      (please click on the 'this' in order to show it).
    </p>

    <hr />

    <h2>DRIVING</h2>
    <p>
      For those renting a car or driving to Croatia, we found the driving
      conditions on the island to be good and there is a parking spot right in
      the center of the town for 1 EUR/hour or 12 EUR/day.
    </p>
    <p>
      Please note that unless you are coming by car to the island of Hvar,
      there should not be a need for you to rent one. There are many organized
      boat trips to discover the surrounding Dalmatian islands and cabrio cars
      can be rented daily at a fairly decent price from Hvar itself and the
      paperwork is not that much. For example we rented this funny car for
      about 60 USD for a day trip:
    </p>
    <p>
      <img
        className="large-image"
        src={require("../img/hvar-rental-car.jpg")}
        alt="Day car rental"
      />
    </p>

    <hr />

    <h2>ACCOMMODATIONS</h2>
    <p>
      Once on the island in Hvar Town there are various accommodation options
      ranging from fancy hotels to renting an apartment on{" "}
      <a href="https://goo.gl/uHTDYn">AirBnB</a>. The wedding will be in the
      Amfora Resort so any accommodation within walking distance from there
      should be fine.
    </p>
    <p>
      From our research we have found that hotels are fairly expensive and
      there are very nice AirBnB options available, so we highly recommend
      doing that.
    </p>
    <p>
      For guests wishing to stay in a hotel, the{" "}
      <a href="http://www.suncanihvar.com/">Suncani Hvar</a> chain of hotels
      offers a 20% discount using{" "}
      <SecretTooltip
        fnTooltip={() => {
          return "WEDDKALOIANJOCELYN";
        }}
      >
        this code
      </SecretTooltip>{" "}
      (please click on the 'this' in order to show it). The code must be
      entered in the <i>"Corporate/Promo Code ?"</i> section for the
      discounted prices to apply and is valid for staying 5 days prior and 5
      days after the wedding day. While this code indeed reduces the listed
      prices, we have found that booking through{" "}
      <a href="https://goo.gl/2xzaIg">Expedia</a> or{" "}
      <a href="https://goo.gl/z6zsZk">Hotels.com</a>&nbsp; shows about the
      same prices or in some cases even cheaper, so please bear that in mind
      as well.
    </p>
  </TopicContainer>
);
