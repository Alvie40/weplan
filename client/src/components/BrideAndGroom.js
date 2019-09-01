import React from "react";
import TopicContainer from "./TopicContainer.component";

export default () => (
  <TopicContainer
    id="brideandgroom"
    name="brideandgroom"
    title="The Bride and Groom"
  >
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <p>
            <a href="img/jocelyn-baby.jpg">
              <img
                className="thumbnail"
                src={require("../img/jocelyn-baby.jpg")}
                alt="Jocelyn"
              />
            </a>
            Jocelyn is a sweet and giving girl who always sees the beauty in
            people. As exciting as it was to be rasied in New York, she made it
            her mission to live and explore as many beautiful cities as she
            could. Thanks to her beloved sister Wendy it was possible to jump
            from the neon nights of Miami, through the diverse city of London,
            to then learn the leisurely ways of Italy. While Jocelyn was
            exploring and realizing her passion in life, she realized she needed
            to find her way back to the city she knew her dream job was waiting
            for her in fashion.
          </p>
        </div>

        <div className="one-half column">
          <p>
            <a href="img/kal-baby.jpg">
              <img
                className="thumbnail"
                src={require("../img/kal-baby.jpg")}
                alt="Kal"
              />
            </a>
            Kal is a burly and impatient Eastern European. He moved from his
            homeland Bulgaria to the lovely city of Toronto at the young and
            tender age of 22. Kal then found himself in the IT mecca of Seattle
            and realized after 9 years of the beautiful mountain backdrop and
            serene lakes that he needs to escape to the center of the universe,
            New York.
          </p>
        </div>
      </div>
    </div>

    <hr />

    <p>
      <img
        className="large-image"
        src={require("../img/proposal.jpg")}
        alt="Kal Proposing To Jocelyn"
      />
    </p>

    <h2>OUR STORY</h2>
    <p>
      Being children of the modern day and age, our story began with venturing
      onto OK Cupid. As hesitant as one of us was to engage herself with a
      complete stranger online (while the other happily explored with
      enthusiasm) on our first date it soon became apparent that we met the
      natural occurrences when 2 people meet and all feelings of the unknown
      disappeared because at that moment right in front of me I was meeting my
      best friend. As the cliche tale goes, the rest is history.
    </p>
  </TopicContainer>
);
