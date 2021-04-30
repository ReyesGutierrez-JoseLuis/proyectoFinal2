import React from "react";
import TwoColumnWithInput from "./hero/TwoColumnWithInput";
import PopularAndRecentBlogPost from "./blogs/PopularAndRecentBlogPosts";
import MiniCenteredFooter from "./footers/MiniCenteredFooter";
class Contacto extends React.Component {
  render() {
    return (
      <div>
        <center>
          <TwoColumnWithInput />
          <PopularAndRecentBlogPost />
          <MiniCenteredFooter />
        </center>
      </div>
    );
  }
}

export default Contacto;
