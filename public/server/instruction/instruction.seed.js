import _ from 'lodash';

export default {
  seed: () => _.times(5, () => ({
    content: 'adir adir adir',
    number: _.random(1, 5)
  }))
};
