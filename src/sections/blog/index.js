import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import { carouselParams, styles, responsive } from './styles';
import data from './data';
export default function Blogs() {
  return (
    <section sx={{ varaint: 'section.blogs', ...styles.blogsContainer}} id="blog">
      <h1>Blogs</h1>
    </section>
  );
}
