import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

type ListItemProps = {
  isOpen?: boolean;
  withIcon?: boolean;
} & (
  | {
      isOpen?: true;
      withIcon?: true;
    }
  | {
      isOpen?: false;
      withIcon?: true;
    }
) &
  React.LiHTMLAttributes<HTMLLIElement>;

export const ListItem = (props: ListItemProps) => {
  const { isOpen, children, withIcon, className, ...listProps } = props;
  return (
    <li className={`list ${className}`} {...listProps} onClick={props?.onClick}>
      <div className="flex items-center gap-1">
        <a href="#">{children}</a>
        {withIcon && (isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />)}
      </div>
    </li>
  );
};

ListItem.displayName = "NavBarListItem"