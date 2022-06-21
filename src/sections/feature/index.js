import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "C# SERVER SIDE PROGRAMING",
    title: "C# Server Side programing",
    text: "Server Side programming with csharp dotnet and dotnet core",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "DataBase Development and Management",
    title: "DataBase Development and Management",
    text:
      "We Specialize in working with Sql and NoSql Database and can ensure the most robust functionality",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "React Client Side Programming",
    title: "React ClientSide",
    text:
      "ClientSide programming with Reactjs, Wordpress, and other technolgies such as Shopify",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "BlockChain Development",
    title: "BlockChain Development",
    text:
      "Implement solidity to create dapps, and implement apis such as ftx to place orders on crypto assets such as bitcoin ",
  },
];
const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};


export default function Feature() {
 
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality Software"
          title="Amazing usefull Services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => {
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
            />;
          })}
        </Grid>
      </Container>
    </section>
  );
}
