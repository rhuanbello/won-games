import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';
import Link from 'next/link';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>won</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>

        <S.Footer>
          Won Games {new Date().getFullYear() + 1} © Todos os direitos
          reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="form" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineSide="left" lineColor="secondary">
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
