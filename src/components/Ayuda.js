import React from "react";
import SimpleWithSideImage from "./faqs/SimpleWithSideImage";
import tw from "twin.macro";
import PopularAndRecentBlogPost from "./blogs/PopularAndRecentBlogPosts";
import MiniCenteredFooter from "./footers/MiniCenteredFooter";

class Ayuda extends React.Component {
  render() {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;
    return (
      <div>
        <center>
          <SimpleWithSideImage />
          <PopularAndRecentBlogPost />
          <MiniCenteredFooter />
        </center>
      </div>
    );
  }
}

export default Ayuda;
