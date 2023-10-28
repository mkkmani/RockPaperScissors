import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import GameOption from '../GameOptions'

import {
  AppContainer,
  ResultContainer,
  OptionContainer,
  Option,
  ScoreContainer,
  ScorePhrase,
  ScoreNumber,
  GameViewContainer,
  GameOptionsList,
  PopupContainer,
  TriggerBtn,
  CloseBtn,
  PopUpImg,
  PopUpBody,
  GameResultViewContainer,
  SelectedOptionsContainer,
  GameUserOptionContainer,
  GameParticipantText,
  GameParticipantChoiceImg,
  ResultText,
  PlayAgainBtn,
} from './styledComponents'

const gameStatusList = {
  playing: 'PLAYING',
  completed: 'COMPLETED',
}

class Game extends Component {
  state = {
    score: 0,
    userChoice: '',
    gameChoice: '',
    gameResult: '',
    gameStatus: gameStatusList.playing,
  }

  onClickOption = id => {
    this.setState(
      {
        userChoice: id,
        gameChoice: this.getGameChoice(),
      },
      () => {
        this.evaluateGame()
      },
    )
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusList.playing})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoiceList = choicesList.map(each => each.id)
    const randomIndex = Math.floor(Math.random() * 3)

    return gameChoiceList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state

    if (userChoice === gameChoice) {
      this.setState({
        gameResult: 'IT IS DRAW',
        gameStatus: gameStatusList.completed,
      })
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prev => ({
          gameResult: 'YOU WON',
          score: prev.score + 1,
          gameStatus: gameStatusList.completed,
        }))
      } else {
        this.setState(prev => ({
          gameResult: 'YOU LOSE',
          score: prev.score - 1,
          gameStatus: gameStatusList.completed,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prev => ({
          gameResult: 'YOU WON',
          score: prev.score + 1,
          gameStatus: gameStatusList.completed,
        }))
      } else {
        this.setState(prev => ({
          gameResult: 'YOU LOSE',
          score: prev.score - 1,
          gameStatus: gameStatusList.completed,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prev => ({
          gameResult: 'YOU WON',
          score: prev.score + 1,
          gameStatus: gameStatusList.completed,
        }))
      } else {
        this.setState(prev => ({
          gameResult: 'YOU LOSE',
          score: prev.score - 1,
          gameStatus: gameStatusList.completed,
        }))
      }
    }
  }

  renderGamePlay = () => {
    const {choicesList} = this.props
    return (
      <GameOptionsList>
        {choicesList.map(each => (
          <GameOption
            key={each.id}
            optionDetails={each}
            onClickOption={this.onClickOption}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderGameResult = () => {
    const {gameChoice, userChoice, gameResult} = this.state
    const {choicesList} = this.props

    const userChoiceList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceList[0]

    const gameChoiceList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImg
              src={userChoiceObj.imageUrl}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImg
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>{gameResult}</ResultText>
        <PlayAgainBtn type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainBtn>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state

    switch (gameStatus) {
      case gameStatusList.playing:
        return this.renderGamePlay()
      case gameStatusList.completed:
        return this.renderGameResult()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <OptionContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionContainer>
          <ScoreContainer>
            <ScorePhrase>Score</ScorePhrase>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </ResultContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerBtn type="button">Rules</TriggerBtn>}
            closeOnEscape
            window
          >
            {close => (
              <PopUpBody>
                <PopUpImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseBtn type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseBtn>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default Game
