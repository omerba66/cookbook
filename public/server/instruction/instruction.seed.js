import _ from 'lodash';

export default {
  seed: () => _.times(5, () => ({
    content: 'TOCHEN',
    number: _.random(1, 5)
  }))
};
