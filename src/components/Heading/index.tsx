import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineSide?: 'left' | 'bottom' | 'none';
  lineColor?: LineColors;
  size?: 'small' | 'medium' | 'huge';
};

const Heading = ({
  children,
  color = 'white',
  lineSide = 'none',
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineSide={lineSide}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
