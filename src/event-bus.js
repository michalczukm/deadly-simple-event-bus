const messageBus = () => {
  const subscriptions = new Map();

  return {
    publish: (event) =>
      subscriptions.has(event.key) &&
      subscriptions.get(event.key).forEach((action) => action(event)),
    subscribe: (eventKey, action) => {
      subscriptions.has(eventKey)
        ? subscriptions.get(eventKey).push(action)
        : subscriptions.set(eventKey, [action]);
    },
    unsubscribe: (eventKey) => subscriptions.delete(eventKey),
  };
};

export default messageBus();
