import { jsx, Container, Button, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import styles from "./styles";
import data from "./data";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import config from "config.json";
import axios from "axios";

export default function Blogs(props) {
  const [blogTutorials, setBlogTutorials] = useState([]);
  useEffect(() => {
    async function getMediumBlogData() {
      console.log('JSON:', config);
      const mediumResponse = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alialhaddad",
      );
      if (mediumResponse.data.status === "ok")
        setBlogTutorials(mediumResponse.data.items);
    }
    getMediumBlogData();
  }, []);

  return (
    <section
      sx={styles.blogsContainer}
      id="blog"
    >
      <h1>Blogs</h1>
      <Container sx={styles.blogTutorialsContainer}>
        {blogTutorials.map((blogTutorial, blogTutorialIdx) => (
          <Box key={blogTutorialIdx} sx={styles.blogTutorialContainer}>
            <h5>{blogTutorial.title}</h5>
            <Image sx={styles.blogTutorialContainerImg} src={blogTutorial.thumbnail} />
            <Button
              className="btn"
              variant="secondary"
              aria-label="Go to Button"
              onClick={() => window.open(blogTutorial.link, '_blank')}
            >
              Go to Medium
            </Button>       
             <p>
              Date Published:<br />
              {format(new Date(blogTutorial.pubDate), 'MM/dd/yyyy')}
            </p>
          </Box>
        ))}
      </Container>
        {/* {JSON.stringify(blogTutorials)} */}
    </section>
  );
}
