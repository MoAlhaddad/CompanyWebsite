import { jsx } from 'theme-ui';
import { Container, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Workflow from 'assets/workflow/workflow.png';

import styles from './styles';
import data from './data';

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <Image src={Workflow} alt='workflow' sx={styles.workflowImg} />
      </Container>
      </section>
  );
}
