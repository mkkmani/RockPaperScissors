import {OptionImg, OptionListItem, GameButton} from './styledComponents'

const GameOption = props => {
  const {optionDetails, onClickOption} = props
  const {imageUrl, id} = optionDetails

  const userChoice = () => {
    onClickOption(id)
  }

  return (
    <OptionListItem>
      <GameButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImg src={imageUrl} alt={id} />
      </GameButton>
    </OptionListItem>
  )
}

export default GameOption
