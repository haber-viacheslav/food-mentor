export const handleContinue = (nextPage, updateSelectedData, navigate) => {
  updateSelectedData({ page: nextPage });

  switch (nextPage) {
    case 2:
      navigate('/measure');
      break;
    case 3:
      navigate('/behaviors');
      break;
    case 4:
      navigate('/physical');
      break;
    default:
      navigate('/');
      break;
  }
};
