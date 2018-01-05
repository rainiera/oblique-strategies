import React from 'react'
import {Modal, ModalBackground, ModalContent} from 'bloomer'

export default class AboutModal extends React.Component {
  render() {
    return (<Modal isActive={false}>
      <ModalBackground/>
      <ModalContent>
        <Box>
          Oblique Strategies, originally presented as a pack of cards,
          were by Brian Eno and Peter Schmidt. Each Oblique Strategy is
          a phrase or cryptic remark which can be used to break a creative
          deadlock or dilemma situation.
          This website presents a random Oblique Strategy selected from
          editions 1–5.
          Website by <a href="http://rainier.io/" target="_blank">Rainier Ababao</a>
        </Box>
      </ModalContent>
    </Modal>)
  }
}
