import React, {useEffect, useState} from 'react';

import { ContentBar, TopBlock, Title, TextBlock, SpanText, Quantity } from './styles';

const initialState = {
  management: 0,
  sales: 0,
  operations: 0,
  marketing: 0,
  humanresources: 0,
  finance: 0,
  customerservice: 0
}

const InfoBar = ({items}) => {
  const [categories, setCategories] = useState(initialState)
 
  useEffect(() => {
    const itemsSum = items.reduce((acc, cur) => {
      const tempObj = {...acc};
      tempObj[cur.type.toLowerCase().replace(/ /gi,'')] = (acc[cur.type.toLowerCase().replace(/ /gi,'')] || 0) + 1;
      return tempObj
    }, {})
    setCategories(() => {
      return {
        ...initialState,
        ...itemsSum,
      }
    })
  }, [items])
  
  return (
    <ContentBar>
      <TopBlock>
        <Title>My Task</Title>
      </TopBlock>
      <TextBlock>
        <SpanText>All Tasks</SpanText>
        <Quantity>{items.length}</Quantity>
      </TextBlock>
      {Object.keys(categories).map(category => 
        <TextBlock key={category}>
          <SpanText>
            {
              category === "humanresources" ? "Human Resources" : category && 
              category === "customerservice" ? "Customer Service" : category
            }
          </SpanText>
          <Quantity type={category}>{categories[category]}</Quantity>
        </TextBlock>
      )}
    </ContentBar>
  );
}

export default InfoBar;