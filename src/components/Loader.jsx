import { createPortal } from 'react-dom';
import { Rings } from 'react-loader-spinner';
import { LoadingWpr } from '../styles/Loader.styled';

const LoaderSpinner = document.querySelector('#loader');

export const Loader = () => {
  return createPortal(
    <LoadingWpr>
      <Rings
        height="100"
        width="100"
        color="#8c8c8c"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LoadingWpr>,
    LoaderSpinner
  );
};
