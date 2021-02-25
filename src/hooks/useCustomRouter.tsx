import { useRouter } from 'next/router';

const useCustomRouter = () => {
  const router = useRouter();

  const goToCallback = (path, method = 'push') => () => {
    router[method](path);
  };

  return { ...router, goToCallback };
};

export default useCustomRouter;
