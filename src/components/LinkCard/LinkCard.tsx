import React from 'react';
import { Link, View } from '@aws-amplify/ui-react';

interface LinkCardProps {
  isExternal: boolean;
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const LinkCard: React.FC<LinkCardProps> = ({
  isExternal,
  href,
  children,
  icon
}) => {
  return (
    <Link href={href} isExternal={isExternal} className="link-card">
      <View className="link-card__icon">{icon}</View>
      <View className="link-card-children">{children}</View>
    </Link>
  );
};

export default LinkCard;
