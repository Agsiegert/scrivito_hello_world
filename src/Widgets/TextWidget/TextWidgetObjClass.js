import * as Scrivito from 'scrivito';

const TextWidget = Scrivito.provideWidgetClass('TextWidget', {
  attributes: {
    text: 'string',
  },
});

export default TextWidget;
