import messageBus from './event-bus.js';

const { publish } = messageBus;

const publishedContent = document.querySelector('#publisher-content');
const publishButton = document.querySelector('#publish-button');

const publishEvent = () => {
  publish({
    key: 'SEND-TEXT',
    payload: {
      text: publishedContent.value || '',
      timestamp: new Date().getTime(),
    },
  });
};

publishButton.addEventListener('click', () => publishEvent());

publishedContent.addEventListener('keyup', ({ keyCode }) => {
  if (keyCode === 13) {
    event.preventDefault;
    publishEvent();
  }
});
