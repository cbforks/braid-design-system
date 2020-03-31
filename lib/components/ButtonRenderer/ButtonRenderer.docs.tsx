import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ComponentDocs } from '../../../site/src/types';

import { ButtonRenderer } from './ButtonRenderer';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Button with Custom Renderer',
      Container,
      Example: () => (
        <ButtonRenderer>
          {(ButtonChildren, buttonProps) => (
            <Link to="#" {...buttonProps}>
              <ButtonChildren>Link button</ButtonChildren>
            </Link>
          )}
        </ButtonRenderer>
      ),
      code: `
        import React from 'react';
        import { Link } from 'react-router-dom';
        import { ButtonRenderer } from 'braid-design-system';

        export default () => (
          <ButtonRenderer>
            {(ButtonChildren, buttonProps) => (
              <Link to="#" {...buttonProps}>
                <ButtonChildren>Link button</ButtonChildren>
              </Link>
            )}
          </ButtonRenderer>
        );
      `,
    },
  ],
};

export default docs;
