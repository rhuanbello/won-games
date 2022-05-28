import * as S from './styles';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import Link from 'next/link';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading
          color="black"
          size="small"
          lineSide="bottom"
          lineColor="secondary"
        >
          Contact
        </Heading>
        <a href="mailto:suporte@wongames.gg">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading
          color="black"
          size="small"
          lineSide="bottom"
          lineColor="secondary"
        >
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading
          color="black"
          size="small"
          lineSide="bottom"
          lineColor="secondary"
        >
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading
          color="black"
          size="small"
          lineSide="bottom"
          lineColor="secondary"
        >
          Location
        </Heading>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2022 © All rights reserved.</S.Copyright>
  </S.Wrapper>
);

export default Footer;
