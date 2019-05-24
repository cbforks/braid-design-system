import partition from 'lodash/partition';
import pick from 'lodash/pick';

import { Tokens } from '../themes/theme';
import { Css } from './types';

import makePadding from './makePadding';

const makeAtoms = (tokens: Tokens): Css => {
  const rules = makePadding(tokens);

  const [queryRules, regularRules] = partition(Object.keys(rules), ruleName =>
    ruleName.startsWith('@'),
  );

  // Include media queries last to ensure higher specificity
  return {
    ...pick(rules, regularRules),
    ...pick(rules, queryRules),
  };
};

export default makeAtoms;