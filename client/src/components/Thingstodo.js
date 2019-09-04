import React from "react";
import TopicContainer from "./TopicContainer.component";


export default () => (
<TopicContainer id="thingstodo" title="Things to do in Ocean Edge">
      <p>
        Since all of you are coming from different parts of the world, we
        presume that you would like to make a full vacation out of your trip to
        Cape Cod. In this section we are listing some of the main tourist places
        to visit and have suggestions for routes to take. As a disclaimer, some
        of these suggestions are compiled from various online sources such as
        Lonely Planet and not locations we have actually visited, but trust us -
        they are awesome :)
      </p>
      <br />

      <h2>
        <a href="https://www.lonelyplanet.com/usa/massachusetts/brewster">BREWSTER</a>
      </h2>
      <p>
        <img
          className="large-image"
          src={require("../img/brewster.jpg")}
          alt="Brewster"
        />
      </p>
      <p>
       
From land to sea and everywhere in between, the Ocean Edge Resort is filled with things to do. Paddleboarding, biking, oyster bed tours, and more — view our event calendar, and start planning your ideal Cape Cod vacation.
      </p>
      <br />

      <h2>
        <a href="https://travel.usnews.com/Cape_Cod_MA/Things_To_Do/Cape_Cod_Rail_Trail_62038/">
          Cape Cod Rail Trail
        </a>
      </h2>
      <p>
        <img
          className="large-image"
          src={require("../img/railtrail.jpg")}
          alt="Cape Cod Rail Trail"
        />
      </p>
      <p>
      Popular with bikers, rollerbladers and horseback riders, this 22-mile paved trail is a breezy ride through the Lower Cape's diverse ecosystems. Previously known as the Old Colony Railroad corridor, the Cape Cod Rail Trail is considered one of the best bike trails in New England. 
      </p>
      <br />

      <h2>
        <a href="https://travel.usnews.com/Cape_Cod_MA/Things_To_Do/Cape_Cod_National_Seashore_62044/">
          SEA SHORE
        </a>
      </h2>
      <p>
        <img
          className="large-image"
          src={require("../img/seashore.jpg")}
          alt="seashore"
        />
      </p>
      <p>
      In 1961, summer native President John F. Kennedy designated the east shore of the Outer Cape a national park. Today, the 40-mile stretch of coast is recognized as having some of the best beaches on Cape Cod, including Nauset Beach in Eastham, Marconi Beach in Wellfleet and Race Point and Herring Cove beaches in Provincetown.
      </p>
    </TopicContainer>
);
