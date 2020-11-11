import { Page } from '../../components/page';
import CustomTable from '../../components/table/Table';

const title = 'Movie data from San Francisco';
const description = 'Title and locations from movies in San Francisco';

const Movie = () => {
  return (
    <Page title={title} description={description}>
      <CustomTable />
    </Page>
  );
};

export { Movie as default };
