import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineSide?: 'left' | 'bottom' | 'none';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineSide = 'none'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineSide={lineSide}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
