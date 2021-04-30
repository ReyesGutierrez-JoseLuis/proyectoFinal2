import React from "react";
import ThreeColWithSideImageWithPrimaryBackground from "./features/ThreeColWithSideImageWithPrimaryBackground";
import tw from "twin.macro";
import PopularAndRecentBlogPost from "./blogs/PopularAndRecentBlogPosts";
import MiniCenteredFooter from "./footers/MiniCenteredFooter";
class Servicios extends React.Component {
  render() {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;
    return (
      <div>
        <center>
        
            <ThreeColWithSideImageWithPrimaryBackground/>
            <PopularAndRecentBlogPost />
        </center>
        <MiniCenteredFooter />
      </div>
    );
  }
}

export default Servicios;
