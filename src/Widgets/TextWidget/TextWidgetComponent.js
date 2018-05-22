import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('TextWidget', ({ widget }) =>
  <Scrivito.ContentTag tag='div' content={ widget } attribute='text' />
);
