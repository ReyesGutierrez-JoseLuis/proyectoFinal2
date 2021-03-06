import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``

export default () => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  //Recommended: Only 2 Items
  const popularPosts = [
    {
      postImageSrc:
        "https://lauburuconsulting.com/wp-content/uploads/2019/07/consultoria-organizacional-vitoria-gasteiz-seleccion-de-personal-headhunting-lauburu-consulting.jpg",
      authorImageSrc:
        "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
      title: "Consultoria que te llevar?? a donde mereces estar",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Jos?? Luis Reyes Guti??rrez",
      authorProfile: "Consultor",
      url: "#"
    },
    {
      postImageSrc:
        "https://miro.medium.com/max/4000/1*BhRKuIwzXpwkx01y7BzATQ.jpeg",
      authorImageSrc:
        "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
      title: "??Para qu?? sirve la consultor??a en TI?",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Jos?? Luis Reyes Guti??rrez",
      authorProfile: "Vlogger",
      url: "https://reddit.com"
    }
  ];

  const recentPosts = [
    {
      postImageSrc:
        "https://xiuhconsulting.com/wp-content/uploads/2020/08/26.08.2020_O0_KN.jpg",
      title: "Elaboraci??n de un Plan Director de Sistemas",
      authorName: "Jos?? Luis Reyes Guti??rrez",
      url: "#"
    },
    {
      postImageSrc:
        "https://www.sbcstrategicbusinessconsulting.com/v4/images/Consultoria.jpg",
      title: "Diagn??stico, Recomendaciones y Plan de Acci??n",
      authorName: "Jos?? Luis Reyes Guti??rrez",
      url: "#"
    },
    {
      postImageSrc:
        "https://www.abogadosenimpuestos.com/wp-content/uploads/2018/04/contrato-cuentas-en-participaci%C3%B3n.jpg",
      title: "Estudios de Impacto Migraci??n a Cloud",
      authorName: "Jos?? Luis Reyes Guti??rrez",
      url: "#"
    },
    {
      postImageSrc:
        "https://aurumcg.com/wp-content/uploads/2020/08/Consultor%C3%ADa-en-gestion-empresarial-por-Aurum-Consulting-Group-Mexico-2.jpg?id=1675",
      title: "Auditor??a de Estados del ??rea de TI ",
      authorName: "Jos?? Luis Reyes Guti??rrez",
      url: "#"
    },
    {
      postImageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPylTMvVSEDwBsluzEFN6qK_UpeWY4yaoG2mtGPGLoGQRuwYOoSgqfvvoGDsEsrndpa0&usqp=CAU",
      title: "Implantaci??n de Procesos ITSM",
      authorName: "Jos?? Luis Reyes Guti??rrez",
      url: "#"
    },
  ]

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>Posts Populares</Heading>
            <PostsContainer>
              {popularPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <AuthorInfo>
                    <AuthorImage src={post.authorImageSrc} />
                    <AuthorNameAndProfession>
                      <AuthorName>{post.authorName}</AuthorName>
                      <AuthorProfile>{post.authorProfile}</AuthorProfile>
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>Post Recientes</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
