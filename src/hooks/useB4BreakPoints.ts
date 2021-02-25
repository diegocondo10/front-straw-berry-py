import useMedia from 'use-media';

const useB4BreakPoints = (
  { xs = 575, sm = 576, md = 768, lg = 992, xl = 1200 } = {
    xs: 575,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
) => {
  const isXs = useMedia({ maxWidth: xs });
  const isSm = useMedia({ minWidth: sm });
  const isMd = useMedia({ minWidth: md });
  const isLg = useMedia({ minWidth: lg });
  const isXl = useMedia({ minWidth: xl });

  const inXs = useMedia({ maxWidth: xs });
  const inSm = useMedia({ minWidth: sm, maxWidth: xl });
  const inMd = useMedia({ minWidth: md, maxWidth: xl });
  const inLg = useMedia({ minWidth: lg, maxWidth: xl });
  const inXl = useMedia({ minWidth: xl });

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    inXs,
    inSm,
    inMd,
    inLg,
    inXl,
  };
};

export default useB4BreakPoints;
