import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultContainer = styled.div`
  padding: 20px;
  border: 2px solid white;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
`

export const Option = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: white;
`
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #223a5f;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`
export const ScorePhrase = styled.p`
  font-size: 16px;
  font-weight: 700;
`
export const ScoreNumber = styled.p`
  font-size: 28px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`
export const TriggerBtn = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #223a5f;
  padding: 8px 16px 8px 16px;
  margin: 8px;
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CloseBtn = styled.button`
  border: none;
  align-items: center;
  justify-content: center;
`
export const PopUpImg = styled.img`
  width: 90%;
  align-self: center;
`
export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  justify-content: center;
`
export const SelectedOptionsContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 600px;
  justify-content: space-between;
`
export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameParticipantText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
`
export const GameParticipantChoiceImg = styled.img`
  width: 170px;
  height: 170px;
`
export const ResultText = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`
export const PlayAgainBtn = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #223a5f;
  padding: 8px 16px 8px 16px;
  margin: 8px;
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
