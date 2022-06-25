import { jsx, Container, Button, Text, Box, Image, Spinner } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import styles from "./styles";
import data from "./data";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import config from "config.json";
import axios from "axios";

export default function Blogs(props) {
  const [blogTutorials, setBlogTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getMediumBlogData() {
      console.log("JSON:", config);
      const mediumResponse = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alialhaddad"
      );
      if (mediumResponse.data.status === "ok") {
        // setBlogTutorials(mediumResponse.data.items);
        // setLoading(false);
      }
    }
    getMediumBlogData();
  }, []);

  return (
    <section sx={styles.blogsContainer} id="blog">
      <h1 style={{alignSelf: 'flex-start !important', background: 'green'}}>Blogs</h1>
      <Container sx={styles.blogTutorialsContainer}>
        {loading ? (
          <Spinner
            sx={{
              height: "5em",
              width: "5em",
              transition: "height ease-in-out 400",
            }}
          />
        ) : (
          blogTutorials.map((blogTutorial, blogTutorialIdx) => (
            <Box key={blogTutorialIdx} sx={styles.blogTutorialContainer}>
              <h5>{blogTutorial.title}</h5>
              <Image
                sx={styles.blogTutorialContainerImg}
                src={blogTutorial.thumbnail}
              />
              <Button
                className="btn"
                variant="secondary"
                aria-label="Go to Button"
                onClick={() => window.open(blogTutorial.link, "_blank")}
              >
                Go to Medium
              </Button>
              <p>
                Date Published:
                <br />
                {format(new Date(blogTutorial.pubDate), "MM/dd/yyyy")}
              </p>
            </Box>
          ))
        )}
      </Container>
      {/* {JSON.stringify(blogTutorials)} */}
    </section>
  );
}
