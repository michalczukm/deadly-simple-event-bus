import messageBus from './event-bus.js';

const responses = document.querySelector('#subscriber');

const { subscribe } = messageBus;

subscribe('SEND-TEXT', ({ payload }) => {
  const listItem = document.createElement('li');
  listItem.appendChild(
    document.createTextNode(
      `${payload.text} // ${new Date(payload.timestamp).toLocaleString()}`
    )
  );

  responses.append(listItem);
});
