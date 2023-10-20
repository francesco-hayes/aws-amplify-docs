import { getCustomStaticPath } from '@/utils/getCustomStaticPath';
import { PLATFORM_DISPLAY_NAMES } from '@/data/platforms';
import LinkCard from '@/components/LinkCard';
import LinkCardCollection from '@/components/LinkCardCollection';
import {
  IconGithub,
  IconDiscord,
  IconAmplify,
  IconLearn
} from '@/components/Icons';

export const meta = {
  title: `Overview`,
  description: `This is a description for the overview page.`,
  platforms: ['javascript', 'android']
};

export const getStaticPaths = async () => {
  return getCustomStaticPath(meta.platforms);
};

export function getStaticProps(context) {
  return {
    props: {
      platform: context.params.platform,
      meta
    }
  };
}

const PlatformOverview = ({ platform }) => {
  return (
    <>
      <h1>// Amplify docs for {PLATFORM_DISPLAY_NAMES[platform]}</h1>
      <LinkCardCollection>
        <LinkCard isExternal={true} href="" icon={<IconGithub />}>
          {PLATFORM_DISPLAY_NAMES[platform]} Libraries on Github
        </LinkCard>
        <LinkCard isExternal={true} href="" icon={<IconDiscord />}>
          {'Amplify Discord'}
        </LinkCard>
        <LinkCard isExternal={true} href="" icon={<IconAmplify />}>
          {"What's next for Amplify"}
        </LinkCard>
        <LinkCard isExternal={true} href="" icon={<IconLearn />}>
          {'Amplify Learn'}
        </LinkCard>
      </LinkCardCollection>
    </>
  );
};

export default PlatformOverview;
