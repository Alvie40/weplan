import React from "react";
import TopicContainer from "./TopicContainer.component";

export default () => (
  <TopicContainer id="wedding" title="Wedding">
    <div className="container">
      <div className="one-half column">
        <h2>CEREMONY</h2>
        <p>
          Saturday, August 15<sup>th</sup> 2020 @ 3:00 PM
        </p>
        <p>
          Ocean Edge Resort & Golf Club – Front Lawn Attire: Formal Garden
        </p>
        <p>
          <a href="img/ocean-edge.jpg">
            <img
              className="location-image"
              src={require("../img/ocean-edge.jpg")}
              alt="Ocean Edge"
            />
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          <a href="https://goo.gl/maps/zG8mYM8PbShWgK1A6">Google Maps</a> 
        </p>
        <p>
        A ceremony on the beach. A kiss under an aged linden tree. A first dance in a glittering ballroom. Among Cape Cod wedding venues, Ocean Edge stands out, and for good reason. Acres of possibility await; make your special day even more so. Dream weddings don’t happen overnight. Reach out, and we’ll start putting it all together.
        </p>
        
      </div>
      <div className="one-half column">
      <h2>RECEPTION</h2>
        <p>
          Saturday, August 15<sup>th</sup> 2020 @ 5:00 PM
        </p>
        <p>Ocean Edge Resort & Golf Club – Front Lawn</p>
        <p>
          <a href="img/reception.jpg">
            <img
              className="location-image"
              src={require("../img/reception.jpg")}
              alt="Ocean Edge Golf Club"
            />
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          <a href="https://goo.gl/maps/zG8mYM8PbShWgK1A6">Google Maps</a> 
        </p>
        <p>
        A ceremony on the beach. A kiss under an aged linden tree. A first dance in a glittering ballroom. Among Cape Cod wedding venues, Ocean Edge stands out, and for good reason. Acres of possibility await; make your special day even more so. Dream weddings don’t happen overnight. Reach out, and we’ll start putting it all together.
        </p>
      </div>
    </div>

    <hr />


    <h2>DAY BEFORE THE WEDDING (14 August)</h2>
    <p>
      Friday, August 14th, 2020 Ocean Edge Resort & Golf Club – Ocean Terrace
      7:00 PM Join the bride and groom for an informal, pre-wedding cocktail –
      cash bar
    </p>

    <hr />

    <h2>DAY AFTER THE WEDDING</h2>
    <p>
      Sunday, August 16th, 2020 Ocean Edge Resort & Golf Club – Carriage House
      9:00 AM to 11:00 AM Join the newly weds for a send off brunch!{" "}
    </p>
  </TopicContainer>
);
