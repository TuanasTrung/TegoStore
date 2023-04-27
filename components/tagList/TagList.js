import Tag from '../inputTag/Tag';
import { styled } from '@mui/material/styles';

const TagsListStyle = styled('div')(({ spaceY = 0, spaceX = 8, column }) => ({
  '.MuiChip-root': {
    marginRight: spaceX,
    marginBottom: spaceY + 'px!important',
    '&:last-child': {
      marginRight: 0,
    },
    ...(column && { width: `calc(${100 / column}% - ${spaceX / column}px)` }),
    ...(column && {
      [`&:nth-child(${column}n)`]: {
        marginRight: 0,
      }
    }),
  },
}));

const TagsList = ({
  tags = [],
  tagProps = {},
  activeTag,
  sx = {},
  column,
  onRef,
  ...props
}) => {
  const { active = false, onClick, ...otherTagProps } = tagProps;

  return (
    <TagsListStyle
      style={sx}
      column={column}
      ref={ref => {
        if (onRef) onRef(ref);
      }}
      {...props}
    >
      {tags.map((tag, index) => {
        let tagLabel = typeof tag === 'string' ? tag : tag.label;
        let tagValue = typeof tag === 'string' ? tag : tag.value;

        return (
          <Tag
            key={index}
            value={tagValue}
            name={tagLabel}
            active={active || activeTag === tagValue}
            {...(onClick && { onClick: (e) => onClick(tagValue, e) })}
            {...otherTagProps}
          />
        )
      })}
    </TagsListStyle>
  )
}

export default TagsList;