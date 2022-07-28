import React from 'react'
import styled from 'styled-components'

const HistoryContainer = styled.div`
  color: gray;
  padding: 18px;
`
const HeaderContainer = styled.div`
  overflow: hidden;
`
const Title = styled.span`
  float: left;
  font-weight: 500;
  color: #666;
`
const RemoveText = styled.span`
  float: right;
  color: #a7a7a7;
`

const ListContainer = styled.ul`
  margin: 10px 0;
`

//&는 자기 자신을 나타냄
//즉, 나 자신(li)들에서 마지막 요소 값을 제외한 값에 margin-bottom 속성 지정
const KeywordContainer = styled.li`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

// RemoveButton 원본
// const RemoveButton = styled.button`
//   float: right;
//   color: gray;
//   border: 2px solid gray;
//   background-color: white;
//   padding: 3px 5px;
//   border-radius: 12px;
//   font-size: 11px;
//   font-weight: 500;

// `

const RemoveButton = styled.span`
  float: right;
  width: 20px;
  height: 20px;
  background-size: cover;
  background-image: url("/images/clear.png");

`

const Keyword = styled.span`
  float: left;
  font-size: 16px;
  font-weight: 400;
  font-family: "NanumGothic-Bold";
`

function History({ keywords, onRemoveKeyword, onClearKeywords }) {
  console.log('keyword', keywords)
  if (keywords.length === 0) {
    return <HistoryContainer>최근 검색된 기록이 없습니다.</HistoryContainer>
  }
  return (
    <HistoryContainer>
      <HeaderContainer>
        <Title>최근 검색어</Title>
        <RemoveText onClick={onClearKeywords}>전체삭제</RemoveText>
      </HeaderContainer>
      <ListContainer>
        {keywords.map(({ id, text }) => {
          return (
            <KeywordContainer key={id}>
              <Keyword>{text}</Keyword>
              <RemoveButton
                //눌렸을때 해야하는거라 arrow function을 사용하여 실행
                //그냥 함수 쓰면은 그려지자마자 바로 실행됨
                onClick={() => {
                  onRemoveKeyword(id)
                }}
              >
                
              </RemoveButton>
            </KeywordContainer>
          )
        })}
      </ListContainer>
    </HistoryContainer>
  )
}

export default History