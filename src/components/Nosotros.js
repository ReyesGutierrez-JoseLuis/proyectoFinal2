import React from "react";
import tw from "twin.macro";
import TwoColWithTwoFeaturesAndButtons from "./features/TwoColWithTwoFeaturesAndButtons";
import PopularAndRecentBlogPost from "./blogs/PopularAndRecentBlogPosts";
import MiniCenteredFooter from "./footers/MiniCenteredFooter";

class Nosotros extends React.Component {
  render() {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    return (
      <div>
        <center>
         <TwoColWithTwoFeaturesAndButtons />
        </center>
        <PopularAndRecentBlogPost />
        <MiniCenteredFooter />
      </div>
    );
  }
}

export default Nosotros;
