import Button from 'components/Button';
import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: 'left' | 'right';
};

const Highlight = ({
  title,
  subtitle,
  floatImage,
  buttonLabel,
  buttonLink,
  backgroundImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
);

export default Highlight;
