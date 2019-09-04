import React from "react";
import TopicContainer from "./TopicContainer.component";

export default () => (
  <TopicContainer
    id="brideandgroom"
    name="brideandgroom"
    title="The Bride and Groom"
  >
    <hr />

    <p>
      <img
        className="large-image"
        src={require("../img/proposal.jpg")}
        alt="Andrew Proposing To Jacqueline"
      />
    </p>

    <h2>OUR STORY</h2>
    <p>
      Jacqueline a girl born in Sao Paulo came to find the love of her life in
      Boston. Andrew a boy that had travel the world but decided to stick around
      Boston, felt in love with a Brazilian girl that had the same passion for
      Pokémon as he did. They met through mutual friends, their cupids Ju and
      Joe. After many serendipity events, some amazing homemade fish taco and
      great cocktails they realized that they were made for each other. This
      couple is full of joy and always have amazing time with their family and
      friends, they also have some crazy stories but I guess we should not write
      them here… you probably know or lived some of them with them.
    </p>
    <br/>
    <h2>THE PROPOSAL</h2>
    <p>
    Throughout the month of December, they decided to give each other little gifts so that it would feel like Christmas during the entire month. They had agreed to give each other 7 little gifts, Jacque ended up giving 8. So, on the night of December 22nd, 2018 Andrew asked her to go to dinner, which was their first date place, and on the way home he told her he had another little gift since she had given him 8 gifts. They got to their apartment and in front of their first Christmas tree, Andrew asked her to close her eyes. He started playing their song and when she opened her eyes, he was right in front of her in one knee with the most beautiful ring asking her to marry him and be his forever. She started crying of joy and said yes to the love of her life. Their proposal story was very intimate, and their favorite part was to surprise their families the next couple of days telling and celebrating with all of them! 
    </p>
  </TopicContainer>
);
