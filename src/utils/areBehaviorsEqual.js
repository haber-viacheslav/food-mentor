export const areBehaviorsEqual = (behaviors1, behaviors2) => {
  return (
    behaviors1.length === behaviors2.length &&
    behaviors1.every(
      (behavior, index) =>
        behavior.id === behaviors2[index].id &&
        behavior.selected === behaviors2[index].selected
    )
  );
};
